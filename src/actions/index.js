//Import the Todo API

import {create, load, remove, update} from '../utils/tasksApi.util';


// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 


//Create
export const CREATE_TASK = '[Task] CREATE_TASK';
export const CREATE_TASK_SUCCESS = '[Task] CREATE_TASK_SUCCESS';
export const CREATE_TASK_ERROR = '[Task] CREATE_TASK_ERROR';


//Read
export const GET_TASKS = '[Task] GET_TASKS';
export const GET_TASKS_SUCCESS = '[Task] GET_TASKS_SUCCESS';
export const GET_TASKS_ERROR = '[Task] GET_TASKS_ERROR';


//Update
export const START_EDITING = '[Task] START_EDITING';
export const CANCEL_EDITING = '[Task] CANCEL_EDITING';

export const UPDATE_TASK = '[Task] UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = '[Task] UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_ERROR = '[Task] UPDATE_TASK_ERROR';

export const COMPLETE_TASK = 'COMPLETE_TASK';


//Delete
export const DELETE_TASK = '[Task] DELETE_TASK';
export const DELETE_TASK_SUCCESS = '[Task] DELETE_TASK_SUCCESS';
export const DELETE_TASK_ERROR = '[Task] DELETE_TASK_ERROR';


//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTask(task) {
  return (dispatch, getState) => {
    return create(task).then(res => {
      dispatch(CreateTaskSuccess(task));
    })
  }
}

export function CreateTaskSuccess(task) {
  return {
    type: CREATE_TASK_SUCCESS,
    task
  }
}


//Read
export function GetTasks() {
  return (dispatch, getState) => {
    return load().then(res => {
      dispatch(GetTaskSuccess(res.data.tasks));
    })
  }
}

export function GetTaskSuccess(tasks) {
  return {
    type: GET_TASKS_SUCCESS,
    tasks
  }
}


//Update
export function StartEditing(id) {
  return {
    type: START_EDITING,
    id
  }
}

export function CancelEditing(id) {
  return {
    type: CANCEL_EDITING,
    id
  }
}

export function UpdateTask(task) {
  return (dispatch, getState) => {

    //Multiple actions can be sent usign the Redux-Thunk middleware

    dispatch({
      type: UPDATE_TASK,
      task
    });
    update(task).then(res => {
      dispatch(UpdateTaskSuccess(task))
    })
  }
}

export function UpdateTaskSuccess(task) {
  return {
    type: UPDATE_TASK_SUCCESS,
    task,
    id: task.id
  }
}

//Delete
export function DeleteTask(task) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_TASK,
      task
    });
    remove(task.id).then(res => {
      if (res.status === 200 || res.status === 202) {
        dispatch(DeleteTaskSuccess(task))
      }
    })
  }
}

export function DeleteTaskSuccess(task) {
  return {
    type: DELETE_TASK_SUCCESS,
    task,
    id: task.id
  }
}