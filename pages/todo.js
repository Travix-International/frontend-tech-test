import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Modal, Button } from 'travix-ui-kit';
import withRedux from 'next-redux-wrapper';
import NotificationSystem from 'react-notification-system';
import io from 'socket.io-client';

import { initStore } from './../store';

import { getLang, changeLang } from './../actions/langActions';
import { toggleAboutModal } from './../actions/modalsActions';
import { requestTaskPost, requestTaskGet, requestTaskUpdate, deleteCurrentTask, applyTaskUpdate } from './../actions/tasksActions';

import { HeadContainer, Header } from '../common/index';

import stylesheet from '../styles/todo.scss';

import ToDoForm from '../components/toDoForm';

class ToDo extends Component {
	constructor(props) {
		super(props);
		this.changeLang = this.changeLang.bind(this);
		this.openAbout = this.openAbout.bind(this, true);
		this.closeAbout = this.closeAbout.bind(this, false);
		this.handleTaskUpdated = this.handleTaskUpdated.bind(this);
		this.updateTask = this.updateTask.bind(this);
	}

	componentWillMount() {
		this.props.getLang();
	}

	componentDidMount() {
		window.actionEvent = document.createEvent('Event');
		window.actionEvent.initEvent('taskUpdated', true, true);
		document.addEventListener('taskUpdated', this.handleTaskUpdated, false);
		this.socket = io();
		this.socket.on('taskStatusChanged', this.handleTaskStatusChanged);
		if (this.props.url.query.id) {
			if (this.props.url.query.id.split('-').length === 5) {
				return this.props.requestTaskGet(this.props.url.query.id);
			}
			setTimeout(() => {
				this.refs.notificationSystem.addNotification({
					message: this.props.lang.bad_task_id,
					level: 'error'
				});
				setTimeout(() => Router.push('/'), 2000);
			});
		}
	}

	componentWillUnmount() {
		this.props.deleteCurrentTask();
		document.removeEventListener('taskUpdated', this.handleTaskUpdated, false);
		this.socket.off('taskStatusChanged', this.handleTaskStatusChanged);
		this.socket.close();
	}

	handleTaskStatusChanged = data => {
		this.props.applyTaskUpdate(data);
	};

	handleTaskUpdated(e) {
		this.refs.notificationSystem.addNotification({
			message: this.props.lang[e.message],
			level: e.level
		});
		setTimeout(() => Router.push('/'), 2000);
	}

	changeLang() {
		this.props.changeLang();
	}

	openAbout(data) {
		this.props.toggleAboutModal(data);
	}

	closeAbout(data) {
		this.props.toggleAboutModal(data);
	}

	updateTask(data) {
		this.socket.emit('taskStatusChanged', data);
		this.props.requestTaskUpdate(data);
		setTimeout(() => {
			this.props.applyTaskUpdate(data);
		}, 500);
	}

	render() {
		return (
			<div className="todo_page">
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<HeadContainer title={this.props.lang.home_title} />
				<Header changeLang={this.changeLang} openAbout={this.openAbout} lang={this.props.lang} />
				<Modal active={this.props.modals.about} onClose={this.closeAbout}>
					<p>{this.props.lang.about_content}</p>
				</Modal>

				<div className='content'>
					<div className='content-top'>
						<Link prefetch href={{ pathname: '/' }} as='/'>
							<Button>
								<span className='back_icon'>&laquo;</span>
								<span className='back_text'>{this.props.lang.back_to_tasks}</span>
							</Button>
						</Link>
					</div>
					<div className='content-bottom'>
						<ToDoForm
							initialValues={this.props.url.query.id ? this.props.task : {}}
							lang={this.props.lang}
							addTask={this.props.requestTaskPost}
							updateTask={this.updateTask}
							promises={this.props.promises}
						/>
					</div>
				</div>
				<NotificationSystem ref='notificationSystem' />
			</div>
		);
	}
}

function mapStateToProps({ lang, modals, promises, task }) {
	return {
		lang,
		modals,
		promises,
		task
	};
}

const actionsToBind = {
	getLang,
	changeLang,
	toggleAboutModal,
	requestTaskPost,
	requestTaskGet,
	requestTaskUpdate,
	deleteCurrentTask,
	applyTaskUpdate
};

export default withRedux(initStore, mapStateToProps, actionsToBind)(ToDo);

