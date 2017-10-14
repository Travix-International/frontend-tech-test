import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = (props) => (
  <div className="app">
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
