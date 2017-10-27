import React, {PropTypes}  from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import { Spinner } from 'travix-ui-kit';
import Menu from "./common/Menu";
import "../stylesheets/main.scss";
import * as types from '../sagas/actionTypes';
import * as todoActions from '../sagas/todos';

// App component
export class App extends React.Component {

  // render
  render() {
    // show the loading state while we wait for the app to load
    const {todos, children, loading} = this.props;
    if (loading) {
      return (
        <div className="spinnerContainer">
          <Spinner size="l" />
        </div>
      );
    }

    // render
    return (
      <div className="container">
        <div>
          <Menu/>
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

// export the connected class
function mapStateToProps(state) {
  return {
    todos: state.todos || [],
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
