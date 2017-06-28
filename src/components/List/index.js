import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

const List = ({ todos, deleteTodo, editTodo }) => (
  <ul className={style.wrapper}>
    { todos.map(l => (
      <li className={style.item} key={l.id}>
        <button className={style.active} />
        <span>{ l.title }</span>
        <button
          className={style.remove}
          onClick={() => deleteTodo(l.id)}
        >
          &times;
        </button>
      </li>
    ))}
  </ul>
);

List.propTypes = propTypes;

export default List;
