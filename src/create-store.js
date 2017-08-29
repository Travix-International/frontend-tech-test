import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './promise-middleware'
import tasksReducer from './App/reducers/tasks'
import taskReducer from './App/reducers/task'



export default function() {
  const reducer = combineReducers({
      tasks: tasksReducer,
      task: taskReducer
  });

  const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  const store = finalCreateStore(reducer)

  return store
}