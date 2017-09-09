import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
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
