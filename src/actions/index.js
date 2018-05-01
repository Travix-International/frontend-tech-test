import * as types from 'constants/actionTypes'
import RequestBuilder from '../services/RequestBuilder'

export function loadTasks() {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASKS_FETCH_STARTED })
      const request = new RequestBuilder({ method: 'GET', url: 'tasks' })
      const data = await request.send()
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

export function createTask({ name, description }) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASK_POST_STARTED })
      const request = new RequestBuilder({ method: 'POST', url: 'task/create' })
      const data = await request.body({ name, description }).send()
      dispatch({
        type: types.TASK_POST_COMPLETED,
        payload: data.tasks
      })
    } catch (e) {
      dispatch({ type: types.TASK_POST_FAILED, payload: e })
      throw e
    }
  }
}

export function updateTask({ id, name, description, status, subTasks }) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASK_UPDATE_STARTED })
      const request = new RequestBuilder({ method: 'PUT', url: `task/update/${id}` })
      const data = await request.body({ name, description, status, subTasks }).send()
      dispatch({
        type: types.TASK_UPDATE_COMPLETED,
        payload: data.tasks
      })
    } catch (e) {
      dispatch({ type: types.TASK_UPDATE_FAILED, payload: e })
      throw e
    }
  }
}

export function deleteTask({ id }) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.TASK_DELETE_STARTED })
      const request = new RequestBuilder({ method: 'DELETE', url: `task/delete/${id}` })
      const data = await request.send()
      dispatch({
        type: types.TASK_DELETE_COMPLETED,
        payload: data.tasks
      })
    } catch (e) {
      dispatch({ type: types.TASK_DELETE_FAILED, payload: e })
      throw e
    }
  }
}

export function createSubTask({ id, name, description }) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SUB_TASK_POST_STARTED })
      const request = new RequestBuilder({ method: 'POST', url: `subtask/create/${id}` })
      const data = await request.body({ name, description }).send()
      dispatch({
        type: types.SUB_TASK_POST_COMPLETED,
        payload: data.tasks
      })
    } catch (e) {
      dispatch({ type: types.SUB_TASK_POST_FAILED, payload: e })
      throw e
    }
  }
}

export function updateSubTask({ id, parentId, name, description, status }) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SUB_TASK_UPDATE_STARTED })
      const request = new RequestBuilder({ method: 'PUT', url: `subtask/update/${parentId}/${id}` })
      const data = await request.body({ name, description, status }).send()
      dispatch({
        type: types.SUB_TASK_UPDATE_COMPLETED,
        payload: data.tasks
      })
    } catch (e) {
      dispatch({ type: types.SUB_TASK_UPDATE_FAILED, payload: e })
      throw e
    }
  }
}

export function deleteSubTask({ parentId, id }) {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SUB_TASK_DELETE_STARTED })
      const request = new RequestBuilder({ method: 'DELETE', url: `subtask/delete/${parentId}/${id}` })
      const data = await request.send()
      dispatch({
        type: types.SUB_TASK_DELETE_COMPLETED,
        payload: data.tasks
      })
    } catch (e) {
      dispatch({ type: types.SUB_TASK_DELETE_FAILED, payload: e })
      throw e
    }
  }
}
