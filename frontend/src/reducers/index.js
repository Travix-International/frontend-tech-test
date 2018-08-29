import { combineReducers } from 'redux'
import IncompleteTasksReducer from './incomplete_tasks_reducer'

const rootReducer = combineReducers({
  incompleteTasks: IncompleteTasksReducer
})

export default rootReducer
