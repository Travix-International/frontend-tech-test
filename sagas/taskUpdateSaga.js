import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
	TASK_UPDATE_REQUESTED,
	TASK_UPDATE_SUCCEEDED,
	TASK_UPDATE_FAILED,

	TASK_NEW_STATUS
} from './../actions/actionTypes';

import generalUtils from '../utils/generalUtils';

function updateTaskApiCall(payload) {
	return generalUtils.setDataFromApi(`/task/update/${payload.id}`, payload, 'PUT');
}
function* updateTask({ payload }) {
	try {
		const updateResponse = yield call(updateTaskApiCall, payload);
		yield call(delay, 1000);
		yield put({ type: TASK_NEW_STATUS, payload: { status: 'update', taskIndex: updateResponse.taskIndex, id: updateResponse.task.id } });
		yield call(delay, 500);
		yield put({ type: TASK_UPDATE_SUCCEEDED, payload: updateResponse });
	} catch (reason) {
		yield put({ type: TASK_UPDATE_FAILED, payload: reason });
	}
}

function* taskUpdateSaga() {
	yield takeEvery(TASK_UPDATE_REQUESTED, updateTask);
}

export default taskUpdateSaga;
