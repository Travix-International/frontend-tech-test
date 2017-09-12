import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observe, Region } from 'frint-react';
import { Observable, BehaviorSubject } from 'rxjs';

import { TODO_PROPTYPES, PAGINATION_PROPTYPES } from '../constants';
import { requestAddTodo, requestTodos, requestNextTodos } from '../actions/todos';
import Filters from './Filters'
import Item from './Item';

class ItemList extends Component {
  static propTypes = {
    pagination: PAGINATION_PROPTYPES,
    loading: PropTypes.bool.isRequired,
    todos: PropTypes.arrayOf(TODO_PROPTYPES),
    changeTitleInput: PropTypes.func.isRequired,
    inputTitleValue: PropTypes.string,
    changeDescriptionInput: PropTypes.func.isRequired,
    inputDescriptionValue: PropTypes.string,
    toggleDescription: PropTypes.func.isRequired,
    showDescription: PropTypes.bool,
    addTodo: PropTypes.func.isRequired,
    getNextPage: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };
  static defaultProps = {
    inputTitleValue: '',
    inputDescriptionValue: '',
    showDescription: false,
  };
  componentDidMount = () => {
    this.props.getTodos(this.props.filter);
  }
  componentDidUpdate = (prevProps) => {
		if (prevProps.filter !== this.props.filter) {
      this.props.getTodos(this.props.filter);
    }
	}
  submitForm = (e) => {
    const { addTodo, inputTitleValue, inputDescriptionValue } = this.props;
    e.preventDefault();
    if (inputTitleValue) {
      addTodo({ title: inputTitleValue, description: inputDescriptionValue });
    }
  }
  getNextTodos = (e) => {
    e.preventDefault();
    const { page, pageSize, total } = this.props.pagination;
    if (page * pageSize < total) {
      this.props.getNextPage(this.props.pagination.page + 1, this.props.filter);
    }
  }
  render() {
    const { loading, changeTitleInput, inputTitleValue, changeDescriptionInput, inputDescriptionValue, showDescription, toggleDescription, todos } = this.props;
    const { page, pageSize, total } = this.props.pagination;
    return (
      <div className={`todoapp ${loading && 'disabled'}`}>
        <h1>Todos</h1>
        <form className="add-todo-form" onSubmit={this.submitForm}>
          <input
            className="new-todo"
            id="todoInput"
            onChange={e => changeTitleInput(e.target.value)}
            placeholder="my todo title..."
            style={{paddingRight: !showDescription? '60px' : '0'}}
            type="text"
            value={inputTitleValue}
          />
          <textarea
            className="new-todo"
            id="todoDescriptionInput"
            onChange={e => changeDescriptionInput(e.target.value)}
            placeholder="my todo description..."
            rows="4"
            style={{display: showDescription? 'block' : 'none'}}
            value={inputDescriptionValue}
          />
          <button
            className={inputTitleValue.length===0?'btn-small disabled':'btn-small'}
            style={{display: !showDescription? 'block' : 'none'}}
            type="submit"
          >+</button>
          <button
            className={inputTitleValue.length===0?'btn disabled':'btn'}
            style={{display: showDescription? 'block' : 'none'}}
            type="submit"
          >Add Todo</button>
          <input
            className="toggle-description"
            onClick={e => toggleDescription(!showDescription)}
            type="checkbox"
          />
        </form>
        <Filters />
        <ul className="todo-list">
          {todos.map((todo, index) => {
            return (
              <Item
                key={`todo-${index}`}
                todo={todo}
              />
            );
          })}
        </ul>
        { (page * pageSize < total) &&
          <div className="pagination">
            <a href="#" onClick={this.getNextTodos}>Load More</a>
          </div>
        }
        <Filters />
      </div>
    );
  }
}

export {
  ItemList,
}

export default observe(function (app) {
  const store = app.get('store');
  const router = app.get('router');
  const history$ = router._history$.map((val) => {
    return {
      filter: val.location.pathname.slice(1)
    }
  });
  const state$ = store.getState$()
    .map((state) => {
      return {
        loading: state.todos.loading,
        pagination: state.todos.pagination,
        todos: state.todos.allIds.map(id => state.todos.byId[id])
          .filter((todo) => {
            switch(router._history.location.pathname.slice(1)) {
              case 'active': return !todo.completed;
              case 'completed': return todo.completed;
              default: return true;
            }
          }),
      };
    });

  const showDescription$ = new BehaviorSubject(false)
    .map(showDescription => ({showDescription}));
  const toggleDescription = value => showDescription$.next(value);

  const formTitleInput$ = (new BehaviorSubject(''))
    .map(inputTitleValue => ({inputTitleValue}));
  const clearTitleInput = () => formTitleInput$.next('');
  const changeTitleInput = value => formTitleInput$.next(value);

  const formDescriptionInput$ = (new BehaviorSubject(''))
    .map(inputDescriptionValue => ({inputDescriptionValue}));
  const clearDescriptionInput = () => formDescriptionInput$.next('');
  const changeDescriptionInput = value => formDescriptionInput$.next(value);

  const actions$ = Observable.of({
    addTodo: (todo) => {
      clearTitleInput();
      clearDescriptionInput();
      return store.dispatch(requestAddTodo(todo));
    },
    getNextPage: (...args) => store.dispatch(requestNextTodos(...args)),
    getTodos: filter => store.dispatch(requestTodos(filter)),
    changeTitleInput,
    clearTitleInput,
    changeDescriptionInput,
    clearDescriptionInput,
    toggleDescription,
  });

  return state$
    .merge(actions$)
    .merge(formTitleInput$)
    .merge(formDescriptionInput$)
    .merge(showDescription$)
    .merge(history$)
    .scan((props, emitted) => {
      return {
        ...props,
        ...emitted,
      };
    }, {
      filter: '',
      todos: [],
    });
})(ItemList);
