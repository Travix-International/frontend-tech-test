import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './TaskList.scss';
import Task from './Task';
import { sortTasks, getVisibleTasks } from './utils';

const TaskList = ({ tasks, showCompleted }) => {
  /* always show incomplete tasks first */
  const visibleTasks = sortTasks(
    showCompleted ? tasks : getVisibleTasks(tasks)
  );
  if (visibleTasks.length === 0) {
    const content = <p className={styles.message}>Nothing to do</p>;
    return <div className={styles.root}>{content}</div>;
  }

  /* eslint-disable no-underscore-dangle */
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
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
