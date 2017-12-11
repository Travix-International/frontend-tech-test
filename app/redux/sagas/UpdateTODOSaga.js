//Third Party
import { put, takeLatest } from 'redux-saga/effects'

//API
import UpdateTODO from '../../api/UpdateTODO'

//Constants
import { MODAL_CLOSE } from '../actions/ModalClose'
import {
    TODO_UPDATE,
    TODO_UPDATE_SUCCEDED,
    TODO_UPDATE_ERRORED
} from '../actions/TODOUpdate'

function* _updateTODO (action) {
    try {
        const TODOS = yield UpdateTODO(action.TODO);

        yield put({
            type: MODAL_CLOSE
        });

        yield put({
            type: TODO_UPDATE_SUCCEDED,
            TODOS: TODOS.data.response.data
        });
    } catch (e) {
        yield put({
            type: TODO_UPDATE_ERRORED,
            message: e.message
        });
    }
}

export function* UpdateTODOSaga () {
    yield takeLatest(TODO_UPDATE, _updateTODO);
}