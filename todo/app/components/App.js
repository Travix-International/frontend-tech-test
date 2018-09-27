import React from 'react';

/**
 * @author Syed Aibad Hashmi
 * @description Entry Component
 */
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
