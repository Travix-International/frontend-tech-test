import React from 'react';

// A simple HOC to align icon font on button vertically
const flexCenter = WrappedComponent => {
  const _flexCenter = props => {
    const styles = {
      display: 'flex',
      alignItems: 'center'
    }
  
    return <WrappedComponent style={styles} {...props} />;
  };

  _flexCenter.displayName = `flexCenter(${WrappedComponent.displayName || WrappedComponent.name}`;
  
  return _flexCenter;
};

export default flexCenter;