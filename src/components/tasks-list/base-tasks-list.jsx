import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';

const BaseTasksList = ({ tasks }) => (
  <div className="row">
    { tasks.map(task => <Task task={task} />) }
  </div>
);

BaseTasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};

BaseTasksList.defaultProps = {
  tasks: [],
};

export default BaseTasksList;
