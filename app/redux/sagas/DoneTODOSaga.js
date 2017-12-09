//Third Party
import { put, takeLatest } from 'redux-saga/effects'

//API
import DoneTODO from '../../api/DoneTODO'

//Constants
import {
    TODO_DONE,
    TODO_DONE_SUCCEDED,
    TODO_DONE_ERRORED
} from '../actions/TODODone'

function* _doneTODO (action) {
    try {
        const TODOS = yield DoneTODO(action.TODO);

        yield put({
            type: TODO_DONE_SUCCEDED,
            TODOS: TODOS.data.response.data
        });
    } catch (e) {
        yield put({
            type: TODO_DONE_ERRORED,
            message: e.message
        });
    }
}

export function* DoneTODOSaga () {
    yield takeLatest(TODO_DONE, _doneTODO);
}