import {
	TASK_NEW_STATUS,
	TASK_UPDATE_SUCCEEDED,
	TASK_DELETE_SUCCEEDED
} from './../actions/actionTypes';
import InitialStates from './initialStates';

function statusReducer(state = InitialStates.status, action) {
	switch (action.type) {
		case TASK_DELETE_SUCCEEDED:
		case TASK_UPDATE_SUCCEEDED:
			return InitialStates.status;
		case TASK_NEW_STATUS:
			return action.payload;
		default:
			return state;
	}
}

export default statusReducer;
