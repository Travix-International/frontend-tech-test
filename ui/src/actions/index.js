import config from '../config';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  RECEIVE_TODOS,
  REQUEST_TODOS,
  SEARCH_TODOS
} from './types';

/**
 * Receive todo items from server
 * @return {Object} Redux action object
 */
const receiveTodos = (json) => {
  return {
    type: RECEIVE_TODOS,
    todos: json.map(todo => todo)
  };
};

/**
 * Request todo items from server
 * @return {Object} Redux action object
 */
const requestTodos = () => {
  return {
    type: REQUEST_TODOS
  };
};

const addTodo = todo => ({ type: ADD_TODO, item: todo });
const editTodo = todo => ({ type: EDIT_TODO, item: todo });
const deleteTodo = id => ({ type: DELETE_TODO, id });
export const searchTodos = query => ({ type: SEARCH_TODOS, query });

/**
 * Fetch todo items from server
 * @return {function} - Dispatch function
 */
export const fetchTodos = () => (dispatch) => {
  // API call is starting
  dispatch(requestTodos());

  return fetch(`${config.apiBaseUrl}/tasks`)
    .then(
      response => response.json(),
      error => console.error('An error occurred:', error)
    )
    .then((json) => {
      // Update app state with results of API call.
      dispatch(receiveTodos(json));
    });
};

export const addTodoApi = title => dispatch =>
  fetch(`${config.apiBaseUrl}/tasks`, {
    method: 'POST',
    body: JSON.stringify({ title: title }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then(data => dispatch(addTodo(data.task)))
    .catch(error => console.error(error));

export const deleteTodoApi = id => (dispatch) => {
  fetch(`${config.apiBaseUrl}/tasks/${id}`, { method: 'DELETE' }).then((res) => {
    dispatch(deleteTodo(id));
  });
};

export const editTodoApi = todo => (dispatch) => {
  fetch(`${config.apiBaseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then(data => dispatch(editTodo(data.task)))
    .catch(error => console.error(error));
};
