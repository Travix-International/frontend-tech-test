import React from 'react';
import PropTypes from 'prop-types';

import debounce from 'lodash/debounce';

import style from './style.scss';

const propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

const List = ({ todos, deleteTodo, editTodo }) => {
  const debounceUpdate = debounce(editTodo, 250);

  const handleTitleChange = (event, todo) => (
    debounceUpdate({ ...todo, title: event.target.value }, todo.id)
  );

  return (
    <ul className={style.wrapper}>
      { todos.map(l => (
        <li className={style.item} key={l.id}>
          <button
            className={style.active}
            onClick={() => editTodo({ ...l, completed: !l.completed }, l.id)}
          >
            { l.completed && (<span className={style.checkIcon}>&#x2713;</span>) }
          </button>

          <input
            className={`${style.editInput} ${l.completed && style.completed}`}
            defaultValue={l.title}
            onChange={e => handleTitleChange(e, l)}
          />

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
};

List.propTypes = propTypes;

export default List;
