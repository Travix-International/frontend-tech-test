import React from 'react';
import PropTypes from 'prop-types';

import { TaskListType } from '../../constants/propTypes';
import styles from './TaskList.module.scss';
import Task from '../Task/Task';

const TaskList = ({ tasks, editTask, deleteTask }) => (
  <div className={styles.TaskList}>
    {tasks.map(task => (
      <Task key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
    ))}
  </div>
);

TaskList.propTypes = {
  tasks: TaskListType,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: []
}

export default TaskList;
