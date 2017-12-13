import { combineReducers } from 'redux';

import LangReducer from './langReducer';
import TasksReducer from './tasksReducer';

const rootReducer = combineReducers({
	lang: LangReducer,
	tasks: TasksReducer
});

export default rootReducer;
