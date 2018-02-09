import 'whatwg-fetch';

import actionTypes from '../constants/ActionTypes';
import { SET_VISIBILITY_FILTER } from '../constants/TodoFilters';

const BASE = 'http://localhost:9001/api';

const setAppFetching = () => ({ type: actionTypes.APP_FETCHING });
const setAppReady = () => ({ type: actionTypes.APP_READY });

export const listTodos = data => ({ type: actionTypes.LIST_TODOS, todos: data });

export function fetchTodos() {
  return (dispatch) => {
    dispatch(setAppFetching());
    return fetch(`${BASE}/tasks`)
      .then(response => response.json())
      .then((json) => {
        dispatch(listTodos(json.data));
        dispatch(setAppReady());
      });
  };
}

export const listTodo = id => ({ type: actionTypes.LIST_TODO, id });

export const addTodoToStore = data => ({ type: actionTypes.CREATE_TODO, todo: data });

export function createTodo(title, description) {
  return (dispatch) => {
    dispatch(setAppFetching());

    return fetch(`${BASE}/task/create`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({ title, description }),
    })
      .then(response => response.json())
      .then((json) => {
        dispatch(addTodoToStore(json.data));
        dispatch(setAppReady());
      });
  };
}

const editTodoTitleOnStore = data => ({ type: actionTypes.EDIT_TODO_TITLE, todo: data });

export const editTodoTitle = (id, title) => (dispatch) => {
  dispatch(setAppFetching());
  return fetch(`${BASE}/task/update/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'put',
    body: JSON.stringify({ id, title }),
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(editTodoTitleOnStore(json.data));
      dispatch(setAppReady());
    });
};

const editTodoDescriptonOnStore = data => ({ type: actionTypes.EDIT_TODO_DESCRIPTION, todo: data });
export const editTodoDescription = (id, description) => (dispatch) => {
  dispatch(setAppFetching());
  return fetch(`${BASE}/task/update/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'put',
    body: JSON.stringify({ id, description }),
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(editTodoDescriptonOnStore(json.data));
      dispatch(setAppReady());
    });
};

const toggleTodoOnStore = data => ({ type: actionTypes.TOGGLE_TODO, todo: data });
export const toggleTodo = id => (dispatch) => {
  dispatch(setAppFetching());
  return fetch(`${BASE}/task/update/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'put',
    body: JSON.stringify({ id, toggle: true }),
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(toggleTodoOnStore(json.data));
      dispatch(setAppReady());
    });
};

export const deleteTodoOnStore = id => ({ type: actionTypes.DELETE_TODO, todo: { id } });
export const deleteTodo = id => (dispatch) => {
  dispatch(setAppFetching());
  return fetch(`${BASE}/task/delete/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'delete',
    body: JSON.stringify({ id }),
  }).then((response) => {
    if (response.status === 204) {
      dispatch(deleteTodoOnStore(id));
      dispatch(setAppReady());
    }
  });
};

export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });

export default {
  fetchTodos,
  listTodos,
  listTodo,
  createTodo,
  editTodoTitle,
  editTodoDescription,
  toggleTodo,
  deleteTodo,
  setVisibilityFilter,
};
