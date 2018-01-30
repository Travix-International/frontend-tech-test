import React from 'react';
import { Button, Card } from 'travix-ui-kit';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Form from '../Form';

import { removeTodo, updateTodo } from '../../actions/todos';

import './index.scss';

function Item(props) {
  const { todo } = props;

  return (
    <Card
      checked
    >
      {!props.showEditForm && ([
        <h3 key="todoTitle">{todo.title}</h3>,
        <p key="todoDescription">{todo.description}</p>,
        <p key="todoActions">
          <Button
            onClick={props.edit}
            size="s"
            type="button"
          >
            Edit
          </Button>
          <Button
            onClick={props.removeTodo}
            size="s"
            type="button"
          >
            Delete
          </Button>
        </p>,
      ])}

      {props.showEditForm && ([
        <Form
          action={props.updateTodo}
          actionBtnTitle="Update"
          formTitle="Edit Todo item"
          key="editItemForm"
          todoDescription={todo.description}
          todoTitle={todo.title}
        />,
        <Button
          className="cancelButton"
          key="cancelEditBtn"
          onClick={props.cancelEdit}
          size="s"
          type="button"
        >
          Cancel
        </Button>,
      ])}
    </Card>
  );
}

Item.propTypes = {
  cancelEdit: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  showEditForm: PropTypes.bool.isRequired,
  todo: PropTypes.object.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default observe((app, { value: { id } }) => {
  const showEditForm$ = new BehaviorSubject(false);
  const store = app.get('store');
  const router = app.get('router');

  const cancelEdit = () => {
    showEditForm$.next(false);
  };

  return streamProps()
    .set(
      showEditForm$,
      showEditForm => ({ showEditForm }),
    )
    .set({
      edit: () => {
        showEditForm$.next(true);
      },
      cancelEdit,
      updateTodo: (...args) => {
        store.dispatch(updateTodo(id, ...args));
        cancelEdit();
      },
      removeTodo: () => {
        store.dispatch(removeTodo(id));
        router.push('/');
      },
    })
    .get$();
})(Item);
