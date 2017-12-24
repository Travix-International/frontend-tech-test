import { TOGGLE_ABOUT_MODAL, TOGGLE_TASK_MODAL } from './../actions/actionTypes';
import InitialStates from './initialStates';

function langReducer(state = InitialStates.lang, action) {
	switch (action.type) {
		case TOGGLE_ABOUT_MODAL:
			return { ...InitialStates.modals, about: action.payload };
		case TOGGLE_TASK_MODAL:
			return { ...InitialStates.modals, task: action.payload };
		default:
			return state;
	}
}

export default langReducer;
