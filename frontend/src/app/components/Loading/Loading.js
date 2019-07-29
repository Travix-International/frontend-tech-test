import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Section from '../Section';
import Text from './assets/style';

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
