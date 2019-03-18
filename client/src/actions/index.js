import {
  ADD_TODO_LOADING,
  ADD_TODO_ERROR,
  ADD_TODO_SAVED,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_DELETED,
  SAVE_TODO_LOADING,
  SAVE_TODO_ERROR,
  SAVE_TODO_SAVED,
  FETCH_TODO_LOADING,
  FETCH_TODO_RECEIVED,
  FETCH_TODO_ERROR,
  SET_FILTER,
  TOGGLE_TODO,
} from './actionTypes';

export const addTodo = (title, description) => (dispatch) => {
  dispatch({
    type: ADD_TODO_LOADING,
  });

  return fetch(
    `http://localhost:9001/task/create/${encodeURIComponent(
      title,
    )}/${encodeURIComponent(description)}`,
    {
      method: 'POST',
    },
  ).then((response) => {
    if (response.status >= 500) {
      return dispatch({
        type: ADD_TODO_ERROR,
        response: 'failed to save todo.',
      });
    }
    return response.json().then((data) => {
      dispatch({
        type: ADD_TODO_SAVED,
        id: data.id,
        title,
        description,
      });
    });
  });
};

export const deleteTodo = id => (dispatch) => {
  dispatch({
    type: REMOVE_TODO_LOADING,
  });
  return fetch(`http://localhost:9001/task/delete/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (response.status >= 500) {
      return dispatch({
        type: REMOVE_TODO_ERROR,
        response: 'failed to delete todo.',
      });
    }
    return dispatch({
      type: REMOVE_TODO_DELETED,
      id,
    });
  });
};
export const editTodo = id => ({
  type: 'EDIT_TODO',
  id,
});
let page = 1;
export const fetchTodos = () => (dispatch) => {
  dispatch({
    type: FETCH_TODO_LOADING,
  });
  return fetch(`http://localhost:9001/tasks/${page++}`).then((response) => {
    if (response.status >= 500) {
      return dispatch({
        type: FETCH_TODO_ERROR,
        response: "failed to load ToDo's",
      });
    }
    return response.json().then((todos) => {
      dispatch({
        type: FETCH_TODO_RECEIVED,
        data: todos,
      });
    });
  });
};

export const saveTodo = (id, title, description) => (dispatch) => {
  dispatch({
    type: SAVE_TODO_LOADING,
  });
  return fetch(
    `http://localhost:9001/task/update/${id}/${encodeURIComponent(
      title,
    )}/${encodeURIComponent(description)}`,
    {
      method: 'PUT',
    },
  ).then((response) => {
    if (response.status >= 500) {
      return dispatch({
        type: SAVE_TODO_ERROR,
        response: 'failed to update todo.',
      });
    }
    return dispatch({
      type: SAVE_TODO_SAVED,
      id,
      title,
      description,
    });
  });
};

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
