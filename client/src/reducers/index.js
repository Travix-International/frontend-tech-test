import { combineReducers } from 'redux';
import tasks from './reducers';

const rootReducer = combineReducers({tasks});

export default rootReducer;