import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ text }) => {
  return <div>{text}...</div>;
};

Loading.defaultProps = {
  text: 'Loading'
};

Loading.propTypes = {
  text: PropTypes.string
};

export default Loading;
