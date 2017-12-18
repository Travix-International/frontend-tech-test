import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
	TASKS_GET_REQUESTED,
	TASKS_GET_SUCCEEDED,
	TASKS_GET_FAILED
} from './../actions/actionTypes';

import generalUtils from '../utils/generalUtils';

function getTasksApiCall({ lastId, count }) {
	return generalUtils.getDataFromApi(`/tasks/${lastId}/${count}`);
}

function* getTasks({ payload }) {
	try {
		const getResponse = yield call(getTasksApiCall, payload);
		yield call(delay, 1000);
		if (getResponse.error) {
			window.errorEvent.error = getResponse.error;
			document.dispatchEvent(window.errorEvent);
			yield put({ type: TASKS_GET_FAILED, payload: getResponse });
		} else {
			yield put({ type: TASKS_GET_SUCCEEDED, payload: getResponse });
		}
	} catch (reason) {
		yield put({ type: TASKS_GET_FAILED, payload: reason });
	}
}

function* tasksGetSaga() {
	yield takeEvery(TASKS_GET_REQUESTED, getTasks);
}

export default tasksGetSaga;
