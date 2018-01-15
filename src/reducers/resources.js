import { combineReducers } from 'redux-immutable'

import home from './home'
import settings from './settings'

const resourcesReducer = combineReducers({
  home,
  settings,
})

export default resourcesReducer
