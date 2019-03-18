import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_DELETE_ASYMC,
  TODOS_UPDATE,
  TODOS_FETCH,
  TODOS_FETCH_ASYNC,
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

export function fetchTodos(records) {
  return {
    type: TODOS_FETCH,
    records
  };
}

export function fetchTodosAsync() {
  return {
    type: TODOS_FETCH_ASYNC,
  };
}

export function deleteTodoAsync(id) {
  return {
    type: TODOS_DELETE_ASYMC,
    id
  };
}


