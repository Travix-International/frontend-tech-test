//Third Party
import update from 'react-addons-update'

//Actions
import { TODO_ADD_SUCCEDED } from '../actions/TODOAdd'
import { TODO_LIST_SUCCEDED } from '../actions/TODOList'
import { TODO_DONE_SUCCEDED } from '../actions/TODODone'
import { TODO_UPDATE_SUCCEDED } from '../actions/TODOUpdate'

const actions = {

    [`${TODO_LIST_SUCCEDED}`]: (state, action) => {
        return Object.assign({}, state, action.TODOS);
    },

    [`${TODO_ADD_SUCCEDED}`]: (state, action) => {
        return update(state, 
            { 
                $merge: action.TODO
            }
        );

        return state;
    },

    [`${TODO_DONE_SUCCEDED}`]: (state, action) => {
        return update(state, 
            { 
                $merge: action.TODOS
            }
        );

        return state;
    },

    [`${TODO_UPDATE_SUCCEDED}`]: (state, action) => {
        return update(state, 
            { 
                $merge: action.TODOS
            }
        );

        return state;
    },

}

export default (state = {}, action) => {
    const _action = actions[action.type];

    if (_action) {
        return _action(state, action);
    }

    return state;
}