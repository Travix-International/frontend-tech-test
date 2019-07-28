import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './assets/style';

const Section = ({ children }) => <Wrapper>{children}</Wrapper>;

Section.propTypes = {
  children: PropTypes.element.isRequired
};

export default Section;
