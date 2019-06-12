import React from 'react';
import Button from '@material-ui/core/Button';

import './TaskButton.scss';

const TaskButton = ({
  handleClick, title, color, variant,
}) => (
  <Button
    className="add-button"
    color={color}
    onClick={handleClick}
    variant={variant}
  >
    {title}
  </Button>
);


export default TaskButton;
