import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import TasksReducer from './reducer_tasks';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  form: formReducer
});

export default rootReducer;
