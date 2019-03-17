import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
} from '../constants';

export function addTodo(title, description) {
  return {
    type: TODOS_ADD,
    title,
    description
  };
}

export function removeTodo(id) {
  return {
    type: TODOS_DELETE,
    id,
  };
}

export function updateTodo(id, title, description) {
  return {
    type: TODOS_UPDATE,
    id,
    title,
    description
  };
}
