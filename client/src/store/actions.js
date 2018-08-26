import axios from 'axios'
import { Logger, configureConsoleTransport } from 'travix-logger'

import * as constants from './constants'

const logger = new Logger({
  transports: [configureConsoleTransport()],
})

const fetchTasksStart = () => ({
  type: constants.TASKS_FETCH_START,
})

const fetchTasksSuccess = data => ({
  type: constants.TASKS_FETCH_SUCCESS,
  payload: data.tasks,
})

const fetchTasksFail = err => {
  logger.error('Fetch Tasks', err, { meta: err })
  return {
    type: constants.TASKS_FETCH_FAIL,
    payload: err,
  }
}

export const fetchTasks = () => dispatch => {
  dispatch(fetchTasksStart())
  axios
    .get('http://localhost:9001/tasks')
    .then(res => dispatch(fetchTasksSuccess(res.data)))
    .catch(err => dispatch(fetchTasksFail(err)))
}

const addTasksStart = () => ({
  type: constants.TASK_ADD_START,
})

const addTasksSuccess = res => dispatch => {
  dispatch({
    type: constants.TASK_ADD_SUCCESS,
  })
  logger.info('Create Task', res, { meta: res.statusText })
  dispatch(fetchTasks())
}

const addTasksFail = err => {
  logger.error('Create Task', err, { meta: err.response.statusText })
  return {
    type: constants.TASK_ADD_FAIL,
    payload: err,
  }
}

export const addTask = task => dispatch => {
  dispatch(addTasksStart())
  axios
    .post(`http://localhost:9001/task/create/${task.title}/${task.desc}`)
    .then(res => dispatch(addTasksSuccess(res)))
    .catch(err => dispatch(addTasksFail(err)))
}

export const selectTask = id => ({
  type: constants.TASK_SELECTED,
  payload: id,
})

const editTaskStart = () => ({
  type: constants.TASK_EDIT_START,
})
const editTaskSuccess = () => dispatch => {
  dispatch({ type: constants.TASK_EDIT_SUCCESS })
  dispatch(fetchTasks())
}

const editTaskFail = err => {
  logger.error('Edit Task', err, { meta: err.response.statusText })
  return {
    type: constants.TASK_EDIT_FAIL,
    payload: err,
  }
}

export const editTask = (id, title, desc) => dispatch => {
  dispatch(editTaskStart())
  axios
    .put(`http://localhost:9001/task/update/${id}/${title}/${desc}`)
    .then(() => dispatch(editTaskSuccess()))
    .catch(err => dispatch(editTaskFail(err)))
}

const deleteTaskStart = () => ({
  type: constants.TASK_DELETE_START,
})

const deleteTaskSuccess = (res, id) => dispatch => {
  dispatch({ type: constants.TASK_DELETE_SUCCESS, payload: id })
  logger.info('Delete Task', res, { meta: res.statusText })
}

const deleteTaskFail = err => {
  logger.error('Delete Task', err, { meta: err.response.statusText })
  return {
    type: constants.TASK_DELETE_FAIL,
    payload: err,
  }
}

export const deleteTask = id => dispatch => {
  dispatch(deleteTaskStart())
  axios
    .delete(`http://localhost:9001/task/delete/${id}`)
    .then(res => dispatch(deleteTaskSuccess(res, id)))
    .catch(err => dispatch(deleteTaskFail(err)))
}
