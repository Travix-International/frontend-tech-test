import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

class TasksListItem extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.state = { edit: false };
  }

  onDelete() {
    this.props.deleteTask(this.props.task.id);
  }

  onEdit() {
    if (this.state && this.state.edit) {
      this.setState({edit: false});
    } else {
      this.setState({edit: true});
    }
  }

  render() {
    const editMode = this.state.edit;
    const task = this.props.task;

    let taskContent = null;
    if (editMode) {
      taskContent = (
        <div>
          <h2>{task.title}</h2>
          <div className="description">{task.description}</div>
        </div>
      );
    } else {
      taskContent = (
        <div>
          <h2>EDITAR</h2>
          <div className="description">EDITAR</div>
        </div>
      );
    }

    return (
      <li className="taskslist-item">
        <div className="btn-icon" onClick={this.onDelete.bind(this)}>
          <svg className="check-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <div className="btn-icon" onClick={this.onEdit.bind(this)}>
          <svg className="pencil-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </div>

        {taskContent}
      </li>
    );
  }
}

export default connect(null, { deleteTask })(TasksListItem);
