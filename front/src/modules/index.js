import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import items from './todo/reducers/items'

export default (history) => combineReducers({
  router: connectRouter(history),
  items
})
