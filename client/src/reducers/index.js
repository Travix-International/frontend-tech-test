import { combineReducers } from 'redux';
import {tasks, editqueue} from './reducers';

const rootReducer = combineReducers({tasks, editqueue});

export default rootReducer;