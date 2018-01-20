import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Checkbox } from 'travix-ui-kit';

import './TaskLabel.scss';

const TaskLabel = ({ id, title, description, completed, onToggleCompleted, onToggleEditMode, onDelete }) => [
  <div className={classNames('col-9', { completed })}>
    <Checkbox checked={completed} className="toggle-completed" name={id} onChange={onToggleCompleted}>
      <span className="title font-heavy">{title}</span>
      {' '}
      <span className="description">{description}</span>
    </Checkbox>
  </div>,
  <div className="col-3">
    {!completed && <Button onClick={onToggleEditMode} size="xs">Edit</Button>}
    <Button onClick={onDelete} size="xs">Delete</Button>
  </div>,
];

TaskLabel.propTypes = {
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onToggleEditMode: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskLabel;
