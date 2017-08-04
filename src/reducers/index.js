/* eslint-disable */
import { combineReducers } from 'redux'
import todoReducer from './todosReducer'


const rootReducer = combineReducers({
  Todos: todoReducer,
})

export default rootReducer
