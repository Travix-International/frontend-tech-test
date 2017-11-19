import { combineReducers } from 'redux'
import todos from './todos'
import isFetching from './isFetching'

const reducers = combineReducers({
  isFetching,
  todos,
})

export default reducers
