import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps, Region } from 'frint-react';
import { BehaviorSubject } from 'rxjs';

import { TODO_PROPTYPES } from '../constants';
import { requestDeleteTodo, requestUpdateTodo } from '../actions/todos';
import item from './item.scss';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class Item extends Component {
  static propTypes = {
    todo: TODO_PROPTYPES,
    titleValue: PropTypes.string.isRequired,
    descriptionValue: PropTypes.string.isRequired,
    showEditForm: PropTypes.bool.isRequired,
    requestDeleteTodo: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    changeTitle: PropTypes.func.isRequired,
    changeDescription: PropTypes.func.isRequired,
  };
  componentDidUpdate = (prevProps) => {
		if (!prevProps.showEditForm && this.props.showEditForm) {
			this.editTitle.focus();
			this.editTitle.setSelectionRange(this.editTitle.value.length, this.editTitle.value.length);
		}
	}
  handleKeyDown = (event) => {
		if (event.which === ESCAPE_KEY) {
			this.props.cancelEdit();
		} else if (event.which === ENTER_KEY) {
      const { todo, submit, titleValue, descriptionValue } = this.props;
			submit({ ...todo, title: titleValue, description: descriptionValue });
    }
	}
  render() {
    const { todo, requestDeleteTodo, submit, titleValue, descriptionValue, edit, showEditForm, changeTitle, changeDescription } = this.props;
    return (
      <li className={`${todo.completed ? 'completed' : ''} ${showEditForm ? 'editing' : ''}`}>
        {!showEditForm && (
          <div className="view">
            <input
              checked={todo.completed}
              className="toggle"
              id={`toggleTodo${todo.id}`}
              onChange={e => submit({ ...todo, completed: e.target.checked })}
              type="checkbox"
            />
            <label onDoubleClick={() => edit(todo)}>{todo.title}</label>
            <div className="description" onDoubleClick={() => edit(todo)}>{todo.description}</div>
            <button className="destroy" onClick={() => requestDeleteTodo(todo.id)} />
          </div>
        )}
        {showEditForm && (
          <div>
            <input
              className="edit"
              onChange={e => changeTitle(e.target.value)}
              onKeyDown={this.handleKeyDown}
              ref={(c) => { this.editTitle = c; }}
              value={titleValue}
            />
            <textarea
              className="edit description"
              onChange={e => changeDescription(e.target.value)}
              onKeyDown={this.handleKeyDown}
              value={descriptionValue}
            />
          </div>
        )}
        <Region
          data={{text: todo.title}}
          name="todo-item"
          uniqueKey={`todo-item-${todo.id}`}
        />
      </li>
    );
  }
}

export default observe(function (app) {
  const showEditForm$ = new BehaviorSubject(false); // start with hidden form
  const formTitle$ = new BehaviorSubject('');
  const formDescription$ = new BehaviorSubject('');
  const store = app.get('store');

  const cancelEdit = () => {
    formTitle$.next(''); // clear input field value
    formDescription$.next('');
    showEditForm$.next(false);
  };

  return streamProps()
    // dispatchable actions against store
    .setDispatch(
      { requestDeleteTodo },
      store
    )

    // stream values
    .set(
      showEditForm$,
      showEditForm => ({ showEditForm })
    )
    .set(
      formTitle$,
      titleValue => ({ titleValue })
    )
    .set(
      formDescription$,
      descriptionValue => ({ descriptionValue })
    )

    // form actions
    .set({
      edit: (todo) => {
        formTitle$.next(todo.title); // set input field value
        formDescription$.next(todo.description); // set input field value
        showEditForm$.next(true);
      },
      changeTitle: (value) => {
        formTitle$.next(value);
      },
      changeDescription: (value) => {
        formDescription$.next(value);
      },
      cancelEdit,
      submit: (todo) => {
        store.dispatch(requestUpdateTodo(todo));
        cancelEdit();
      }
    })

    // final observable
    .get$();
})(Item);
