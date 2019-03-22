import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_DELETE_ASYNC,
  TODOS_UPDATE,
  TODOS_FETCH_ASYNC,
  TODOS_UPDATE_ASYNC,
  TODOS_LOAD_MORE_ASYNC
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

export function updateTodoAsync(id, title, description) {
  return {
    type: TODOS_UPDATE_ASYNC,
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

export function loadMoreAsync(pageIndex, pageSize) {
  return {
    type: TODOS_LOAD_MORE_ASYNC,
    pageIndex,
    pageSize
  };
}