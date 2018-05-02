import * as types from 'constants/actionTypes'
import RequestBuilder from '../services/RequestBuilder'
import dataAccess from '../services'

export function loadTasks() {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASKS_FETCH_STARTED })
      const data = await dataAccess.tasksService.loadTasks()
      dispatch({
        type: types.TASKS_FETCH_COMPLETED,
        payload: data.tasks
      })
    } catch (e) {
      dispatch({ type: types.TASKS_FETCH_FAILED, payload: e })
      throw e
    }
  }
}

export function createTask(task) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASK_POST_STARTED })
      const data = await dataAccess.taskService.createTask(task)
      dispatch({
        type: types.TASK_POST_COMPLETED,
        payload: data.task
      })
    } catch (e) {
      dispatch({ type: types.TASK_POST_FAILED, payload: e })
      throw e
    }
  }
}

export function updateTask(task) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASK_UPDATE_STARTED })
      const data = await dataAccess.taskService.updateTask(task)
      dispatch({
        type: types.TASK_UPDATE_COMPLETED,
        payload: data.task
      })
    } catch (e) {
      dispatch({ type: types.TASK_UPDATE_FAILED, payload: e })
      throw e
    }
  }
}

export function deleteTask(task) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASK_DELETE_STARTED })
      const data = await dataAccess.taskService.deleteTask(task)
      dispatch({
        type: types.TASK_DELETE_COMPLETED,
        payload: data.task
      })
    } catch (e) {
      dispatch({ type: types.TASK_DELETE_FAILED, payload: e })
      throw e
    }
  }
}

export function createSubTask(task) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SUB_TASK_POST_STARTED })
      const data = await dataAccess.subtaskService.createSubTask(task)
      dispatch({
        type: types.SUB_TASK_POST_COMPLETED,
        payload: data.task
      })
    } catch (e) {
      dispatch({ type: types.SUB_TASK_POST_FAILED, payload: e })
      throw e
    }
  }
}

export function updateSubTask(task) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SUB_TASK_UPDATE_STARTED })
      const data = await dataAccess.subtaskService.updateSubTask(task)
      dispatch({
        type: types.SUB_TASK_UPDATE_COMPLETED,
        payload: data.task
      })
    } catch (e) {
      dispatch({ type: types.SUB_TASK_UPDATE_FAILED, payload: e })
      throw e
    }
  }
}

export function deleteSubTask(task) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SUB_TASK_DELETE_STARTED })
      const data = await dataAccess.subtaskService.deleteSubTask(task)
      dispatch({
        type: types.SUB_TASK_DELETE_COMPLETED,
        payload: data.task
      })
    } catch (e) {
      dispatch({ type: types.SUB_TASK_DELETE_FAILED, payload: e })
      throw e
    }
  }
}
