import { combineReducers } from 'redux';

import todos from './todos.js';
import activeTodo from './activetodo.js';
import dialog from './dialog.js';

export default combineReducers({
  todos,
  activeTodo,
  dialog
});