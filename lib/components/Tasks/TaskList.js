import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task from './Task';
import { sortTasks, getVisibleTasks } from './utils';

const TaskList = ({ tasks, showCompleted }) => {
  const visibleTasks = showCompleted
    ? tasks
    : sortTasks(getVisibleTasks(tasks));
  if (visibleTasks.length === 0) {
    const content = <p className="task-list-box-empty-msg">Nothing to do</p>;
    return <div className="task-list-box">{content}</div>;
  }

  /* eslint-disable no-underscore-dangle */
  return (
    <div className="task-list-box">
      <ul className="task-list">
        {visibleTasks.map(task => <Task key={task._id} {...task} />)}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  showCompleted: PropTypes.bool.isRequired,
  tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TaskList);
