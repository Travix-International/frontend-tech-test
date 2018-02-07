import { createAction } from 'redux-actions';

import serverHelper from '../helpers/serverHelper';

const ADD_TODO = 'ADD_TODO';
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
const ADD_TODO_FAIL = 'ADD_TODO_FAIL';
const DELETE_TODO = 'DELETE_TODO';
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
const DELETE_TODO_FAIL = 'DELETE_TODO_FAIL';
const FETCH_TODOS = 'FETCH_TODOS';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';
const TOGGLE_TODO = 'TOGGLE_TODO';
const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
const TOGGLE_TODO_FAIL = 'TOGGLE_TODO_FAIL';
const UPDATE_TODO = 'UPDATE_TODO';
const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL';
const SET_EDIT_MODE = 'SET_EDIT_MODE';


const addTodoSuccess = createAction(ADD_TODO_SUCCESS, (id, title, description) => {
  return {
    id,
    title,
    description
  };
});

const addTodoFail = createAction(ADD_TODO_FAIL, error => {
  return {
    error
  };
});

const addTodo = createAction(ADD_TODO, (title, description) =>
  dispatch => {
    serverHelper.addTodo(title, description)
      .then(data => {
        dispatch(addTodoSuccess(data.task.id, data.task.title, data.task.description));
      })
      .catch(error => {
        dispatch(addTodoFail(error));
      });
  });

const deleteTodoSuccess = createAction(DELETE_TODO_SUCCESS, id => {
  return {
    id
  };
});

const deleteTodoFail = createAction(DELETE_TODO_FAIL, error => {
  return {
    error
  };
});

const deleteTodo = createAction(DELETE_TODO, id =>
  dispatch => {
    serverHelper.deleteTodo(id)
      .then(data => {
        dispatch(deleteTodoSuccess(data.id));
      })
      .catch(error => {
        console.log(error);
        dispatch(deleteTodoFail(error));
      });
  });

const fetchTodosSuccess = createAction(FETCH_TODOS_SUCCESS, todos => {
  return {
    todos
  };
});

const fetchTodosFail = createAction(FETCH_TODOS_FAIL, error => {
  return {
    error
  };
});

const fetchTodos = createAction(FETCH_TODOS, () =>
  dispatch => {
    serverHelper.getTodos()
      .then(data => {
        if (data && data.tasks && data.tasks.constructor === Array) {
          dispatch(fetchTodosSuccess(data.tasks));
        }
      })
      .catch(error => {
        dispatch(fetchTodosFail(error));
      });
  });

const toggleTodoSuccess = createAction(TOGGLE_TODO_SUCCESS, id => {
  return {
    id
  };
});

const toggleTodoFail = createAction(TOGGLE_TODO_FAIL, error => {
  return {
    error
  };
});

const toggleTodo = createAction(TOGGLE_TODO, id =>
  dispatch => {
    serverHelper.toggleTodo(id)
      .then(data => {
        dispatch(toggleTodoSuccess(data.id));
      })
      .catch(error => {
        dispatch(toggleTodoFail(error));
      });
  });

const updateTodoSuccess = createAction(UPDATE_TODO_SUCCESS, (id, title, description) => {
  return {
    id,
    title,
    description
  };
});

const updateTodoFail = createAction(UPDATE_TODO_FAIL, error => {
  return {
    error
  };
});

const updateTodo = createAction(UPDATE_TODO, (id, title, description) =>
  dispatch => {
    serverHelper.updateTodo(id, title, description)
      .then(data => {
        dispatch(updateTodoSuccess(data.task.id, data.task.title, data.task.description));
      })
      .catch(error => {
        dispatch(updateTodoFail(error));
      });
  });

const setEditMode = createAction(SET_EDIT_MODE, id => ({ id }));

export default {
  addTodo,
  addTodoSuccess,
  addTodoFail,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFail,
  fetchTodos,
  fetchTodosSuccess,
  fetchTodosFail,
  toggleTodo,
  toggleTodoSuccess,
  toggleTodoFail,
  updateTodo,
  updateTodoSuccess,
  updateTodoFail,
  setEditMode
};
