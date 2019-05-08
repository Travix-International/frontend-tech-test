import { combineReducers } from 'redux';
import api from './api';
import filter from './filter';
import tasks from './tasks';
import search from './search';

export default combineReducers({
  filter,
  api,
  tasks,
  search
});