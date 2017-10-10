import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
   render() {
      return (
         <p>HELLOOOOOOO!!!!!</p>
      );
   }
};

var mapStateToProps = function(state) {
  return {
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);