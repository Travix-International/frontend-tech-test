import React from 'react';
import { connect } from 'react-redux';

function App() {
  return (
    <div>
      Starting
    </div>
  );
}

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(App);
