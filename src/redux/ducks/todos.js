import { createAction, handleActions } from 'redux-actions'
import { takeLatest, put, call } from 'redux-saga/effects'
import { fromJS } from 'immutable'

import {
  domain,
  ERROR,
  PENDING,
  SUCCESS,
} from 'redux/constants'

import {
  completeTask,
  createTask,
  deleteTask,
  loadTasks,
} from 'utils/api'

/* Actions */
const todos = domain.defineAction('todos')

export const ADD_TODO = todos.defineAction('ADD_TODO', [SUCCESS, ERROR])
export const COMPLETE_TODO = todos.defineAction('COMPLETE_TODO', [SUCCESS, ERROR])
export const DELETE_TODO = todos.defineAction('DELETE_TODO', [SUCCESS, ERROR])
export const LOAD_TODOS = todos.defineAction('LOAD_TODOS', [PENDING, SUCCESS, ERROR])

/* Reducer */
const defaultState = fromJS({
  items: [],
})

const reducer = handleActions({
  [LOAD_TODOS.SUCCESS]: (state, action) => state.set('items', action.payload),

  [ADD_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    return state.set('items', items.insert(0, action.payload))
  },

  [COMPLETE_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')

    return state.set('items', items.map((item) => {
      if (item.get('id') !== action.payload.get('id')) { return item }
      return item.set('done', !item.get('done'))
    }))
  },

  [DELETE_TODO.SUCCESS]: (state, action) => {
    const items = state.get('items')
    return state.set('items', items.filter(item => item.get('id') !== action.payload.get('id')))
  },
}, defaultState)

export default reducer

/* Action Creators */
export const addTodo = createAction(ADD_TODO.ACTION)
export const completeTodo = createAction(COMPLETE_TODO.ACTION)
export const deleteTodo = createAction(DELETE_TODO.ACTION)
export const loadTodos = createAction(LOAD_TODOS.ACTION)

/* Side Effects */
export function* createTodoSaga(action) {
  try {
    const response = yield call(createTask, action.payload.toJS())
    yield put({ type: ADD_TODO.SUCCESS, payload: fromJS(response) })
  } catch (err) {
    yield put({ type: ADD_TODO.ERROR, payload: { error: err } })
  }
}

export function* completeTodoSaga(action) {
  try {
    const response = yield call(completeTask, action.payload.toJS())
    yield put({ type: COMPLETE_TODO.SUCCESS, payload: fromJS(response) })
  } catch (err) {
    yield put({ type: COMPLETE_TODO.ERROR, payload: { error: err } })
  }
}

export function* deleteTodoSaga(action) {
  try {
    const response = yield call(deleteTask, action.payload.toJS())
    yield put({ type: DELETE_TODO.SUCCESS, payload: fromJS(response) })
  } catch (err) {
    yield put({ type: DELETE_TODO.ERROR, payload: { error: err } })
  }
}

export function* loadTodosSaga() {
  try {
    const response = yield call(loadTasks)
    yield put({ type: LOAD_TODOS.SUCCESS, payload: fromJS(response) })
  } catch (err) {
    yield put({ type: LOAD_TODOS.ERROR, payload: { error: err } })
  }
}

/* eslint-disable */
export const todosWatchers = [
  takeLatest(ADD_TODO.ACTION, createTodoSaga),
  takeLatest(COMPLETE_TODO.ACTION, completeTodoSaga),
  takeLatest(DELETE_TODO.ACTION, deleteTodoSaga),
  takeLatest(LOAD_TODOS.ACTION, loadTodosSaga),
]
/* eslint-enable */
