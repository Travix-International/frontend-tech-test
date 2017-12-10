import { combineReducers } from 'redux';
import AddTasksReducer from './modules/Tasks/AddTasks/AddTasksReducer';
import ListTasksReducer from './modules/Tasks/ListTasks/ListTasksReducer';

const rootReducer = combineReducers({
  AddTasksReducer,
  ListTasksReducer,
});

export default rootReducer;
