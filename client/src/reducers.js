import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import todos from 'containers/Todo/reducers'

export default combineReducers({
  form,
  router,
  todos
})
