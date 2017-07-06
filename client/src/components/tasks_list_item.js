import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

class TasksListItem extends Component {
  onDelete() {
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    const task = this.props.task;

    return (
      <li className="taskslist-item">
        <div className="btn-check" onClick={this.onDelete.bind(this)}>
          <svg className="check-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>

        <h2>{task.title}</h2>
        <div className="description">{task.description}</div>
      </li>
    );
  }
}

export default connect(null, { deleteTask })(TasksListItem);
