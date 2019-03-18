import React from 'react';
import PropTypes from 'prop-types';
import EditTodo from '../containers/EditTodo';
import SaveTodo from '../containers/SaveTodo';
import DeleteTodo from '../containers/DeleteTodo';
import {
  faClipboardCheck,
  faClipboard
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({ onClick, completed, editable, id, title, description }) => (
  <li>
    <span onClick={onClick} className="icon">
      <FontAwesomeIcon icon={completed ? faClipboardCheck : faClipboard} />
    </span>
    <span
      id="title-field"
      onClick={onClick}
      className={
        'todo-field ' + (editable ? 'hidden' : '') + (completed ? ' done' : '')
      }
    >
      {title}
    </span>
    <span
      id="description-field"
      onClick={onClick}
      className={
        'todo-field ' + (editable ? 'hidden' : '') + (completed ? ' done' : '')
      }
    >
      {description}
    </span>
    <SaveTodo
      description={description}
      editable={editable}
      id={id}
      title={title}
    >
      Save
    </SaveTodo>
    <EditTodo id={id} completed={completed} editable={editable}>
      Edit
    </EditTodo>
    <DeleteTodo id={id} editable={editable}>
      Delete
    </DeleteTodo>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  editable: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Todo;
