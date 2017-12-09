//Third Party
import { put, takeLatest } from 'redux-saga/effects'

//API
import AddTODO from '../../api/AddTODO'

//Constants
import {
    TODO_ADD,
    TODO_ADD_SUCCEDED,
    TODO_ADD_ERRORED
} from '../actions/TODOAdd'

function* _addTODO (action) {
    try {
        const TODO = yield AddTODO(action.TODO);

        yield put({
            type: TODO_ADD_SUCCEDED,
            TODO: TODO.data.response.data
        });
    } catch (e) {
        yield put({
            type: TODO_ADD_ERRORED,
            message: e.message
        });
    }
}

export function* AddTODOSaga () {
    yield takeLatest(TODO_ADD, _addTODO);
}