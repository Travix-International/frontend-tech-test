import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo';
import SearchTodo from '../components/SearchTodo';
import TodoList from '../components/TodoList';
import {
  fetchTodos,
  addTodoApi as addTodo,
  deleteTodoApi as deleteTodo,
  editTodoApi as editTodo,
  searchTodos
} from '../actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">To-Do</h1>
        <SearchTodo onSearch={this.props.onSearch} />
        <AddTodo onAdd={this.props.onTodoAdd} />
        <TodoList
          items={this.props.todoItems}
          onTodoDelete={this.props.onTodoDelete}
          onTodoEdit={this.props.onTodoEdit}
        />
      </div>
    );
  }
}

App.propTypes = {
  todoItems: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onTodoAdd: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos());
    },
    onSearch: (query) => {
      dispatch(searchTodos(query));
    },
    onTodoAdd: (title) => {
      dispatch(addTodo(title));
    },
    onTodoDelete: (id) => {
      dispatch(deleteTodo(id));
    },
    onTodoEdit: (todo) => {
      dispatch(editTodo(todo));
    }
  };
};

const mapStateToProps = (state) => {
  const { items, query } = state.todos;

  // Map only todos which title is matching query
  return { todoItems: query ? items.filter(i => i.title.match(query)) : items };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
