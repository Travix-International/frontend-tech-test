import { combineReducers } from 'redux-immutable'

/* Resources reducers imports */
import todos from './todos'
import settings from './settings'

/* UI reducers imports */

/* Resources reducer */
const resources = combineReducers({
  todos,
  settings,
})

/* UI Reducer */

/* Root Reducer */
const rootReducer = combineReducers({ resources })

export default rootReducer
