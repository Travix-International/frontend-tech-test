import { GET_LANGUAGE } from './actionTypes';
import langUtils from './../utils/langUtils/';

function getLang() {
	return { type: GET_LANGUAGE, payload: langUtils.getLang() };
}

function changeLang() {
	return { type: GET_LANGUAGE, payload: langUtils.changeLang() };
}
export { getLang, changeLang };
