import { combineEpics } from 'frint-store';
import { normalize } from 'normalizr';

import {
  REQUEST_TODOS,
  CANCEL_REQUEST_TODOS,
  REQUEST_TODO,
  CANCEL_REQUEST_TODO,
  REQUEST_TODO_ADD,
  CANCEL_REQUEST_TODO_ADD,
  REQUEST_TODO_DELETE,
  CANCEL_REQUEST_TODO_DELETE,
  REQUEST_TODO_UPDATE,
  CANCEL_REQUEST_TODO_UPDATE,
} from '../constants';

import {
  requestTodosError,
  receiveTodos,
  requestTodoError,
  receiveTodo,
  requestAddTodoError,
  receiveAddTodo,
  requestDeleteTodoError,
  receiveDeleteTodo,
  requestUpdateTodoError,
  receiveUpdateTodo,
} from '../actions/todos';

import callApi from './apiCaller';
import * as schema from './schema';

export function fetchTodos$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODOS)
    .mergeMap((action) => {
      const filter = action.filter ? `/${action.filter}` : '';
      return Rx.Observable.fromPromise(callApi(`tasks${filter}`))
        .map((res) => {
          const payload = normalize(res.tasks, schema.arrayOfTodos)
          return receiveTodos(payload);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODOS))
        .catch(error => Rx.Observable.of(requestTodosError(error.toString())));
    });
}

export function fetchTodo$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODO)
    .mergeMap((action) => {
      return Rx.Observable.fromPromise(callApi(`task/${action.id}`))
        .map((res) => {
          return receiveTodo(res.task);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODO))
        .catch(error => Rx.Observable.of(requestTodoError(error.toString())));
    });
}

export function addTodo$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODO_ADD)
    .mergeMap((action) => {
      const { todo } = action;
      return Rx.Observable.fromPromise(
          callApi(`task/create/${todo.title}/${todo.description || 'null'}`, 'post')
        )
        .map((res) => {
          return receiveAddTodo(res.task);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODO_ADD))
        .catch(error => Rx.Observable.of(requestAddTodoError(error.toString())));
    });
}

export function deleteTodo$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODO_DELETE)
    .mergeMap((action) => {
      return Rx.Observable.fromPromise(callApi(`task/delete/${action.id}`, 'delete'))
        .map((res) => {
          return receiveDeleteTodo(parseInt(res.id, 10));
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODO_DELETE))
        .catch(error => Rx.Observable.of(requestDeleteTodoError(error.toString())));
    });
}

export function updateTodo$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODO_UPDATE)
    .mergeMap((action) => {
      const { todo } = action;
      return Rx.Observable.fromPromise(
          callApi(`task/update/${todo.id}/${todo.title}/${todo.description}/${todo.completed}`, 'put')
        )
        .map((res) => {
          return receiveUpdateTodo(res.task);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODO_UPDATE))
        .catch(error => Rx.Observable.of(requestUpdateTodoError(error.toString())));
    });
}

export default combineEpics(
  fetchTodos$,
  fetchTodo$,
  addTodo$,
  deleteTodo$,
  updateTodo$,
);
