import { combineReducers } from 'redux';

import todos from './todos.js';
import activeTodo from './activetodo.js';
import dialog from './dialog.js';
import tags from './tags.js';

export default combineReducers({
  todos,
  activeTodo,
  dialog,
  tags
});