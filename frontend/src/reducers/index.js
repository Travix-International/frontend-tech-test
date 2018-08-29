import { combineReducers } from 'redux'
import IncompleteTasksReducer from './incomplete_tasks_reducer'
import HomeReducer from './home_reducer'

const rootReducer = combineReducers({
  incompleteTasks: IncompleteTasksReducer,
  loader: HomeReducer   
})

export default rootReducer
