import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { TaskItem, Title, Description } from './assets/style';
import Section from '../Section';

const TaskListItem = ({ id, title, description }) => {
  return (
    <Section>
      <TaskItem>
        <NavLink to={`/tasks/${id}`} className="link">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </NavLink>
      </TaskItem>
    </Section>
  );
};

TaskListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default TaskListItem;
