import { combineReducers } from 'frint-store';

import todos, { INITIAL_STATE } from './todos';

export default combineReducers({
  todos: todos
});
