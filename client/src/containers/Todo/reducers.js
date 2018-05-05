import { createReducer } from 'common/services'
import { ActionTypes } from './constants'

const initialState = {
  todoList: [],
  isLoading: true,
  isLoadingFailure: false,
  editedTodoId: '',
  page: 0,
  pages: 0
}

const todoReducer = createReducer(initialState, {
  [ActionTypes.FETCH_TODO_LIST_REQUEST]: (state, action) =>
    fetchTodoListRequest(state, action),
  [ActionTypes.FETCH_TODO_LIST_SUCCESS]: (state, action) =>
    fetchTodoListSuccess(state, action),
  [ActionTypes.FETCH_TODO_LIST_FAILURE]: state => fetchTodoListFailure(state),
  [ActionTypes.TOGGLE_EDIT_MODE]: (state, action) =>
    toggleEditMode(state, action),
  [ActionTypes.RESET_TOGGLE_MODE]: state => resetToggleMode(state)
})

const fetchTodoListRequest = (state, { payload }) => ({
  ...state,
  page: payload.page
})

const fetchTodoListSuccess = (state, { payload }) => ({
  ...state,
  ...payload,
  isLoading: false
})

const fetchTodoListFailure = state => ({
  ...state,
  isLoading: false,
  isLoadingFailure: true
})

const toggleEditMode = (state, { payload }) =>
  state.editedTodoId
    ? state
    : {
        ...state,
        ...payload
      }

const resetToggleMode = state => ({
  ...state,
  editedTodoId: ''
})

export default todoReducer
