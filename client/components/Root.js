import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, Region } from 'frint-react';
import { Observable, BehaviorSubject } from 'rxjs';

import { TODO_PROPTYPES } from '../constants';
import { requestAddTodo, requestTodos } from '../actions/todos';
import Filters from './Filters'
import Item from './Item';
import root from './root.scss';

class Root extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(TODO_PROPTYPES),
    changeInput: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
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
  componentDidMount = () => {
    this.props.getTodos(this.props.pathname.slice(1));
  }
  componentDidUpdate = (prevProps) => {
		if (prevProps.pathname !== this.props.pathname) {
      this.props.getTodos(this.props.pathname.slice(1));
    }
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
        <Filters />
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
        <Filters />
      </div>
    );
  }
}

export default observe(function (app) {
  const store = app.get('store');
  const router = app.get('router');
  const history$ = router._history$.map((val) => {
    return {
      pathname: val.location.pathname
    }
  });
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
      return store.dispatch(requestAddTodo(...args));
    },
    getTodos: filter => store.dispatch(requestTodos(filter)),
    changeInput,
    clearInput,
  });

  return state$
    .merge(actions$)
    .merge(formInput$)
    .merge(history$)
    .scan((props, emitted) => {
      return {
        ...props,
        ...emitted,
      };
    }, {
      todos: [],
    });
})(Root);
