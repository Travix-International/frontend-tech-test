import { combineReducers } from 'redux';

import TaskListReducer from '../containers/TaskList/reducer';
import TaskEditorReducer from '../containers/TaskEditor/reducer';

export default combineReducers({
  TaskListReducer,
  TaskEditorReducer,
});
