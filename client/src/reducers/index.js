import { combineReducers } from 'redux';
import tasks from './tasks';

const reducer = combineReducers({
  tasks: tasks
});

export default reducer;
