import {CREATE_TASK} from 'constants/ActionTypes'

export const createTask = (task) => ({
  type: CREATE_TASK,
  task
})
