import { put, takeEvery, call } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hola Sagas!');
}