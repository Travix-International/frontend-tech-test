/* global document, fetch */
import 'whatwg-fetch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { TodoList } from './components';
import reducer, { loadTasks } from './app.ducks';
import './app.scss';

const store = createStore(reducer);

const LoadedTodoList = connect(state => ({
  todos: state.todos
}))(TodoList);

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    fetch('/tasks')
      .then((response) => {
        return response.json();
      }).then((json) => {
        dispatch(loadTasks(json.tasks));
      }).catch((ex) => {
        throw new Error('parsing failed', ex);
      });
  }

  render() {
    return <LoadedTodoList />;
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};

const ConnectedApp = connect()(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
