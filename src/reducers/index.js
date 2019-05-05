import { combineReducers } from 'redux';
import api from './api';
import filter from './filter';
import tasks from './tasks';

export default combineReducers({
  filter,
  api,
  tasks
});