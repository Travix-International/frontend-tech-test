import {
  REQUEST_TODOS,
  REQUEST_TODOS_ERROR,
  RECEIVE_TODOS,
  REQUEST_NEXT_TODOS,
  REQUEST_NEXT_TODOS_ERROR,
  RECEIVE_NEXT_TODOS,
  REQUEST_TODO,
  REQUEST_TODO_ERROR,
  RECEIVE_TODO,
  REQUEST_TODO_ADD,
  REQUEST_TODO_ADD_ERROR,
  RECEIVE_TODO_ADD,
  REQUEST_TODO_DELETE,
  REQUEST_TODO_DELETE_ERROR,
  RECEIVE_TODO_DELETE,
  REQUEST_TODO_UPDATE,
  REQUEST_TODO_UPDATE_ERROR,
  RECEIVE_TODO_UPDATE,
} from '../constants';

export const requestTodos = (filter='') => ({ type: REQUEST_TODOS, filter })
export const receiveTodos = payload => ({ type: RECEIVE_TODOS, payload });
export const requestTodosError = error => ({ type: REQUEST_TODOS_ERROR, error });

export const requestNextTodos = (page, filter='') => ({ type: REQUEST_NEXT_TODOS, page, filter })
export const receiveNextTodos = payload => ({ type: RECEIVE_NEXT_TODOS, payload });
export const requestNextTodosError = error => ({ type: REQUEST_NEXT_TODOS_ERROR, error });

export const requestTodo = id => ({ type: REQUEST_TODO, id })
export const receiveTodo = payload => ({ type: RECEIVE_TODO, payload });
export const requestTodoError = error => ({ type: REQUEST_TODO_ERROR, error });

export const requestAddTodo = todo => ({ type: REQUEST_TODO_ADD, todo: {
  title: encodeURI(todo.title),
  description: !!todo.description ? encodeURI(todo.description) : ''
} })
export const receiveAddTodo = payload => ({ type: RECEIVE_TODO_ADD, payload });
export const requestAddTodoError = error => ({ type: REQUEST_TODO_ADD_ERROR, error });

export const requestDeleteTodo = id => ({ type: REQUEST_TODO_DELETE, id })
export const receiveDeleteTodo = id => ({ type: RECEIVE_TODO_DELETE, id });
export const requestDeleteTodoError = error => ({ type: REQUEST_TODO_DELETE_ERROR, error })

export const requestUpdateTodo = todo => ({ type: REQUEST_TODO_UPDATE, todo : {
  id: todo.id,
  title: encodeURI(todo.title),
  description: encodeURI(todo.description),
  completed: todo.completed
} })
export const receiveUpdateTodo = payload => ({ type: RECEIVE_TODO_UPDATE, payload });
export const requestUpdateTodoError = error => ({ type: REQUEST_TODO_UPDATE_ERROR, error });
