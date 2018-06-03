import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from './todoList';
import AddTask from './addTask';
import * as TaskActions from '../actions/taskActions';




class App extends React.Component {

    render(){

      const { tasks, actions } = this.props;
        return(

          <div className="app">
            <h3 className="text-center"> Todo List </h3>
            <AddTask add={ actions.addTask } />
            <div className="container">
              <TodoList tasks={ tasks } remove={ actions.removeTask } />
            </div>
          </div>


        )
    }

}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TaskActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
