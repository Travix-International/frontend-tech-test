import { call, put, takeEvery } from 'redux-saga/effects';
import {
	TASK_POST_REQUESTED,
	TASK_POST_SUCCEEDED,
	TASK_POST_FAILED
} from './../actions/actionTypes';

import generalUtils from '../utils/generalUtils';

function postTaskApiCall(payload) {
	return generalUtils.setDataFromApi(`/task/create/${payload.title}/${payload.date[0]}/${payload.description}`, payload, 'POST');
}

function* postTask({ payload }) {
	try {
		const postResponse = yield call(postTaskApiCall, payload);
		window.actionEvent.message = postResponse.message;
		window.actionEvent.level = 'success';
		document.dispatchEvent(window.actionEvent);
		yield put({ type: TASK_POST_SUCCEEDED, payload: postResponse });
	} catch (reason) {
		yield put({ type: TASK_POST_FAILED, payload: reason });
	}
}

function* taskPostSaga() {
	yield takeEvery(TASK_POST_REQUESTED, postTask);
}

export default taskPostSaga;
