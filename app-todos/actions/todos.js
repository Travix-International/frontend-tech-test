import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_DELETE_ASYNC,
  TODOS_UPDATE,
  TODOS_FETCH_ASYNC,
} from '../constants';

export function addTodo(title, description) {
  return {
    type: TODOS_ADD,
    title,
    description
  };
}

export function deleteTodo(id) {
  return {
    type: TODOS_DELETE,
    id,
  };
}

export function deleteTodoAsync(id) {
  return {
    type: TODOS_DELETE_ASYNC,
    id
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

export function fetchTodosAsync() {
  return {
    type: TODOS_FETCH_ASYNC,
  };
}