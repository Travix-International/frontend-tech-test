import { createAction, handleActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'

import {
  SUCCESS,
  domain,
} from 'redux/constants'

/* Actions */
const todos = domain.defineAction('todos')

export const COMPLETE_TODO = todos.defineAction('COMPLETE_TODO', [SUCCESS])
export const DELETE_TODO = todos.defineAction('DELETE_TODO', [SUCCESS])
export const EDIT_TODO = todos.defineAction('EDIT_TODO', [SUCCESS])
export const ADD_TODO = todos.defineAction('ADD_TODO', [SUCCESS])

/* Reducer */
const defaultState = fromJS({
  items: [
    { title: 'Create a To-do app', description: 'Use all you know about react/redux to do so!', id: 1, done: false },
    { title: 'Create a Pull Request', description: 'Submit yoursolution for review!', id: 2, done: true },
    { title: 'Eat!', description: 'It\'s apparently quite important', id: 3, done: false },
    { title: 'Rest!', description: 'Like eating, it seems like this is also really important', id: 4, done: false },
    { title: 'Have social life!', description: 'Ok, now we\'re just being ridiculous...', id: 5, done: true },
    { title: 'Work!', description: 'THERE\'S NOT ENOUGH TIME!', id: 6, done: false },
  ],
})

const reducer = handleActions({
  [ADD_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    return state.set('items', items.insert(0, Map(action.payload)))
  },

  [COMPLETE_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')

    return state.set('items', items.map((item) => {
      if (item.get('id') !== action.payload.id) { return item }
      return item.set('done', !item.get('done'))
    }))
  },

  [DELETE_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    return state.set('items', items.filter(item => item.get('id') !== action.payload.id))
  },

  [EDIT_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    const index = items.findIndex(item => item.get('id') === action.payload.id)

    return state.set('items', items.set(index, fromJS(action.payload)))
  },
}, defaultState)

export default reducer

/* Action Creators */
export const completeTodo = createAction(COMPLETE_TODO.SUCCESS)
export const deleteTodo = createAction(DELETE_TODO.SUCCESS)
export const editTodo = createAction(EDIT_TODO.SUCCESS)
export const addTodo = createAction(ADD_TODO.SUCCESS)

/* Side Effects */
