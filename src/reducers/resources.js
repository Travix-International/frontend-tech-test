import { combineReducers } from 'redux-immutable'

import todos from 'reducers/todos'
import settings from 'reducers/settings'

const resourcesReducer = combineReducers({
  todos,
  settings,
})

export default resourcesReducer
