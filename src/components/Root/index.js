import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';
import { observe, streamProps } from 'frint-react';

import {
  getTodosAsync as getTodos,
  addTodoAsync as addTodo,
  editTodoAsync as editTodo,
  deleteTodoAsync as deleteTodo,
  updateSort
} from 'actions/todos';

// components
import Form from '../Form';
import List from '../List';
import Footer from '../Footer';

class Root extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateSort: PropTypes.func.isRequired,
    sort: PropTypes.number
  }

  componentWillMount() {
    this.props.getTodos();
  }

  getTodosBySort = (todos, sort) => {
    if (sort === 1) { // active
      return todos.filter(t => !t.completed);
    }

    if (sort === 2) { // complete
      return todos.filter(t => t.completed);
    }
    return todos;
  }

  render() {

    const sortTodos = this.getTodosBySort(this.props.todos, this.props.sort);

    const activeTodoCount = this.props.todos.reduce(function (accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);

    return (
      <div>
        <h1>Hello TODO App</h1>
        <Form addTodo={this.props.addTodo}/>
        <List
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          isEmpty={this.props.todos.length === 0}
          isFetching={this.props.isFetching}
          todos={sortTodos}
        />
        { this.props.todos.length ? (
          <Footer
            sort={this.props.sort}
            updateSort={this.props.updateSort}
            activeTodoCount={activeTodoCount}
          />
        ) : null }
      </div>
    )
  }
};

export default observe(app => (
  streamProps({})
    .set(
      app.get('store').getState$(),
      state => ({
        todos: state.todos.list,
        sort: state.todos.sort,
        isFetching: state.todos.isFetching
      })
    )
    .setDispatch({
      getTodos,
      addTodo,
      editTodo,
      deleteTodo,
      updateSort
    }, app.get('store'))
    .get$()
))(Root);
