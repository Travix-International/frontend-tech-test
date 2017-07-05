import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from './../loading/component';
import './style.scss';

const defaultProps = {
  tasks: {},
  isFetching: false
};

const propTypes = {
  tasks: PropTypes.shape({}),
  isFetching: PropTypes.bool,
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
    const { tasks, isFetching } = this.props;
    const tasksArray = (tasks ? Object.keys(tasks).map(key => tasks[key]) : []);
    return (
      <div className="main__task">
        <Link to="/task/0" className="btn">New</Link>
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
        <Loading show={isFetching} />
      </div>
    );
  }
}

Task.defaultProps = defaultProps;
Task.propTypes = propTypes;

export default Task;
