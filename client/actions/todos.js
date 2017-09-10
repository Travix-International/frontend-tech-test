import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  REQUEST_TODO,
  RECEIVE_TODO,
  REQUEST_TODO_ADD,
  RECEIVE_TODO_ADD,
  REQUEST_TODO_DELETE,
  RECEIVE_TODO_DELETE,
  REQUEST_TODO_UPDATE,
  RECEIVE_TODO_UPDATE,
} from '../constants';

export const requestTodos = (filter='') => ({ type: REQUEST_TODOS, filter })
export const receiveTodos = payload => ({ type: RECEIVE_TODOS, payload });

export const requestTodo = id => ({ type: REQUEST_TODO, id })
export const receiveTodo = payload => ({ type: RECEIVE_TODO, payload });

export const requestAddTodo = todo => ({ type: REQUEST_TODO_ADD, todo: {
  title: encodeURI(todo.title),
  description: !!todo.description ? encodeURI(todo.title) : ''
} })
export const receiveAddTodo = payload => ({ type: RECEIVE_TODO_ADD, payload });

export const requestDeleteTodo = id => ({ type: REQUEST_TODO_DELETE, id })
export const receiveDeleteTodo = id => ({ type: RECEIVE_TODO_DELETE, id });

export const requestUpdateTodo = todo => ({ type: REQUEST_TODO_UPDATE, todo : {
  id: todo.id,
  title: encodeURI(todo.title),
  description: encodeURI(todo.description),
  completed: todo.completed
} })
export const receiveUpdateTodo = payload => ({ type: RECEIVE_TODO_UPDATE, payload });
