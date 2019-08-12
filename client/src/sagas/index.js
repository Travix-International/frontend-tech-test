import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import toDoSagas from './Todo';
import dashboardSaga from './Dashboard';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        toDoSagas(),
        dashboardSaga()
    ]);
}
