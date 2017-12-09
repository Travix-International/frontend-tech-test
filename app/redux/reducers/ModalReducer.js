//Third Party
import update from 'react-addons-update'

//Actions
import { MODAL_READONLY } from '../actions/ModalReadOnly'
import { MODAL_CLOSE } from '../actions/ModalClose'
import { MODAL_UPDATE } from '../actions/ModalUpdate'

const actions = {

    [`${MODAL_READONLY}`]: (state, action) => {
        return Object.assign({}, state, action);
    },

    [`${MODAL_UPDATE}`]: (state, action) => {
        return Object.assign({}, state, action);
    },

    [`${MODAL_CLOSE}`]: (state, action) => {
        return Object.assign({}, state, action);
    }

}

const initialState = {
    type: MODAL_READONLY,
    open: false, 
    TODO: {}
};

export default (state = initialState, action) => {
    const _action = actions[action.type];

    if (_action) {
        return _action(state, action);
    }

    return state;
}