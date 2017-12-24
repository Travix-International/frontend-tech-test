import React, { Component } from 'react';
import { Spinner, Button } from 'travix-ui-kit';

import SingleTask from './singleTask';
import { TASKS_GET_REQUESTED } from '../actions/actionTypes';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.loadMore = this.loadMore.bind(this);
	}
	loadMore() {
		this.props.loadMore();
	}
	renderTasks() {
		return this.props.tasks.map((task, key) => (
			<SingleTask
				key={task.id}
				taskIndex={key}
				details={task}
				lang={this.props.lang}
				deleteTask={this.props.deleteTask}
				updateTask={this.props.updateTask}
				status={this.props.status}
				promises={this.props.promises}
			/>
		));
	}
	render() {
		return (
			<div className='tasks-list-container'>
				{this.props.tasks.length > 0 && <div className='list-container'>
					{this.renderTasks()}
				</div>}
				<div className='load-more-container'>
					{!this.props.promises[TASKS_GET_REQUESTED] && this.props.tasks.length === 0 && <span>{this.props.lang.no_tasks}</span>}
					{this.props.promises[TASKS_GET_REQUESTED] && <Spinner size='s' />}
					{this.props.tasks.length > 0 && <Button onClick={this.loadMore} disabled={this.props.promises[TASKS_GET_REQUESTED]}>
						<span>{this.props.lang.load_more}</span>
					</Button>}
				</div>
			</div>
		);
	}
}

export default ToDoList;
