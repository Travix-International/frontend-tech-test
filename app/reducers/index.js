import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    visibilityFilter,
    todos,
    routing
});

export default rootReducer;
