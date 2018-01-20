import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux-immutable'

/* Resources reducers imports */
import todos from 'redux/ducks/todos'
import settings from 'redux/ducks/settings'

/* UI reducers imports */

/* Resources reducer */
const resources = combineReducers({
  todos,
  settings,
})

/* UI Reducer */

/* Root Reducer */
const rootReducer = combineReducers({
  resources,
  form: formReducer,
})

export default rootReducer
