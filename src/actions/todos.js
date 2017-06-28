import fetch from 'api';

import {
  UPDATE_TODOS,
  EDIT_TODO,
  DELETE_TODO,
  CREATE_TODO
} from '../constants';

const updateTodos = todos => ({
  type: UPDATE_TODOS,
  payload: { todos }
});

const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});

const editTodo = (todo, id) => ({
  type: EDIT_TODO,
  payload: { todo, id }
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const getTodosAsync = () => dispatch =>
  fetch('GET', 'task')
    .then(data => dispatch(updateTodos(data)));

export const createTodoAsync = title => dispatch =>
  fetch('POST', 'task', { title })
    .then(data => dispatch(createTodo(data)));

export const editTodoAsync = (todo, id) => dispatch =>
  fetch('PUT', `task/${id}`, todo)
    .then(() => dispatch(editTodo(todo, id)));

export const deleteTodoAsync = id => dispatch =>
  fetch('DELETE', `task/${id}`)
    .then(() => dispatch(deleteTodo(id)));
