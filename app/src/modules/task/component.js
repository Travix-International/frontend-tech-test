import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
  tasks: {},
  isFetching: false
};

const propTypes = {
  tasks: PropTypes.object,
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
    const { tasks } = this.props;
    const tasksArray = (tasks ? Object.keys(tasks).map(key => tasks[key]) : []);

    return (
      <div className="main-task">
        <Link to="/task/0" className="">New</Link>
        {tasksArray.map(task => (
          <div key={task._id}>
            {task.title}
            <Link to={`/task/${task._id}`} className="">Edit</Link>
            <button onClick={() => this.deleteTask(task._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

Task.defaultProps = defaultProps;
Task.propTypes = propTypes;

export default Task;
