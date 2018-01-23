import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux-immutable'

/* Resources reducers imports */
import todos, { ADD_TODO } from 'redux/ducks/todos'
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
  form: formReducer.plugin({
    addTodo: (state, action) => {
      switch (action.type) {
        case ADD_TODO.SUCCESS:
          return undefined
        default:
          return state
      }
    },
  }),
})

export default rootReducer
