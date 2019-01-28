import React from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
  const { task, selectTask } = props;

  return (
    <li key={task.id} className="todo-item" onClick={() => { selectTask(task); }} role="presentation">
      <p>{task.title}</p>
    </li>
  );
};
Task.propTypes = {
  selectTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};
export default Task;
