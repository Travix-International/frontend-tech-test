import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from './../loading/component';
import Notification from './../notification/component';
import './style.scss';

const defaultProps = {
  tasks: {},
  isFetching: false,
  notification: {}
};

const propTypes = {
  tasks: PropTypes.shape({}),
  isFetching: PropTypes.bool,
  notification: PropTypes.shape({}),
  taskList: PropTypes.func.isRequired,
  taskDelete: PropTypes.func.isRequired
};

class Task extends Component {
  componentDidMount() {
    const { isFetching, taskList } = this.props;
    if (!isFetching) {
      taskList();
    }
  }
  deleteTask(id) {
    const { taskDelete } = this.props;
    taskDelete(id);
  }
  render() {
    const { tasks, isFetching, notification } = this.props;
    const tasksArray = (tasks ? Object.keys(tasks).map(key => tasks[key]) : []);
    return (
      <div className="main__task">
        <Link to="/task/0" className="btn">New</Link>
        <div className="main__task__content">
          {tasksArray.map(task => (
            <div key={task._id} className="main__task__row">
              <span>
                {task.title}
              </span>
              <Link
                to={`/task/${task._id}`}
                className="btn"
              >Edit</Link>
              <button
                className="btn"
                onClick={() => this.deleteTask(task._id)}
              >Delete</button>
            </div>
          ))}
        </div>
        <Loading show={isFetching} />
        <Notification options={notification} />
      </div>
    );
  }
}

Task.defaultProps = defaultProps;
Task.propTypes = propTypes;

export default Task;
