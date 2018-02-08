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

export const getTodo = (todo, id) => ({
  type: GET_TODO,
  payload: { todo, id}
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
  dispatch(getTodos());
  getTodoList()
    .then((data) => {
      dispatch(updateTodos(data.tasks));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
};

export const getTodoId = id => (dispatch) => {
  dispatch(getTodo());
  getTodoById()
    .then((data) => {
      dispatch(checkSuccess());
      dispatch(getTodo(data));
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
  dispatch(editTodo());
  updateTodo(id, title, description)
    .then((data) => {
      dispatch(updateTodos(data));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}

export const removeTodoTask = id => (dispatch) => {
  dispatch(removeTodo());
  deleteTodo(id)
    .then((data) => {
      dispatch(updateTodos(data));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}