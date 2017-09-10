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
  receiveTodos,
  receiveTodo,
  receiveAddTodo,
  receiveDeleteTodo,
} from '../actions/todos';

import callApi from './apiCaller';
import * as schema from './schema';

export function fetchTodos$(action$) {
  console.log(action$);
  return action$
    .filter(action => action.type === REQUEST_TODOS)
    .mergeMap((action) => {
      return Rx.Observable.fromPromise(callApi('tasks'))
        .map((res) => {
          const payload = normalize(res.tasks, schema.arrayOfTodos)
          return receiveTodos(payload);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODOS))
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
    });
}

export function addTodo$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODO_ADD)
    .mergeMap((action) => {
      return Rx.Observable.fromPromise(
          callApi(`task/create/${action.title}/${action.description}/${action.completed}`, 'post')
        )
        .map((res) => {
          return receiveAddTodo(res.task);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODO_ADD))
    });
}

export function deleteTodo$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODO_DELETE)
    .mergeMap((action) => {
      return Rx.Observable.fromPromise(callApi(`task/delete/${action.id}`, 'delete'))
        .map((res) => {
          return receiveDeleteTodo(res.task);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODO_DELETE))
    });
}

export function updateTodo$(action$) {
  return action$
    .filter(action => action.type === REQUEST_TODO_UPDATE)
    .mergeMap((action) => {
      return Rx.Observable.fromPromise(
          callApi(`task/update/${action.id}/${action.title}/${action.description}/${action.completed}`, 'put')
        )
        .map((res) => {
          return receiveUpdateTodo(res.task);
        })
        .takeUntil(action$.filter(action => action.type === CANCEL_REQUEST_TODO_UPDATE))
    });
}

export default combineEpics(
  fetchTodos$,
  fetchTodo$,
  addTodo$,
  deleteTodo$,
  updateTodo$,
);
