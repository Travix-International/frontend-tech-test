import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
  REQUEST_TODOS,
  RECEIVE_TODOS,
} from '../constants';

export function addTodo(todo) {
  return {
    type: TODOS_ADD,
    payload: todo,
  };
}

export function removeTodo(id) {
  return {
    type: TODOS_DELETE,
    id,
  };
}

export function updateTodo(todo) {
  return {
    type: TODOS_UPDATE,
    payload: todo,
  };
}

export const requestTodos = () => ({ type: REQUEST_TODOS })
export const receiveTodos = payload => ({ type: RECEIVE_TODOS, payload });
