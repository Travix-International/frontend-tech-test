import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.scss';

const defaultProps = {
  task: {
    _id: '',
    title: '',
    description: '',
    date: '',
    completed: false
  }
};

const propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    completed: PropTypes.bool,
  }),
  taskSave: PropTypes.func.isRequired
};

class TaskRegister extends Component {
  save(e) {
    e.preventDefault();
    const { task, taskSave } = this.props;
    const { title, description, date, completed } = this;
    taskSave(task._id, title.value, description.value, date.value, completed.checked);
  }
  render() {
    const { task } = this.props;
    const { title, description, date, completed } = task;
    const customDate = moment(date).format('YYYY-MM-DD');

    return (
      <form
        id="taskForm"
        className="task__form"
        onSubmit={e => this.save(e)}
      >
        <div className="task__form__content">
          <h1>Register Task</h1>
          <span className="">Title</span>
          <input
            type="text" ref={(ref) => { this.title = ref; }}
            className=""
            defaultValue={title}
            required
          />
          <span className="">Description</span>
          <input
            type="text" ref={(ref) => { this.description = ref; }}
            className=""
            defaultValue={description}
            required
          />
          <span className="">Date</span>
          <input
            type="date" ref={(ref) => { this.date = ref; }}
            className=""
            defaultValue={customDate}
            required
          />
          <div>
            <input
              id="register-task-completed"
              type="checkbox" ref={(ref) => { this.completed = ref; }}
              className=""
              defaultChecked={completed}
            />
            <label htmlFor="register-task-completed">Completed</label>
          </div>
        </div>
        <div className="task__form__buttons">
          <button
            type="submit"
            className="btn"
          >Send</button>
          <Link
            to="/"
            className="btn"
          >Back</Link>
        </div>
      </form>
    );
  }
}

TaskRegister.defaultProps = defaultProps;
TaskRegister.propTypes = propTypes;

export default TaskRegister;