import { createAction, handleActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'

import {
  SUCCESS,
  domain,
} from 'redux/constants'

// Temprorary uuid function.
// Taken from https://gist.github.com/jed/982883
// eslint-disable-next-line
function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}

/* Actions */
const todos = domain.defineAction('todos')

export const COMPLETE_TODO = todos.defineAction('COMPLETE_TODO', [SUCCESS])
export const EDIT_TODO = todos.defineAction('EDIT_TODO', [SUCCESS])
export const ADD_TODO = todos.defineAction('ADD_TODO', [SUCCESS])
export const DELETE_TODO = todos.defineAction('DELETE_TODO', [SUCCESS])

/* Reducer */
const array = Array(2).fill().map((val, index) => ({
  title: `My todo ${index + 1}`,
  description: 'This is one of my todos',
  id: b(),
  done: Math.random() >= 0.5,
}))

const defaultState = fromJS({
  items: array,
})

const reducer = handleActions({
  [ADD_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    const { id, done } = action.payload
    return state.set('items', items.insert(0, Map({ ...action.payload, id: id || b(), done: done || false })))
  },

  [COMPLETE_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')

    return state.set('items', items.map((item) => {
      if (item.get('id') !== action.payload.id) { return item }
      return item.set('done', !item.get('done'))
    }))
  },

  [EDIT_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    const index = items.findIndex(item => item.get('id') === action.payload.id)

    return state.set('items', items.set(index, fromJS(action.payload)))
  },

  [DELETE_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    return state.set('items', items.filter(item => item.get('id') !== action.payload.id))
  },
}, defaultState)

export default reducer

/* Action Creators */
export const completeTodo = createAction(COMPLETE_TODO.SUCCESS)
export const editTodo = createAction(EDIT_TODO.SUCCESS)
export const addTodo = createAction(ADD_TODO.SUCCESS)
export const deleteTodo = createAction(DELETE_TODO.SUCCESS)

/* Side Effects */
