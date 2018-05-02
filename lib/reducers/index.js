import { combineReducers } from 'redux';

import tasks from './tasksReducer';

const rootReducer = combineReducers({
  tasks
});

export default rootReducer;