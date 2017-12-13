import { LOAD_AUTHORS_SUCCESS } from './actionTypes';
import generalUtils from './../utils/generalUtils';

const DBRef = generalUtils.getDataBaseReference;

function loadAuthorsSuccess(authors) {
	return { type: LOAD_AUTHORS_SUCCESS, payload: authors };
}
function loadAuthors() {
	return (dispatch) => {
		return DBRef().child('authors').on('value', authors => dispatch(loadAuthorsSuccess(authors.val())));
	};
}

export { loadAuthorsSuccess, loadAuthors };
