import { combineReducers } from 'redux';

import tasks from './tasksReducer';
import showCompleted from './showCompletedReducer';
import addModal from './addModalReducer';
import editModal from './editModalReducer';
import isLoading from './isLoadingReducer';

const rootReducer = combineReducers({
  tasks,
  showCompleted,
  addModal,
  editModal,
  isLoading
});

export default rootReducer;
