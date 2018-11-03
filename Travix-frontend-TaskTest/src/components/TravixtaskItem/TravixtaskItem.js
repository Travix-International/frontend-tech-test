import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

import './TravixtaskItem.scss';

const TravixtaskItem = ({ task, onTaskSelected,keyVal }) => {
  const rnd = (keyVal%2)+1;
  return (
    <div
      className={`Taskwrap TaskwrapBg--${rnd}`}
      onClick={() => onTaskSelected(task)}
    >
      <h3>{task.title}</h3>
      <Truncate
        className="TaskdescriptionWrap"
        ellipsis={<span>...</span>}
        lines={5}
      >
        <span>{task.description}</span>
      </Truncate>
    </div>
  );
};

TravixtaskItem.propTypes = {
  onTaskSelected: PropTypes.func.isRequired,
  task: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TravixtaskItem;
