import { combineReducers } from 'redux';
import todoReducer from '../containers/app/app.reducer';
export default combineReducers({
    todo: todoReducer,
});
