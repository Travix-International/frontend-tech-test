import { combineReducers } from 'redux';
import AddTasksReducer from './modules/Tasks/AddTasks/AddTasksReducer';
import EditTasksReducer from './modules/Tasks/EditTasks/EditTasksReducer';
import ListTasksReducer from './modules/Tasks/ListTasks/ListTasksReducer';

const rootReducer = combineReducers({
  AddTasksReducer,
  EditTasksReducer,
  ListTasksReducer,
});

export default rootReducer;
