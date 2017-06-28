import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';

import {
  getTodosAsync as getTodos,
  createTodoAsync as createTodo,
  editTodoAsync as editTodo,
  deleteTodoAsync as deleteTodo
} from 'actions/todos';

import Form from '../Form';
import List from '../List';
import style from './style.scss';

class Root extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Todo App</h2>
        <Form createTodo={this.props.createTodo} />
        <List
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          todos={this.props.todos}
        />
      </div>
    );
  }
}

export default observe(app => (
  streamProps({})
    .set(
      app.get('store').getState$(),
      state => ({ todos: state.todos.list })
    )
    .setDispatch({
      getTodos,
      createTodo,
      editTodo,
      deleteTodo
    }, app.get('store'))
    .get$()
))(Root);
