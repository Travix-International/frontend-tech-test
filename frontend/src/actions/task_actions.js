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
  }
}

export const createTask = task => {
  return {
    type: constants.CREATE_TASK,
    task
  }
}
