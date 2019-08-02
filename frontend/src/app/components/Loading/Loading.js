import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Section from '../Section';
import Text from './assets/style';

/**
 * Shows a loading message with an icon
 *
 * @param {string} text
 */
const Loading = ({ text }) => (
  <Section>
    <Text>
      <FaCircleNotch className="icon" /> {text}...
    </Text>
  </Section>
);

Loading.defaultProps = {
  text: 'Loading'
};

Loading.propTypes = {
  text: PropTypes.string
};

export default Loading;
