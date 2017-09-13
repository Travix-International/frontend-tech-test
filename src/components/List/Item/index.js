import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import style from './style.scss';

const propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

const Item = ({ todo, deleteTodo, editTodo }) => {
  const debounceUpdate = debounce(editTodo, 250);

  const handleTitleChange = (event, _todo) => (
    debounceUpdate({ ..._todo, title: event.target.value }, _todo.id)
  );

  return (
    <div className={style.item}>
      <button className={style.active} onClick={() => editTodo({ ...todo, completed: !todo.completed }, todo.id)}>
        { todo.completed && (<span className={style.checkIcon}>&#x2713;</span>) }
      </button>
      <input className={`${style.editInput} ${todo.completed && style.completed}`} defaultValue={todo.title} onChange={e => handleTitleChange(e, todo)}/>
      <button className={style.remove} onClick={() => deleteTodo(todo.id)}>&times;</button>
    </div>
  );
};

Item.propTypes = propTypes;

export default Item;
