import { TOGGLE_ABOUT_MODAL, TOGGLE_TASK_MODAL } from './actionTypes';

function toggleAboutModal(condition) {
	return { type: TOGGLE_ABOUT_MODAL, payload: condition };
}
function toggleTaskModal(condition) {
	return { type: TOGGLE_TASK_MODAL, payload: condition };
}

export { toggleAboutModal, toggleTaskModal };
