import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
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

export function receiveTodos(payload) {
  return {
    type: RECEIVE_TODOS,
    payload,
  };
}
