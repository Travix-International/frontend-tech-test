import {
	TASKS_GET_SUCCEEDED,
	TASK_DELETE_SUCCEEDED,
	TASK_UPDATE_SUCCEEDED
} from './../actions/actionTypes';
import InitialStates from './initialStates';

function updateHelper(state, payload) {
	const newState = [...state];
	newState[payload.taskIndex] = payload.task;
	return newState;
}

function tasksReducer(state = InitialStates.tasks, action) {
	switch (action.type) {
		case TASK_DELETE_SUCCEEDED:
			return [...state.slice(0, action.payload.taskIndex), ...state.slice(action.payload.taskIndex + 1)];
		case TASK_UPDATE_SUCCEEDED:
			return state.length > 0 ? updateHelper(state, action.payload) : state;
		case TASKS_GET_SUCCEEDED:
			return [...state, ...action.payload.tasks];
		default:
			return state;
	}
}

export default tasksReducer;
