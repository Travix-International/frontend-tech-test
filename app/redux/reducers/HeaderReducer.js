//Third Party
import update from 'react-addons-update'

//Actions
import { TODO_SEARCH } from '../actions/TODOSearch'
import { TODO_FILTER } from '../actions/TODOFilter'

const actions = {

    [`${TODO_SEARCH}`]: (state, action) => {
        return Object.assign({}, state, action);
    },

    [`${TODO_FILTER}`]: (state, action) => {
        return Object.assign({}, state, action);
    }

}

const initialState = {
    search: '',
    tag: null
};

export default (state = initialState, action) => {
    const _action = actions[action.type];

    if (_action) {
        return _action(state, action);
    }

    return state;
}