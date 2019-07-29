import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './assets/style';

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
