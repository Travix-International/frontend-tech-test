import { combineReducers } from 'redux';

import tasks from './tasksReducer';
import showCompleted from './showCompletedReducer';
import addModal from './addModalReducer';
import editModal from './editModalReducer';

const rootReducer = combineReducers({
  tasks,
  showCompleted,
  addModal,
  editModal
});

export default rootReducer;
