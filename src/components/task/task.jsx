import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{task.title}</h5>
      <p className="card-text">
        {task.description}
      </p>
    </div>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
