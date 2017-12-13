import { GET_LANGUAGE } from './../actions/actionTypes';
import InitialStates from './initialStates';

function langReducer(state = InitialStates.lang, action) {
	switch (action.type) {
		case GET_LANGUAGE:
			return action.payload;
		default:
			return state;
	}
}

export default langReducer;
