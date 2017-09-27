import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const Todo = (props) => {
  const { todo } = props;
  let Component = <span>{todo.title}</span>;

  if (todo.isDone) {
    Component = <strike><Button>{todo.title}</Button></strike>;
  }

  return Component;
};

Todo.propTypes = {
  todo: PropTypes.object
};

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div className="todo">
      <input placeholder="Add todo" type="text" />
      <ul className="todo__list">
        {todos.map(t => (
          <li className="todo__item" key={t.id}>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array
};

export {
  TodoList,
  Todo
};
