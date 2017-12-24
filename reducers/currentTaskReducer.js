import {
	TASK_GET_SUCCEEDED,
	TASK_UPDATE_SUCCEEDED,
	CURRENT_TASK_DELETE
} from './../actions/actionTypes';

import InitialStates from './initialStates';

function newStateHelper(data) {
	const task = { ...data };
	if (Array.isArray(task.date)) {
		task.date = data.date[0];
	}
	return task;
}

function currentTaskReducer(state = InitialStates.currentTask, action) {
	switch (action.type) {
		case TASK_UPDATE_SUCCEEDED:
			return newStateHelper(action.payload.task);
		case TASK_GET_SUCCEEDED:
			return newStateHelper({ ...action.payload.task, taskIndex: action.payload.taskIndex });
		case CURRENT_TASK_DELETE:
			return InitialStates.currentTask;
		default:
			return state;
	}
}

export default currentTaskReducer;
