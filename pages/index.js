import React, { Component } from 'react';
import Link from 'next/link';
import { Modal, Button } from 'travix-ui-kit';
import withRedux from 'next-redux-wrapper';
import NotificationSystem from 'react-notification-system';
import io from 'socket.io-client';

import { initStore } from './../store';

import { getLang, changeLang } from './../actions/langActions';
import { toggleAboutModal, toggleTaskModal } from './../actions/modalsActions';
import { requestTaskDelete, requestTaskUpdate, requestTasksGet, applyTaskUpdate } from '../actions/tasksActions';

import { HeadContainer, Header } from '../common/index';

import ToDoList from '../components/toDoList';

import stylesheet from '../styles/index.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.changeLang = this.changeLang.bind(this);
		this.openAbout = this.openAbout.bind(this, true);
		this.closeAbout = this.closeAbout.bind(this, false);
		this.loadMore = this.loadMore.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.updateTask = this.updateTask.bind(this);
		this.handleNoMoreData = this.handleNoMoreData.bind(this);
		this.state = {
			test: 120
		};
	}

	componentWillMount() {
		this.props.getLang();
		if (this.props.tasks.length === 0) {
			return this.props.requestTasksGet({ lastId: 0, count: 10 });
		}
	}

	componentDidMount() {
		window.actionEvent = document.createEvent('Event');
		window.actionEvent.initEvent('noMoreData', true, true);
		document.addEventListener('noMoreData', this.handleNoMoreData, false);
		this.socket = io();
		this.socket.on('taskStatusChanged', this.handleTaskStatusChanged);
	}

	componentWillUnmount() {
		document.removeEventListener('noMoreData', this.handleNoMoreData, false);
		this.socket.off('taskStatusChanged', this.handleTaskStatusChanged);
		this.socket.close();
	}

	handleTaskStatusChanged = data => {
		this.props.applyTaskUpdate(data);
	};

	changeLang() {
		this.props.changeLang();
	}

	openAbout(data) {
		this.props.toggleAboutModal(data);
	}

	closeAbout(data) {
		this.props.toggleAboutModal(data);
	}

	loadMore() {
		const lastItem = this.props.tasks[this.props.tasks.length - 1];
		this.props.requestTasksGet({ lastId: lastItem.id, count: 10 });
	}

	deleteTask(data) {
		this.props.requestTaskDelete(data);
	}

	updateTask(data) {
		this.socket.emit('taskStatusChanged', data);
		this.props.requestTaskUpdate(data);
		setTimeout(() => {
			this.props.applyTaskUpdate(data);
		}, 500);
	}

	handleNoMoreData(e) {
		this.refs.notificationSystem.addNotification({
			message: this.props.lang[e.message],
			level: e.level
		});
	}

	render() {
		return (
			<div className="home_page">
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<HeadContainer title={this.props.lang.home_title} />
				<Header changeLang={this.changeLang} openAbout={this.openAbout} lang={this.props.lang} />
				<Modal active={this.props.modals.about} onClose={this.closeAbout}>
					<p>{this.props.lang.about_content}</p>
				</Modal>
				<div className='content'>
					<div className='content-top'>
						<Link prefetch href={{ pathname: '/todo' }} as='/todo'>
							<Button>
								<span className='back_icon'>+</span>
								<span className='back_text'>{this.props.lang.new_task}</span>
							</Button>
						</Link>
					</div>
					<div className='content-bottom'>
						<ToDoList
							lang={this.props.lang}
							tasks={this.props.tasks}
							deleteTask={this.deleteTask}
							updateTask={this.updateTask}
							loadMore={this.loadMore}
							promises={this.props.promises}
							status={this.props.status}
						/>
					</div>
				</div>
				<NotificationSystem ref='notificationSystem' />
			</div>
		);
	}
}

function mapStateToProps({ lang, modals, promises, tasks, status, task }) {
	return {
		lang,
		modals,
		promises,
		tasks,
		status,
		task
	};
}

const actionsToBind = {
	getLang,
	changeLang,
	toggleAboutModal,
	toggleTaskModal,
	requestTaskDelete,
	requestTaskUpdate,
	requestTasksGet,
	applyTaskUpdate
};

export default withRedux(initStore, mapStateToProps, actionsToBind)(Home);
