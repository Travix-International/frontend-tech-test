import React from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Form from '../Form';

import { removeTodo, updateTodo } from '../../actions/todos';

function Item(props) {
  const { todo } = props;

  return (
    <div style={{ background: '#f1f1f1', border: '1px solid #e1e1e1', marginBottom: '15px', padding: '15px', borderRadius: '4px' }}>
      {!props.showEditForm && (
        <div>
          {todo.title}

          [<a href={null} onClick={props.edit}>edit</a>]
          [<a href={null} onClick={props.removeTodo}>x</a>]
        </div>
      )}

      {props.showEditForm && (
        <div>
          <Form
            action={props.updateTodo}
            actionBtnTitle="Update"
            formTitle="Edit Todo item"
            todoDescription={todo.description}
            todoTitle={todo.title}
          />
          [<a href={null} onClick={props.cancelEdit}>cancel</a>]
        </div>
      )}
    </div>
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
