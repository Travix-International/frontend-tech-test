import {
  GET_TODOS, GET_TODO, CREATE_TODO,
  EDIT_TODO, DELETE_TODO, CHECK_SUCCESS,
  CHECK_FAILURE, UPDATE_TODOS
} from './../constants';

import {
  getTodoList, getTodoById, addTodo,
  deleteTodo, updateTodo
} from './../api';

export const getTodos = () => ({
  type: GET_TODOS
});

export const updateTodos = todos => ({
  type: UPDATE_TODOS,
  payload: { todos }
});

export const getTodo = (todo) => ({
  type: GET_TODO,
  payload: { todo }
});

export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: { todo }
});

export const removeTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const checkSuccess = () => ({
  type: CHECK_SUCCESS
});

export const checkFailure = error => ({
  type: CHECK_FAILURE,
  payload: {
    error,
  },
});

export const getTodoTaskList = () => (dispatch) => {
  getTodoList()
    .then((data) => {
      dispatch(updateTodos(data.tasks));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
};

export const getTodoId = id => (dispatch) => {
  return getTodoById(id)
    .then((data) => {
      return dispatch(getTodo(data.task));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}

export const createTodoTask = (task) => (dispatch) => {
  return addTodo(task.title, task.description)
    .then((data) => {
      return getTodoTaskList();
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}

export const editTodoTask = (id, title, description) => (dispatch) => {
  return updateTodo(id, title, description)
    .then((data) => {
      return dispatch(getTodoTaskList());
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}

export const removeTodoTask = (id) => (dispatch) => {
  deleteTodo(id)
    .then((data) => {
      dispatch(getTodoTaskList());
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}