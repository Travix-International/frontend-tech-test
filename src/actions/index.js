import {
  GET_TODOS, GET_TODO, UPDATE_TODOS, CREATE_TODO,
  EDIT_TODO, DELETE_TODO, CHECK_SUCCESS,
  CHECK_FAILURE
} from './../constants';

import {
  getTodoList, getTodoById, addTodo,
  deleteTodo, updateTodo
} from './../api';

export const getTodos = () => ({
  type: GET_TODOS
});

export const getTodo = (todo, id) => ({
  type: GET_TODO,
  payload: { todo, id}
});

export const updateTodos = todos => ({
  type: UPDATE_TODOS,
  payload: { todos }
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
      dispatch(checkSuccess());
      dispatch(updateTodos(data));
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

export const createTodoTask = (title, description) => (dispatch) => {
  dispatch(createTodo());
  addTodo(title, description)
    .then((data) => {
      dispatch(checkSuccess());
      dispatch(updateTodos(data));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}

export const editTodoTask = (id, title, description) => (dispatch) => {
  dispatch(editTodo());
  updateTodo(id, title, description)
    .then((data) => {
      dispatch(checkSuccess());
      dispatch(updateTodos(data));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}

export const removeTodoTask = id => (dispatch) => {
  dispatch(removeTodo());
  deleteTodo(id)
    .then((data) => {
      dispatch(checkSuccess());
      dispatch(updateTodos(data));
    }, (error) => {
      dispatch(checkFailure(error.message));
    });
}

let nextTodoId = 0
export const addTodoTest = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})