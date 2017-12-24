import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
	TASKS_GET_REQUESTED,
	TASKS_GET_SUCCEEDED,
	TASKS_GET_FAILED
} from './../actions/actionTypes';

import generalUtils from '../utils/generalUtils';

function getTasksApiCall({ lastId, count, testURL }) {
	return generalUtils.getDataFromApi(`${testURL || ''}/tasks/${lastId}/${count}`);
}

export function* getTasks({ payload }) {
	try {
		yield call(delay, 1000);
		const getResponse = yield call(getTasksApiCall, payload);
		if (getResponse.error) {
			window.actionEvent.message = getResponse.error;
			window.actionEvent.level = 'error';
			document.dispatchEvent(window.actionEvent);
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
