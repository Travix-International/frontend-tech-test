import * as Constants from '../constants';

export const newEmptyTodo = (tasks) => ({
  type: Constants.EMPTY_TODO,
  tasks
});

export const addTodo = (task) => ({
  type: Constants.ADD_TODO,
  task
});

export const addedSuccessfully = (id) => ({
  type: Constants.ADDED_SUCCESSFULLY,
  id
});

export const updateTodo = (task) => ({
  type: Constants.UPDATE_TODO,
  task
});


export const deleteTodo = (id) => ({
  type: Constants.DELETE_TODO,
  id
});


export const deleteTodoLocally = (id) => ({
  type: Constants.DELETE_TODO_LOCALLY,
  id
});


export const fetchTodos = (length, offset) => ({
    type: Constants.FETCH_TODOS,
    length,
    offset
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

export const handleSocketMessage = (msg) => ({
  type: Constants.SOCKET_MESSAGE,
  msg
});
