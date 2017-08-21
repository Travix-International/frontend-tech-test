import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './promise-middleware'
import tasksReducer from './App/reducers/tasks'


export default function() {
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(tasksReducer)

  return store
}