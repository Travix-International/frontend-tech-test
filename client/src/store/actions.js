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
    payload: data
  }
}

const fetchTasksFail = err => {
  return {
    type: constants.TASKS_FETCH_FAIL,
    payload: err
  }
}

export const addTask = () => {
  return {
    type: constants.TASK_ADD
  }
}

export const editTask = data => {
  return {
    type: constants.TASK_EDIT,
    payload: data
  }
}

export const deleteTask = data => {
  return {
    type: constants.TASK_DELETE,
    payload: data
  }
}
