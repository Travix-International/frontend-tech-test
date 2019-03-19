import React from 'react';
import { observe, streamProps } from 'frint-react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { deleteTodoAsync, updateTodoAsync } from '../actions/todos';
import { Edit, Remove } from './Icons';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logger.info("User clicked on Save button",
      {
        id: this.props.todo.id,
        title: this.props.titleValue,
        description: this.props.descriptionValue
      }
    );

    this.props.updateTodoAsync(
      this.props.todo.id,
      this.props.titleValue.trim(),
      this.props.descriptionValue.trim()
    );

    this.props.clearInputs();
  };

  render() {
    const { todo } = this.props;

    return (
      <div className="col">

        {!this.props.showEditMode && (
          <div className="task">
            <div className="task-header">
              <h4>{todo.title}</h4>
              <span className="icons" onClick={() => this.props.setEditMode(todo)}>
                <Edit />
              </span>
              <span className="icons" onClick={() => this.props.deleteTodoAsync(todo.id)}>
                <Remove />
              </span>
            </div>

            <div className="task-body">
              <p>{todo.description}</p>
            </div>
          </div>
        )}

        {this.props.showEditMode && (
          <div className="task">

            <form onSubmit={this.handleSubmit}>
              <div className="task-header no-flex">
                <label>Title</label>
                <input
                  type="text"
                  id="todoInput"
                  value={this.props.titleValue}
                  onChange={(e) => this.props.changeTitleInput(e.target.value)}
                />

              </div>

              <div className="task-body">
                <label>Description</label>

                <textarea
                  type="text"
                  rows="6"
                  value={this.props.descriptionValue}
                  onChange={(e) => this.props.changeDescriptionInput(e.target.value)}
                ></textarea>

                <input
                  className="button"
                  type="submit"
                  value="Save" />
              </div>
            </form>

          </div>
        )}
      </div>
    );
  }
}

export default observe((app) => {
  const showEditMode$ = new BehaviorSubject(false);
  const formTitleInput$ = new BehaviorSubject('');
  const formDescriptionInput$ = new BehaviorSubject('');

  const store = app.get('store');

  return streamProps()
    // self
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
      setEditMode: (todo) => {
        showEditMode$.next(true);
        formTitleInput$.next(todo.title);
        formDescriptionInput$.next(todo.description);
      },
      changeTitleInput: (value) => {
        formTitleInput$.next(value);
      },
      changeDescriptionInput: (value) => {
        formDescriptionInput$.next(value);
      },
      clearInputs: () => {
        formTitleInput$.next('');
        formDescriptionInput$.next('');
        showEditMode$.next(false);
      }
    })
    .setDispatch(
      {
        deleteTodoAsync,
        updateTodoAsync
      },
      store
    )
    .set({
      logger: app.get('logger')
    })

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
