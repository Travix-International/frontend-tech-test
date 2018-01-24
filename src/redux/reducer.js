import { reducer as formReducer } from 'redux-form/immutable'
import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'

/* Resources reducers imports */
import todos, { ADD_TODO } from 'redux/ducks/todos'
import settings from 'redux/ducks/settings'

/* Utils */
export const clearReduxForm = state => (
  state
    .set('values', Map({}))
    .set(
      'fields',
      state.get('fields').map(field => field.set('touched', false)),
    )
)

/* UI reducers imports */

/* Resources reducer */
const resources = combineReducers({
  todos,
  settings,
})

/* Input reducer */
const form = formReducer.plugin({
  addTodo: (state, action) => {
    switch (action.type) {
      case ADD_TODO.SUCCESS:
        return clearReduxForm(state)
      default:
        return state
    }
  },
})

/* UI Reducer */

/* Root Reducer */
const rootReducer = combineReducers({
  resources,
  form,
})

export default rootReducer
