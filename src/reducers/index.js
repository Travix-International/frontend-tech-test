import { combineReducers } from 'frint-store';

import todos, { INITIAL_STATE } from './todos';

export const STATE = Object.assign({}, INITIAL_STATE);

export default combineReducers({
  todos
});
