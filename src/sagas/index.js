import { fork, all } from 'redux-saga/effects';
import * as watcher from './watcher';

export function* rootSaga() {
    yield all([
        fork(watcher.watchGetTask),
        fork(watcher.watchSaveTask),
        fork(watcher.watchUpdateTask),
        fork(watcher.watchDeleteTask),
    ]);
}
