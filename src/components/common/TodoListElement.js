import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Glyphicon } from "react-bootstrap";
import { Button } from 'travix-ui-kit';

// Todo List Element component
const TodoListElement = ({todo, showDelete}) => {
  return (
    <tr>
      <td className="col-xs-9">{todo.task}</td>
      <td className="col-xs-3">
        <Link to={'todo-edit/' + todo.id}>
          <Button size="xs">
            Edit <Glyphicon glyph="edit"/>
          </Button>
        </Link>
        &nbsp;
        <Button size="xs" className="task-delete" onClick={() => showDelete(todo)}>
          Delete <Glyphicon glyph="remove-circle"/>
        </Button>
      </td>
    </tr>
  );
}

// prop checks
TodoListElement.propTypes = {
  todo: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}

export default TodoListElement;