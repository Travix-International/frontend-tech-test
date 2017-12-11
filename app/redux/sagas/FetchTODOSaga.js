//Third Party
import { put, takeLatest } from 'redux-saga/effects'

//API
import FetchTODO from '../../api/FetchTODO'

//Constants
import {
    TODO_LIST,
    TODO_LIST_SUCCEDED,
    TODO_LIST_ERRORED
} from '../actions/TODOList'

function* _fetchTODO (action) {
    try {
        const TODOS = yield FetchTODO();

        yield put({
            type: TODO_LIST_SUCCEDED,
            TODOS: TODOS.data.response.data
        });
    } catch (e) {
        yield put({
            type: TODO_LIST_ERRORED,
            message: e.message
        });
    }
}

export function* FetchTODOSaga () {
    yield takeLatest(TODO_LIST, _fetchTODO);
}