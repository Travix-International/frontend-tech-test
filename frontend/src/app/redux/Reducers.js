import { combineReducers } from 'redux';
import taskReducer from './task/reducers';

// Combine reducers, Add new reducers here
const rootReducer = combineReducers({
  task: taskReducer
});

export default rootReducer;
