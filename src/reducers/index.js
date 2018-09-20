import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';


const reducers = combineReducers({
    tasksReducer,
});

export default reducers;
