import { combineReducers } from 'redux';
import Tasks from './Tasks';

const rootReducer = combineReducers({
  tasks: Tasks
});

export default rootReducer;
