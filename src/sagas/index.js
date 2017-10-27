import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { todosFetchList, todosAddEdit, todosDelete } from "./todos";
import * as types from './actionTypes';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, types.TODOS_FETCH_LIST, todosFetchList),
    fork(takeLatest, types.TODOS_ADD_EDIT, todosAddEdit),
    fork(takeLatest, types.TODOS_DELETE, todosDelete),
  ];
}
