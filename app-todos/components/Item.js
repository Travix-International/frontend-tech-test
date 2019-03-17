import React from 'react';
import { observe, streamProps } from 'frint-react';

import { removeTodo } from '../actions/todos';
import { Edit, Remove } from './Icons';

class Item extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <div className="col">
        <div className="task">
          <div className="task-header">
            <h4>{todo.title}</h4>
            <span className="icons" onClick={() => this.props.openModal(true, todo)}>
              <Edit />
            </span>
            <span className="icons" onClick={() => this.props.removeTodo(todo.id)}>
              <Remove />
            </span>
          </div>
          <div className="task-body">
            <p>{todo.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default observe(function (app) {
  const store = app.get('store');

  return streamProps()
    // self
    .setDispatch(
      { removeTodo },
      store
    )

    // other app: TodosApp
    .set(
      app.getAppOnceAvailable$('ModalApp'),
      modalApp => modalApp.get('store').getState$(),
      modalAppState => ({ modal: modalAppState.modal.value })
    )
    .set(
      app.getAppOnceAvailable$('ModalApp'),
      modalApp => modalApp.get('store'),
      modalAppStore => ({
        openModal: (showEditMode, todo) => modalAppStore.dispatch({
          type: 'OPEN_MODAL',
          showEditMode,
          todo
        })
      })
    )
    .get$();
})(Item);
