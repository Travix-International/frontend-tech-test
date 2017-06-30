import fetch from 'api';

import {
  UPDATE_SORT,
  GET_TODOS,
  UPDATE_TODOS,
  EDIT_TODO,
  DELETE_TODO,
  CREATE_TODO
} from '../constants';

export const getTodos = () => ({
  type: GET_TODOS
});

export const updateTodos = todos => ({
  type: UPDATE_TODOS,
  payload: { todos }
});

export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});

export const editTodo = (todo, id) => ({
  type: EDIT_TODO,
  payload: { todo, id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const updateSort = sort => ({
  type: UPDATE_SORT,
  payload: { sort }
});

export const getTodosAsync = () => dispatch => {
  dispatch(getTodos());
  return fetch('GET', 'task')
    .then(data => dispatch(updateTodos(data)));
}

export const createTodoAsync = title => dispatch =>
  fetch('POST', 'task', { title })
    .then(data => dispatch(createTodo(data)));

export const editTodoAsync = (todo, id) => dispatch =>
  fetch('PUT', `task/${id}`, todo)
    .then(() => dispatch(editTodo(todo, id)));

export const deleteTodoAsync = id => dispatch =>
  fetch('DELETE', `task/${id}`)
    .then(() => dispatch(deleteTodo(id)));
