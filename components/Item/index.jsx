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
      {props.showEditForm
        ? ([
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
          </Button>])
        : ([
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
          </p>])
      }
    </Card>
  );
}

Item.propTypes = {
  cancelEdit: PropTypes.func,
  edit: PropTypes.func,
  removeTodo: PropTypes.func,
  showEditForm: PropTypes.bool.isRequired,
  todo: PropTypes.object.isRequired,
  updateTodo: PropTypes.func,
};

Item.defaultProps = {
  cancelEdit: () => {},
  edit: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
};

export default observe((app, params$) => {
  const showEditForm$ = new BehaviorSubject(false);
  const todo$ = new BehaviorSubject({});
  const actions$ = new BehaviorSubject({});

  const store = app.get('store');
  const router = app.get('router');

  const cancelEdit = () => {
    showEditForm$.next(false);
  };

  params$.subscribe(({ todo }) => {
    todo$.next(todo);
    if (todo.id) {
      actions$.next({
        edit: () => {
          showEditForm$.next(true);
        },
        cancelEdit,
        updateTodo: (...args) => {
          store.dispatch(updateTodo(todo.id, ...args));
          cancelEdit();
        },
        removeTodo: () => {
          store.dispatch(removeTodo(todo.id));
          router.push('/');
        },
      });
    }
  });

  return streamProps()
    .set(
      showEditForm$,
      showEditForm => ({ showEditForm }),
    )
    .set(
      todo$,
      todo => ({ todo }),
    )
    .set(
      actions$,
      actions => ({ ...actions }),
    )
    .get$();
})(Item);
