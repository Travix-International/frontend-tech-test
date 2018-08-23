import axios from 'axios'
import * as constants from './constants'

export const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksStart())
    axios
      .get('http://localhost:9001/tasks')
      .then(res => dispatch(fetchTasksSuccess(res.data)))
      .catch(err => dispatch(fetchTasksFail(err)))
  }
}

const fetchTasksStart = () => {
  return {
    type: constants.TASKS_FETCH_START
  }
}

const fetchTasksSuccess = data => {
  return {
    type: constants.TASKS_FETCH_SUCCESS,
    payload: data.tasks
  }
}

const fetchTasksFail = err => {
  return {
    type: constants.TASKS_FETCH_FAIL,
    payload: err
  }
}

export const addTask = task => {
  return dispatch => {
    dispatch(addTasksStart())
    axios
      .post(`http://localhost:9001/task/create/${task.title}/${task.desc}`)
      .then(res => dispatch(addTasksSuccess()))
      .catch(err => dispatch(addTasksFail(err)))
  }
}

const addTasksStart = () => {
  return {
    type: constants.TASK_ADD_START
  }
}

const addTasksSuccess = () => {
  return dispatch => {
    dispatch(fetchTasks())
    dispatch({
      type: constants.TASK_ADD_SUCCESS
    })
  }
}

const addTasksFail = err => {
  return {
    type: constants.TASK_ADD_FAIL,
    payload: err
  }
}

export const selectTask = id => {
  return {
    type: constants.TASK_SELECTED,
    payload: id
  }
}

export const editTask = id => {
  return {
    type: constants.TASK_EDIT,
    payload: id
  }
}

export const deleteTask = id => {
  return dispatch => {
    dispatch(deleteTaskStart())
    axios
      .delete(`http://localhost:9001/task/delete/${id}`)
      .then(res => dispatch(deleteTaskSuccess(id)))
      .catch(err => dispatch(deleteTaskFail(err)))
  }
}

const deleteTaskStart = () => {
  return {
    type: constants.TASK_DELETE_START
  }
}
const deleteTaskSuccess = id => {
  return dispatch => {
    dispatch({type: constants.TASK_DELETE_SUCCESS, payload: id})
  }
}
const deleteTaskFail = err => {
  return {
    type: constants.TASK_DELETE_FAIL,
    payload: err
  }
}
