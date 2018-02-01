import { combineReducers } from 'frint-store';

import app from './app';
import todoList from './todos';

export default combineReducers({
  app,
  todoList,
});
