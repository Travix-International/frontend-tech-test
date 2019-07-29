import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Title, Description } from './assets/style';
import Section from '../Section';

const TaskView = ({ id, title, description }) => {
  return (
    <Section>
      <Title>
        {title} - {id}
      </Title>
      <Description>{description}</Description>
    </Section>
  );
};

TaskView.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default TaskView;
