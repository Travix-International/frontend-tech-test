import { combineReducers } from 'frint-store';

import server from './app';
import todoList from './todos';

export default combineReducers({
  server,
  todoList,
});
