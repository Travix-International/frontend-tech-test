import { combineReducers } from 'redux'

import TodoFormReducer from './TodoFormReducer'
import TodoListReducer from './TodoListReducer'

export default combineReducers({
  form: TodoFormReducer,
  list: TodoListReducer
})
