import {CREATE_TASK} from 'constants/ActionTypes'

const logger = new Logger({
  transports: [configureConsoleTransport()],
})

export const createTask = (task) => ({
  type: CREATE_TASK,
  task
})
