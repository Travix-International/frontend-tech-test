import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import { Wrapper, Title, Description } from './assets/style';

const Message = ({ title, description, type }) => (
  <Section>
    <Wrapper type={type}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  </Section>
);

Message.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Message;
