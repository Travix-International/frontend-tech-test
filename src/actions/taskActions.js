import { taskActionTypes as at } from './actionTypes';

export const fetchAllTasksRequest = {
  type: at.FETCH_ALL_TASKS_REQUEST
};

export const fetchAllTasksSuccess = tasks => ({
  type: at.FETCH_ALL_TASKS_SUCCESS,
  payload: tasks
});

export const fetchAllTasksFail = e => ({
  type: at.FETCH_ALL_TASKS_FAIL,
  error: e
});

export const addTaskRequest = {
  type: at.ADD_TASK_REQUEST
};

export const addTaskSuccess = task => ({
  type: at.ADD_TASK_SUCCESS,
  payload: task
});

export const addTaskFail = e => ({
  type: at.ADD_TASK_FAIL,
  error: e
});

export const editTaskRequest = {
  type: at.EDIT_TASK_REQUEST
};

export const editTaskSuccess = task => ({
  type: at.EDIT_TASK_SUCCESS,
  payload: task
});

export const editTaskFail = e => ({
  type: at.EDIT_TASK_FAIL,
  error: e
});

export const toggleTaskRequest = {
  type: at.TOGGLE_TASK_REQUEST
};

export const toggleTaskSuccess = id => ({
  type: at.TOGGLE_TASK_SUCCESS,
  payload: id
});

export const toggleTaskFail = e => ({
  type: at.TOGGLE_TASK_FAIL,
  error: e
});

export const deleteTaskRequest = {
  type: at.DELETE_TASK_REQUEST
};

export const deleteTaskSuccess = id => ({
  type: at.DELETE_TASK_SUCCESS,
  payload: id
});

export const deleteTaskFail = e => ({
  type: at.DELETE_TASK_FAIL,
  error: e
});






