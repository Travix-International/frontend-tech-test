import * as constants from 'constants/ActionTypes'
import {Logger, configureConsoleTransport} from 'travix-logger';

const logger = new Logger({
  transports: [configureConsoleTransport()],
})

export const getAllTasks = (dispatch) => {
  return (dispatch) => {
    dispatch({
      type: constants.FETCH_TASK_REQUEST
    })

    return fetch('http://localhost:9001/tasks')
    .then(response => response.json().then(body => ({ response, body })))
    .then(({ response, body }) => {
      if(response.ok){
        logger.info('Received all tasks!', response, body)
        dispatch({
          type: constants.RECEIVE_TASK_SUCCESS,
          tasks: body.tasks
        })
      } else {
        logger.info('There was an error fetching tasks', response)
        dispatch({
          type: constants.RECEIVE_TASK_ERROR,
          error: body.error
        })
      }
    })
  }
}

// Create Update and Delete are more or less the same actions. The following method will DRY the code straight up.

const apiRequest = (task, url, method, dispatch, constantStart = null, constantSuccess = null, constantError = null) => {
  return (dispatch) => {
    dispatch({
      type: constantStart
    })

    return fetch(url, {
      method,
      body: JSON.stringify(task)
    })
    .then(response => response.json().then(body => ({ response, body })))
    .then(({ response, body }) => {
      if(response.ok){
        logger.info(`Successfully performed ${method} task: ${url}`, response)
        dispatch({
          type: constantSuccess,
          task: task
        })
      } else {
        logger.info(`Error in performing ${method} task: ${url}`, response)
        dispatch({
          type: constantError,
          error: body.error
        })
      }
    })
  }
}

// Create a new task
export const createTask = task => dispatch => {
  dispatch(unselectTask());

  return apiRequest(
    task,
    `http://localhost:9001/task/create/${task.title}/${task.description}`,
    'post',
    dispatch,
    constants.CREATE_TASK,
    constants.CREATE_TASK_SUCCESS,
    constants.CREATE_TASK_ERROR
    )
}

// Update a task
export const updateTask = task => dispatch => {
  dispatch(unselectTask());

  return apiRequest(
    task,
    `http://localhost:9001/task/update/${task.title}/${task.description}`,
    'put',
    dispatch,
    constants.UPDATE_TASK,
    constants.UPDATE_TASK_SUCCESS,
    constants.UPDATE_TASK_ERROR
    )
}

// Delete a task
export const deleteTask = task => dispatch => {
  return apiRequest(
    task,
    `http://localhost:9001/task/delete/${task.id}`,
    'delete',
    dispatch,
    constants.DELETE_TASK,
    constants.DELETE_TASK_SUCCESS,
    constants.DELETE_TASK_ERROR
    )
}

export const selectOrCreateTask = (task = {id: null, title: "", description: ""}) => {
  return {
    type: constants.SELECT_OR_CREATE_TASK,
    task
  }
}

export const unselectTask = () => ({
  type: constants.UNSELECT_TASK
})
