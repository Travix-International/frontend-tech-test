import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'travix-ui-kit';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

const TodoList = ({isFetching, editTodo, deleteTodo, todos}) => {
  return (
    <List
      items={todos.map(todo => todo.title)}
    />
  );
}

TodoList.propTypes = propTypes;

export default TodoList;
