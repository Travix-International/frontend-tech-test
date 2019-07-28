import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TaskItem, Title, Description } from './assets/style';

const TaskListItem = ({ id, title, description }) => {
  return (
    <TaskItem>
      <Link to={`/tasks/${id}`} className="link">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
    </TaskItem>
  );
};

TaskListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default TaskListItem;
