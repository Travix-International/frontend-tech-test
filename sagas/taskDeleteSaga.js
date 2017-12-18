import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
	TASK_DELETE_REQUESTED,
	TASK_DELETE_SUCCEEDED,
	TASK_DELETE_FAILED,

	TASK_NEW_STATUS
} from './../actions/actionTypes';

import generalUtils from '../utils/generalUtils';

function deleteTaskApiCall(payload) {
	return generalUtils.setDataFromApi(`/task/delete/${payload.id}`, {}, 'DELETE');
}

function* deleteTask({ payload }) {
	try {
		const deleteResponse = yield call(deleteTaskApiCall, payload);
		yield call(delay, 1000);
		yield put({ type: TASK_NEW_STATUS, payload: { status: 'delete', taskIndex: deleteResponse.taskIndex, id: deleteResponse.id } });
		yield call(delay, 500);
		yield put({ type: TASK_DELETE_SUCCEEDED, payload: deleteResponse });
	} catch (reason) {
		yield put({ type: TASK_DELETE_FAILED, payload: reason });
	}
}

function* taskDeleteSaga() {
	yield takeEvery(TASK_DELETE_REQUESTED, deleteTask);
}

export default taskDeleteSaga;
