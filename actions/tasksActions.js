import {
	TASK_POST_REQUESTED,
	TASK_DELETE_REQUESTED,
	TASK_UPDATE_REQUESTED,
	TASK_GET_REQUESTED,
	TASKS_GET_REQUESTED,
	CURRENT_TASK_DELETE,
	TASK_UPDATE_SUCCEEDED
} from './actionTypes';

function requestTaskPost(data) {
	return { type: TASK_POST_REQUESTED, payload: data };
}

function requestTaskDelete(data) {
	return { type: TASK_DELETE_REQUESTED, payload: data };
}

function requestTaskUpdate(data) {
	return { type: TASK_UPDATE_REQUESTED, payload: data };
}

function requestTaskGet(data) {
	return { type: TASK_GET_REQUESTED, payload: data };
}

function requestTasksGet(data) {
	return { type: TASKS_GET_REQUESTED, payload: data };
}

function deleteCurrentTask() {
	return { type: CURRENT_TASK_DELETE };
}

function applyTaskUpdate(data) {
	return { type: TASK_UPDATE_SUCCEEDED, payload: data };
}

export {
	requestTaskPost,
	requestTaskDelete,
	requestTaskUpdate,
	requestTaskGet,
	requestTasksGet,
	deleteCurrentTask,
	applyTaskUpdate
};
