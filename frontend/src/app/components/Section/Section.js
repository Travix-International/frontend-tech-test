import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './assets/style';

/**
 * Shows white background div with padding
 *
 * @param {node} children - Everything in between of the button opening and closing tag (like Component)
 */
const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
