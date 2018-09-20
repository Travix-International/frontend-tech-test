import { put, call } from 'redux-saga/effects';
import * as TaskApiService from '../api/taskApi';
import actionTypes from '../actions/actionTypes';

export function* getTask({ payload, meta }) {
    try {
        const response = yield call(TaskApiService.getTask, {
            ...payload,
            config: meta.config,
        });
        yield put({ type: actionTypes.GET_TASK_SUCCESS, response });
    } catch (error) {
        yield put({ type: actionTypes.GET_TASK_ERROR, error });
    }
}

export function* saveTask({ payload, meta }) {
    try {
        const response = yield call(TaskApiService.saveTask, {
            ...payload,
            config: meta.config,
        });
        yield put({ type: actionTypes.SAVE_TASK_SUCCESS, response });
    } catch (error) {
        yield put({ type: actionTypes.SAVE_TASK_ERROR, error });
    }
}

export function* updateTask({ payload, meta }) {
    try {
        const response = yield call(TaskApiService.updateTask, {
            ...payload,
            config: meta.config,
        });
        yield put({ type: actionTypes.UPDATE_TASK_SUCCESS, response });
    } catch (error) {
        yield put({ type: actionTypes.UPDATE_TASK_ERROR, error });
    }
}

export function* deleteTask({ payload, meta }) {
    try {
        const response = yield call(TaskApiService.deleteTask, {
            ...payload,
            config: meta.config,
        });
        yield put({ type: actionTypes.DELETE_TASK_SUCCESS, response });
    } catch (error) {
        yield put({ type: actionTypes.DELETE_TASK_ERROR, error });
    }
}