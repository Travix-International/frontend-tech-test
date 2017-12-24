// import {
// 	TASK_POST_REQUESTED,
// 	TASK_POST_SUCCEEDED,
// 	TASK_POST_FAILED,
// 	TASK_DELETE_REQUESTED,
// 	TASK_DELETE_SUCCEEDED,
// 	TASK_DELETE_FAILED,
// 	TASK_UPDATE_REQUESTED,
// 	TASK_UPDATE_SUCCEEDED,
// 	TASK_UPDATE_FAILED,
// 	TASK_GET_REQUESTED,
// 	TASK_GET_SUCCEEDED,
// 	TASK_GET_FAILED,
// 	TASKS_GET_REQUESTED,
// 	TASKS_GET_SUCCEEDED,
// 	TASKS_GET_FAILED,
// 	GET_LANGUAGE
// } from './../actions/actionTypes';
import InitialStates from './initialStates';

function promisesReducer(state = InitialStates.promises, action) {
	if (action.type.includes('REQUESTED')) {
		return { ...state, [action.type]: true, [action.payload.id]: true };
	} else if (action.type.includes('SUCCEEDED') || action.type.includes('FAILED')) {
		const keyword = action.type.includes('SUCCEEDED') ? 'SUCCEEDED' : 'FAILED';
		return {
			...state,
			[action.type.replace(keyword, 'REQUESTED')]: false,
			[action.payload && action.payload.task ? action.payload.task.id : '']: false
		};
	}
	return state;
}

export default promisesReducer;
