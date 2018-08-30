import { combineReducers } from 'redux'
import IncompleteTasksReducer from './incomplete_tasks_reducer'
import CompleteTasksReducer from './complete_tasks_reducer'
import HomeReducer from './home_reducer'

const rootReducer = combineReducers({
  incompleteTasks: IncompleteTasksReducer,
  loader: HomeReducer,
  completeTasks: CompleteTasksReducer
})

export default rootReducer
