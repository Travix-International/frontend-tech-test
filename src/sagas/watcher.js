import { takeLatest } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import * as taskSagas from './taskSagas';

export function* watchGetTask() {
    yield takeLatest(actionTypes.GET_TASK_REQUEST, taskSagas.getTask);
}

export function* watchSaveTask() {
    yield takeLatest(actionTypes.SAVE_TASK_REQUEST, taskSagas.saveTask);
}

export function* watchUpdateTask() {
    yield takeLatest(actionTypes.UPDATE_TASK_REQUEST, taskSagas.updateTask);
}

export function* watchDeleteTask() {
    yield takeLatest(actionTypes.DELETE_TASK_REQUEST, taskSagas.deleteTask);
}

