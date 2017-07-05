import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
  show: false
};

const propTypes = {
  show: PropTypes.bool
};

const Loading = ({ show }) => {
  const className = (`loading ${(show ? 'show' : '')}`);
  return (
    <div className={className}>
      <div>.</div>
    </div>
  );
};

Loading.defaultProps = defaultProps;
Loading.propTypes = propTypes;

export default Loading;
