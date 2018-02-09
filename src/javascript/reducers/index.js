import { combineReducers } from 'redux';
import appState from './appState';
import todos from './todos';
import todosFilter from './todoFilter';

const todoAppReducer = combineReducers({
  appState,
  todos,
  todosFilter,
});

export default todoAppReducer;
