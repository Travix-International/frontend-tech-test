import {
  TODO_ADD,
  TODO_DELETE,
  TODO_UPDATE,
} from '../constants';

export function addTodo(title, description) {
  return {
    type: TODO_ADD,
    title,
    description,
  };
}

export function removeTodo(id) {
  return {
    type: TODO_DELETE,
    id,
  };
}

export function updateTodo(id, title, description) {
  return {
    type: TODO_UPDATE,
    id,
    title,
    description,
  };
}
