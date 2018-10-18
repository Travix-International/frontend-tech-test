import { combineReducers } from 'redux';
import { tasklist } from './todoReducers';
import visibilityFilter from './filterReducers';

function lastAction(state = null, action) {
    return {
        type: action.type
    }
}
function connectionId(state = -1, action) {
    if(action.type === 'connectionSuccess') {
        return action.connectionId;
    }

    return state;
}
let rootReducer = combineReducers({
    lastAction,
    connectionId,
    tasklist,
    visibilityFilter
});

export default rootReducer;