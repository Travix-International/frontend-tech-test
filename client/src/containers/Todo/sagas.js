import { call, put, select, takeEvery } from 'redux-saga/effects'
import { reset } from 'redux-form'

import {
  fetchTodoListRequest,
  fetchTodoListFailure,
  fetchTodoListSuccess,
  resetToggleMode
} from './actions'
import { ActionTypes } from './constants'
import { currentPage } from './selectors'
import * as todoService from './services'

export function* addTodo({ payload }) {
  try {
    const page = yield select(currentPage)

    yield call([todoService, todoService.addTodo], payload)
    yield put(fetchTodoListRequest({ selected: page }))
    yield put(reset('add'))
  } catch (e) {
    // Should dispatch ADD_TODO_FAILURE action here
    alert(e.message)
  }
}

export function* deleteTodo({ payload }) {
  try {
    const page = yield select(currentPage)
    const params = { ...payload, page }

    yield call([todoService, todoService.deleteTodo], params)
    yield put(fetchTodoListRequest({ selected: page }))
  } catch (e) {
    // Should dispatch DELETE_TODO_FAILURE action here
    alert(e.message)
  }
}

export function* editTodo({ payload }) {
  try {
    const page = yield select(currentPage)
    const params = { ...payload, page: page }

    yield call([todoService, todoService.editTodo], params)

    yield put(resetToggleMode())
    yield put(fetchTodoListRequest({ selected: page }))
  } catch (e) {
    // Should dispatch EDIT_TODO_FAILURE action here
    alert(e.message)
  }
}

export function* fetchTodoList({ payload }) {
  try {
    const page = payload.page || 0
    const { data } = yield call([todoService, todoService.fetchTodoList], {
      page
    })

    yield put(fetchTodoListSuccess(data.tasks, data.pages))
  } catch (e) {
    yield put(fetchTodoListFailure())
  }
}

const effects = [
  takeEvery(ActionTypes.ADD_TODO_REQUEST, addTodo),
  takeEvery(ActionTypes.DELETE_TODO_REQUEST, deleteTodo),
  takeEvery(ActionTypes.EDIT_TODO_REQUEST, editTodo),
  takeEvery(ActionTypes.FETCH_TODO_LIST_REQUEST, fetchTodoList)
]

export default effects
