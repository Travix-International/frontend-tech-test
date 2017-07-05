import React, { Component } from 'react';

class TasksListItem extends Component {
  render() {
    const task = this.props.task;

    return (
      <li className="taskslist-item">
        <h2>{task.title}</h2>
        <div className="description">{task.description}</div>
      </li>
    );
  }
}

export default TasksListItem;
