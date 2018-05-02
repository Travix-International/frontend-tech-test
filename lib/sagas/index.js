import { all } from 'redux-saga/effects';

import { helloSaga } from './taskSaga';

export default function* rootSaga() {
  yield all([
    helloSaga()
  ]);
}