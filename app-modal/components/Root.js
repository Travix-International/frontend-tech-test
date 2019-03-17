import React from 'react';
import { observe, streamProps } from 'frint-react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  openModal,
  closeModal
} from '../actions/modal';

class Root extends React.Component {
  render() {
    return (
      <div className={`modal modal-overlay ${this.props.modal ? 'is-opened' : ''}`}>
        <div className="modal-window">
          <div className="modal-content">
            {!this.props.showEditMode && (
              <h4>Add new task</h4>
            )}

            {this.props.showEditMode && (
              <h4>Edit new task</h4>
            )}

            <label>Title</label>
            <input
              type="text"
              id="todoInput"
              value={this.props.titleValue}
              onChange={(e) => this.props.changeTitleInput(e.target.value)}
            />

            <label>Description</label>
            <textarea
              type="text"
              rows="6"
              value={this.props.descriptionValue}
              onChange={(e) => this.props.changeDescriptionInput(e.target.value)}
            ></textarea>

            {!this.props.showEditMode && (
              <a
                className="button"
                onClick={() => {
                  this.props.addTodo(this.props.titleValue, this.props.descriptionValue);
                  this.props.closeModal();
                }}
              >
                Add Todo
            </a>
            )}

            {this.props.showEditMode && (
              <a
                className="button"
                onClick={() => {
                  this.props.updateTodo(this.props.todo.id, this.props.titleValue, this.props.descriptionValue);
                  this.props.closeModal();
                }}
              >
                Edit Todo
            </a>
            )}

            <button
              className="close-button"
              aria-label="Close modal"
              type="button"
              onClick={() => this.props.closeModal()}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default observe(function (app) { // eslint-disable-line func-names
  const showEditMode$ = new BehaviorSubject(false);
  const formTitleInput$ = new BehaviorSubject('');
  const formDescriptionInput$ = new BehaviorSubject('');

  const clearInputs = () => {
    formTitleInput$.next('');
    formDescriptionInput$.next('');
    showEditMode$.next(false);
  };

  return streamProps()
    //Self
    .set(
      app.get('store').getState$(),
      state => ({
        modal: state.modal.value,
        showEditMode: state.modal.showEditMode,
        todo: state.modal.todo,
      })
    )
    .set(
      app.get('region').getProps$(),
      regionProps => ({ regionProps })
    )
    .set(
      formTitleInput$,
      (titleValue) => ({ titleValue })
    )
    .set(
      formDescriptionInput$,
      (descriptionValue) => ({ descriptionValue })
    )
    .set(
      showEditMode$,
      (showEditMode) => ({ showEditMode })
    )
    .set({
      changeTitleInput: (value) => {
        formTitleInput$.next(value);
      },
      changeDescriptionInput: (value) => {
        formDescriptionInput$.next(value);
      },
    })
    .setDispatch({
      openModal,
      closeModal
    },
      app.get('store')
    )
    .set({
      logger: app.get('logger')
    })

    // other app: TodosApp
    .set(
      app.getAppOnceAvailable$('TodosApp'),
      todosApp => todosApp.get('store').getState$(),
      todosAppState => ({ todos: todosAppState.todos.value })
    )
    .set(
      app.getAppOnceAvailable$('TodosApp'),
      todosApp => todosApp.get('store'),
      todosAppStore => ({
        addTodo: (title, description) => todosAppStore.dispatch({
          type: 'TODOS_ADD',
          title,
          description
        }),
        updateTodo: (id, title, description) => todosAppStore.dispatch({
          type: 'TODOS_UPDATE',
          id,
          title,
          description
        })
      })
    )

    .get$(); // composed Observable
})(Root);
