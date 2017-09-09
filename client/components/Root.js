import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, Region } from 'frint-react';
import { Observable, BehaviorSubject } from 'rxjs';

import { TODO_SCHEMA } from '../constants';
import { addTodo } from '../actions/todos';
import Item from './Item';
import root from './root.scss';

class Root extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(TODO_SCHEMA),
    changeInput: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    inputValue: PropTypes.string,
  };
  static defaultProps = {
    inputValue: '',
  };
  submitForm = (e) => {
    const { addTodo, inputValue } = this.props;
    e.preventDefault();
    addTodo({ title: inputValue });
  }
  render() {
    return (
      <div className="todoapp">
        <h1>Todos</h1>
        <form onSubmit={this.submitForm}>
          <input
            className="new-todo"
            id="todoInput"
            onChange={e => this.props.changeInput(e.target.value)}
            placeholder="my todo title..."
            type="text"
            value={this.props.inputValue}
          />
          <input className="toggle-description" type="checkbox" />
        </form>
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => {
            return (
              <Item
                key={`todo-${index}`}
                todo={todo}
              />
            );
          })}
        </ul>

        <footer className="footer">
          <span className="todo-count">
            <strong>1</strong>
            <span> item</span>
            <span> left</span>
          </span>
          <ul className="filters">
            <li><a className="selected" href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default observe(function (app) {
  const store = app.get('store');
  const state$ = store.getState$()
    .map((state) => {
      return {
        todos: state.todos.allIds.map(id => state.todos.byId[id]),
      };
    });

  const formInput$ = (new BehaviorSubject(''))
    .map((inputValue) => {
      return {
        inputValue,
      };
    });
  const clearInput = () => formInput$.next('');
  const changeInput = value => formInput$.next(value);

  const actions$ = Observable.of({
    addTodo: (...args) => {
      clearInput();
      return store.dispatch(addTodo(...args));
    },

    changeInput,
    clearInput,
  });

  return state$
    .merge(actions$)
    .merge(formInput$)
    .scan((props, emitted) => {
      return {
        ...props,
        ...emitted,
      };
    }, {
      todos: [],
    });
})(Root);
