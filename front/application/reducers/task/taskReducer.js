import reduceResolver from '../reduceResolver'

import getTasksReducer from './getTasksReducer'
import editTaskReducer from './editTaskReducer'
import deleteTaskReducer from './deleteTaskReducer'
import createTaskReducer from './createTaskReducer'

export const defaultState = {
  tasks: []
}

const resolvers = [
  getTasksReducer,
  editTaskReducer,
  deleteTaskReducer,
  createTaskReducer
]

export default reduceResolver(defaultState, resolvers)
