import { combineReducers } from 'redux'
import todos from './todos'
import isFetching from './isFetching'
import editingTask from './editingTask'

const reducers = combineReducers({
  editingTask,
  isFetching,
  todos,
})

export default reducers
