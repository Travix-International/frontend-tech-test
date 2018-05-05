import { combineReducers } from 'redux';

import tasks from './tasksReducer';
import showCompleted from './showCompletedReducer';
import fetching from './fetchingReducer';
import showTaskModal from './showTaskModalReducer';

const rootReducer = combineReducers({
  tasks,
  showCompleted,
  fetching,
  showTaskModal
});

export default rootReducer;
