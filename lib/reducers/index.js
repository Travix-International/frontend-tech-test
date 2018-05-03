import { combineReducers } from 'redux';

import tasks from './tasksReducer';
import showCompleted from './showCompletedReducer';
import fetching from './fetchingReducer';

const rootReducer = combineReducers({
  tasks,
  showCompleted,
  fetching,
});

export default rootReducer;
