import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
  options: {
    show: false,
    success: false,
    message: ''
  }
};

const propTypes = {
  options: PropTypes.shape({
    show: PropTypes.bool,
    success: PropTypes.bool,
    message: PropTypes.string
  })
};

const Notification = ({ options }) => {
  let className = 'notification ';
  if (options.show) className += 'show ';
  if (options.show && options.success) className += 'success ';
  if (options.show && !options.success) className += 'warning ';
  return (
    <div className={className}>
      <span>{options.message}</span>
    </div>
  );
};

Notification.defaultProps = defaultProps;
Notification.propTypes = propTypes;

export default Notification;
