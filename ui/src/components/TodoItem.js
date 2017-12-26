import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import './TodoItem.css';

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  const debounceEdit = debounce(onEdit, 300);

  const handleTitleChange = event =>
    debounceEdit({ ...todo, title: event.target.value });

  return (
    <div className="todo-item">
      <button
        className="item-toggle"
        onClick={() => onEdit({ ...todo, completed: !todo.completed })}
      >
        {todo.completed && <span>&#x2713;</span>}
      </button>
      <input
        className="item-text"
        onChange={e => handleTitleChange(e)}
        defaultValue={todo.title}
      />
      <button className="item-delete" onClick={() => onDelete(todo.id)}>
        &times;
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default TodoItem;
