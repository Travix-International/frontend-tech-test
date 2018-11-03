import { combineReducers } from 'redux';

import TaskListReducer from '../containers/TravixtaskList/TLreducer';
import TaskEditorReducer from '../containers/TravixtaskEditor/TEreducer';

export default combineReducers({
  TaskListReducer,
  TaskEditorReducer,
});
