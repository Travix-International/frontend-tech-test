import React from 'react';
import PropTypes from 'prop-types';

import Todo from "../Todo/";

export default function TodoList(props) {
  const { todos, onTodoClick } = props;
  
  return (
    <div className={"todoListContainer"}>
      {todos.map(todo =>
        <Todo
          completed={todo.completed}
          description={todo.description}
          editing={todo.editing}
          id={todo.id}
          key={todo.id}
          onClick={() => onTodoClick(todo.id)}
          title={todo.title}
        />
      )}
    </div>
  );
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};
