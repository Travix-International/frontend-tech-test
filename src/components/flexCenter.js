import React from 'react';

// A simple HOC to align icon font on button vertically
const flexCenter = WrappedComponent => props => {
  const styles = {
    display: 'flex',
    alignItems: 'center'
  }

  return <WrappedComponent style={styles} {...props} />;
};

export default flexCenter;