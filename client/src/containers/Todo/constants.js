import { keyMirror } from 'common/services'

export const ActionTypes = keyMirror({
  ADD_TODO_REQUEST: null,
  DELETE_TODO_REQUEST: null,
  EDIT_TODO_REQUEST: null,
  FETCH_TODO_LIST_REQUEST: null,
  FETCH_TODO_LIST_SUCCESS: null,
  FETCH_TODO_LIST_FAILURE: null,
  TOGGLE_EDIT_MODE: null,
  RESET_TOGGLE_MODE: null
})

export const apiUrl = 'http://localhost:9001'
