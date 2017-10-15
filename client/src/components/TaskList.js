import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll, updateTask, deleteTask } from '../actions/tasks';
import { FETCH_ALL, FETCH_ALL_SUCCESS } from '../actions/actionTypes';

import TaskItem from './TaskItem';

import '../style/TaskList.scss';

class TaskList extends Component {
	componentDidMount(){
	  this.props.fetchAll();
	}

	handleUpdate = (task) => {
		const { updateTask } = this.props;
		updateTask(task);
	}

	handleRemove = (task) => {
		const { deleteTask } = this.props;

		deleteTask(task.id);
	}

	renderTaskList() {
		const { tasks } = this.props;

		if (tasks.length === 0) {
			return <div className="msg">
				You not have any task,<br />
				click on add task button to add one
			</div>;
		}

		return tasks.map( (task, index) => {
			return <TaskItem
				key={index}
				task={task}
				handleUpdate={this.handleUpdate}
				handleRemove={this.handleRemove} />
		})
	}

  render() {
    return (
			<div>
	      <ul className="TaskList">
					{this.renderTaskList()}
	      </ul>
			</div>
    );
  }
}

const mapStateToProps = state => {
	const { tasks } = state;
  return tasks;
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: () => {
      dispatch(fetchAll());
    },
		updateTask: (task) => {
			dispatch(updateTask(task));
		},
		deleteTask: (id) => {
			dispatch(deleteTask(id));
		}
  }
}

const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default ConnectedTaskList;
