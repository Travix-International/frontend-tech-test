import { put, takeEvery, call } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import * as TaskApi from '../api/taskApi';

function* createTaskAsync({ task }) {
  const newTask = yield call(TaskApi.create, task);
  yield put({ type: types.CREATE_TASK_SUCCESS, task: newTask });
}

function* updateTaskAsync({ _id, updates }) {
  yield call(TaskApi.update, _id, updates);
  yield put({ type: types.UPDATE_TASK_SUCCESS, _id, updates });
}

function* removeTaskAsync({ _id }) {
  yield call(TaskApi.remove, _id);
  yield put({ type: types.REMOVE_TASK_SUCCESS, _id });
}

export function* watchTasks() {
  yield takeEvery(types.CREATE_TASK, createTaskAsync);
  yield takeEvery(types.UPDATE_TASK, updateTaskAsync);
  yield takeEvery(types.REMOVE_TASK, removeTaskAsync);
}
