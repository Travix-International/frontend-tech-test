import { combineReducers } from 'redux';

import LangReducer from './langReducer';
import TasksReducer from './tasksReducer';
import ModalsReducer from './modalsReducer';

const rootReducer = combineReducers({
	lang: LangReducer,
	tasks: TasksReducer,
	modals: ModalsReducer
});

export default rootReducer;
