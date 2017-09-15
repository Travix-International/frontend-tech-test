import fetch from '../api/api';

import {
  UPDATE_SORT,
  GET_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  UPDATE_TODOS
} from '../constants';

export const getTodos = () => ({
  type: GET_TODOS
});

export const addTodo = todo => ({
  type: ADD_TODO,
  data: { todo }
});

export const editTodo = (todo, id) => ({
  type: EDIT_TODO,
  data: { todo, id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  data: { id }
});

export const updateTodos = todos => ({
  type: UPDATE_TODOS,
  data: { todos }
});

export const updateSort = sort => ({
  type: UPDATE_SORT,
  data: { sort }
});

export const getTodosAsync = () => (dispatch) => {
  dispatch(getTodos());
  return fetch('GET', 'task')
    .then(data => dispatch(updateTodos(data)));
};

export const addTodoAsync = title => dispatch =>
  fetch('POST', 'task', { title })
    .then(data => dispatch(addTodo(data)));

export const editTodoAsync = (todo, id) => dispatch =>
  fetch('PUT', `task/${id}`, todo)
    .then(() => dispatch(editTodo(todo, id)));

export const deleteTodoAsync = id => dispatch =>
  fetch('DELETE', `task/${id}`)
    .then(() => dispatch(deleteTodo(id)));
