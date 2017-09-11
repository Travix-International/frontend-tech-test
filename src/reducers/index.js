import { combineReducers } from 'frint-store';

import counterReducer from './counter';

export default combineReducers({
  counter: counterReducer
});
