import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import { Wrapper, Title, Description } from './assets/style';
/**
 * Shows a loading message with an icon
 *
 * @param {string} title - Message title
 * @param {string} description - Message description
 * @param {string} type -  Message type (success|error|warning|info)
 */
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
