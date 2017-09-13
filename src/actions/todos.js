import fetch from '../api/api';

import {
  GET_TODOS,
  UPDATE_TODOS
} from '../constants';

export const getTodos = () => ({
  type: GET_TODOS
});

export const addTodo = todo => ({
  type: ADD_TODO,
  data: { todo }
});

export const updateTodos = todos => ({
  type: UPDATE_TODOS,
  data: { todos }
});

export const getTodosAsync = () => (dispatch) => {
  dispatch(getTodos());
  return fetch('GET', 'task')
    .then(data => dispatch(updateTodos(data)));
};

export const addTodoAsync = title => dispatch =>
  fetch('POST', 'task', { title })
    .then(data => dispatch(addTodo(data)));
