import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';
import { observe, streamProps } from 'frint-react';

import {
  getTodosAsync as getTodos,
  addTodoAsync as addTodo,
  updateSort
} from 'actions/todos';

// our action creators
import { incrementCounter, decrementCounter } from '../../actions/counter';

// components
import Form from '../Form';
import List from '../List';
// ui-kit
import { Button } from 'travix-ui-kit';

class Root extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        <h1>Hello TODO App</h1>
        <Form addTodo={this.props.addTodo}/>
        <List
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          isEmpty={this.props.todos.length === 0}
          isFetching={this.props.isFetching}
          todos={this.props.todos}
        />
        <div>
          <p>Counter value: {this.props.counter} and input value</p>
          <Button size="s" onClick={() => props.incrementCounter()}>Inc +</Button>
          <Button size="s" onClick={() => props.decrementCounter()}>Dec -</Button>
        </div>
      </div>
    )
  }
};

export default observe(app => (
  streamProps({})
    .set(
      app.get('store').getState$(),
      state => ({
        counter: state.counter.value,
        todos: state.todos.list,
        isFetching: state.todos.isFetching
      })
    )
    .setDispatch({
      incrementCounter,
      decrementCounter,
      getTodos,
      addTodo
    }, app.get('store'))
    .get$()
))(Root);
