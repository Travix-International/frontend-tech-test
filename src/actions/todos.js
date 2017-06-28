import fetch from 'api';

import {
  UPDATE_TODOS,
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

export const getTodosAsync = () => dispatch =>
  fetch('GET', 'task')
    .then(data => dispatch(updateTodos(data)));

export const createTodoAsync = title => dispatch =>
  fetch('POST', 'task', { title })
    .then(data => dispatch(createTodo(data)));
