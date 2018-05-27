import * as Constants from '../constants';

export const newEmptyTodo = (tasks) => ({
  type: Constants.EMPTY_TODO,
  tasks
});

export const addTodo = (task) => ({
  type: Constants.ADD_TODO,
  task
});

export const addedSuccessfully = (payload) => ({
  type: Constants.ADDED_SUCCESSFULLY,
  payload
});

export const updateTodo = (task) => ({
  type: Constants.UPDATE_TODO,
  task
});

export const updatedSuccessfully = (payload) => ({
  type: Constants.UPDATED_SUCCESSFULLY,
  payload
});

export const deleteTodo = (id) => ({
  type: Constants.DELETE_TODO,
  id
});

export const deletedSuccessfully = (id) => ({
  type: Constants.DELETED_SUCCESSFULLY,
  id
});

export const deleteTodoLocally = (id) => ({
  type: Constants.DELETE_TODO_LOCALLY,
  id
});


export const fetchTodos = (payload) => ({
    type: Constants.FETCH_TODOS,
    payload
});

export const getTodoList = (payload) => ({
    type: Constants.LIST_TODOS,
    tasks: payload.tasks
});

export const showMessage = (toastMessage) => ({
  type: Constants.SHOW_TOAST,
  toastMessage
});

export const markMessageAsRead = () => ({
  type: Constants.MARK_MESSAGE_AS_READ
});
