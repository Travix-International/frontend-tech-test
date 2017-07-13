import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export function fetchingFailed(state = false, action) {
    switch (action.type) {
        case 'FETCHING_FAILED':
            return action.hasErrored
        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function fetchDataSuccess(state = [], action) {

    console.log(action);

    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
const rootReducer = combineReducers({
    visibilityFilter,
    fetchingFailed,
    isLoading,
    fetchDataSuccess,
    todos,
    routing
});

export default rootReducer;
