import { combineReducers } from 'redux';

import dialogs from './dialogs';

var ui = combineReducers({
	dialogs
});
module.exports = ui;