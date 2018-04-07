import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

import './TaskItem.scss';

const TaskItem = ({ task }) => (
  <div className="Task__wrapper">
    <h3>{task.title}</h3>
    <Truncate className="Task__descriptionWrapper" ellipsis={<span>...</span>} lines={5}>
      <span>{task.description}</span>
    </Truncate>
  </div>
);

TaskItem.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;
