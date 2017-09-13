import { combineReducers } from 'frint-store';

import counterReducer from './counter';
import todos, { INITIAL_STATE } from './todos';

export default combineReducers({
  counter: counterReducer,
  todos: todos
});
