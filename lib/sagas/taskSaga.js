import { put, takeEvery, call } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import * as TaskApi from '../api/taskApi';

export function* createTaskAsync({ task }) {
  const newTask = yield call(TaskApi.create, task);
  yield put({ type: types.CREATE_TASK_SUCCESS, task: newTask });
}

export function* updateTaskAsync({ _id, updates }) {
  yield call(TaskApi.update, _id, updates);
  yield put({ type: types.UPDATE_TASK_SUCCESS, _id, updates });
}

export function* removeTaskAsync({ _id }) {
  yield call(TaskApi.remove, _id);
  yield put({ type: types.REMOVE_TASK_SUCCESS, _id });
}

export function* loadTasksAsync() {
  const tasks = yield call(TaskApi.load);
  yield put({ type: types.ADD_TASKS, tasks });
}

export function* watchTasks() {
  yield takeEvery(types.CREATE_TASK, createTaskAsync);
  yield takeEvery(types.UPDATE_TASK, updateTaskAsync);
  yield takeEvery(types.REMOVE_TASK, removeTaskAsync);
  yield takeEvery(types.LOAD_TASKS, loadTasksAsync);
}
