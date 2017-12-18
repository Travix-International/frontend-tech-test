import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import LangReducer from './langReducer';
import TasksReducer from './tasksReducer';
import ModalsReducer from './modalsReducer';
import PromisesReducer from './promisesReducer';
import StatusReducer from './statusReducer';
import currentTaskReducer from './currentTaskReducer';

const rootReducer = combineReducers({
	lang: LangReducer,
	tasks: TasksReducer,
	modals: ModalsReducer,
	promises: PromisesReducer,
	status: StatusReducer,
	task: currentTaskReducer,
	form: formReducer
});

export default rootReducer;
