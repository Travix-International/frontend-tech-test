import { combineReducers } from 'redux-immutable'

import resources from './resources'

const rootReducer = combineReducers({
  resources,
})

export default rootReducer
