import { combineReducers } from 'redux';

import session from './session';
import ui from './ui/index';

const appReducer = combineReducers({
	session,
	ui
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

module.exports = rootReducer;