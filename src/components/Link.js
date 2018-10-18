import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  // <div>
  <a
    className="button btn-link"
    disabled={active}
    onClick={onClick}
  >
    {children}
  </a>
  // </div>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
