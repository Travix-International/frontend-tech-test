import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
	TASK_GET_REQUESTED,
	TASK_GET_SUCCEEDED,
	TASK_GET_FAILED,
} from './../actions/actionTypes';

import generalUtils from '../utils/generalUtils';

function getTaskApiCall(payload) {
	return generalUtils.getDataFromApi(`/task/${payload}`, 'GET');
}
function* getTask({ payload }) {
	try {
		yield call(delay, 1000);
		const getResponse = yield call(getTaskApiCall, payload);
		if (getResponse.message) {
			window.actionEvent.message = getResponse.message;
			window.actionEvent.level = 'error';
			document.dispatchEvent(window.actionEvent);
			yield put({ type: TASK_GET_FAILED, payload: getResponse });
		} else {
			yield put({ type: TASK_GET_SUCCEEDED, payload: getResponse });
		}
	} catch (reason) {
		window.actionEvent.message = reason.message;
		window.actionEvent.level = 'error';
		document.dispatchEvent(window.actionEvent);
		yield put({ type: TASK_GET_FAILED, payload: reason });
	}
}

function* taskGetSaga() {
	yield takeEvery(TASK_GET_REQUESTED, getTask);
}

export default taskGetSaga;
