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
        dispatch({
          type: constants.RECEIVE_TASK_SUCCESS,
          tasks: body.tasks
        })
      } else {
        dispatch({
          type: constants.RECEIVE_TASK_ERROR,
          error: body.error
        })
      }
    })
  }
}

export const createTask = task => {
  return {
    type: constants.CREATE_TASK,
    task
  }
}
