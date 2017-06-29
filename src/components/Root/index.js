import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';

import {
  getTodosAsync as getTodos,
  createTodoAsync as createTodo,
  editTodoAsync as editTodo,
  deleteTodoAsync as deleteTodo,
  updateSort
} from 'actions/todos';

import Form from '../Form';
import Nav from '../Nav';
import List from '../List';
import style from './style.scss';

class Root extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateSort: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    sort: PropTypes.string
  }

  componentWillMount() {
    this.props.getTodos();
  }

  getTodosBySort = (todos, sort) => {
    if (sort === 'active') {
      return todos.filter(t => !t.completed);
    }

    if (sort === 'completed') {
      return todos.filter(t => t.completed);
    }

    return todos;
  }

  render() {
    const sortTodos = this.getTodosBySort(this.props.todos, this.props.sort);

    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Todo App</h2>
        <Form createTodo={this.props.createTodo} />
        <List
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          todos={sortTodos}
        />
        <Nav
          sort={this.props.sort}
          updateSort={this.props.updateSort}
        />
      </div>
    );
  }
}

export default observe(app => (
  streamProps({})
    .set(
      app.get('store').getState$(),
      state => ({
        todos: state.todos.list,
        sort: state.todos.sort
      })
    )
    .setDispatch({
      getTodos,
      createTodo,
      editTodo,
      deleteTodo,
      updateSort
    }, app.get('store'))
    .get$()
))(Root);
