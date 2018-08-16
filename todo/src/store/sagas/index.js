import { call, put, takeLatest, all } from 'redux-saga/effects';
import { GET_ITEMS, GET_ITEM, DELETE_ITEM, CREATE_ITEM, EDIT_ITEM } from '../actions/constants';
import Api from '../../api';
import * as actions from '../actions/actions';

const api = new Api("http://localhost:9001");

// saga for retreiving all items
export function* watchGetItems() {
  yield takeLatest(GET_ITEMS, fetchGetItems);
}

export function* fetchGetItems(action) {
  try {
    const data = yield call(api.getItems, action.tag);
    const body = yield call([data, 'json']);
    yield put(actions.getItemsSuccess(body.tasks));
  } catch(error) {
    yield put(actions.getItemsFail(error));
  }
}

// saga for single item
export function* watchGetItem() {
  yield takeLatest(GET_ITEM, fetchGetItem);
}

export function* fetchGetItem(action) {
  try {
    const data = yield call(api.getItem, action.id);
    const body = yield call([data, 'json']);
    yield put(actions.getItemSuccess(body.task));
  } catch(error) {
    yield put(actions.getItemFail(error));
  }
}

// saga for creating an item
export function* watchCreateItem() {
  yield takeLatest(CREATE_ITEM, fetchCreateItem);
}

export function* fetchCreateItem(action) {
  try {
    const data = yield call(api.createItem, action.data);
    const body = yield call([data, 'json']);
    yield put(actions.createItemSuccess(body));
  } catch(error) {
    yield put(actions.createItemFail(error));
  }
}

// saga for editing an item
export function* watchEditItem() {
  yield takeLatest(EDIT_ITEM, fetchEditItem);
}

export function* fetchEditItem(action) {
  try {
    const data = yield call(api.editItem, action.data);
    const body = yield call([data, 'json']);
    yield put(actions.editItemSuccess(body));
  } catch(error) {
    yield put(actions.editItemFail(error));
  }
}

// saga for deleting an item
export function* watchDeleteItem() {
  yield takeLatest(DELETE_ITEM, fetchDeleteItem);
}

export function* fetchDeleteItem(action) {
  try {
    yield call(api.deleteItem, action.id);
    yield put(actions.deleteItemSuccess(action.id));
  } catch(error) {
    yield put(actions.deleteItemFail(error));
  }
}

export default function* rootSaga() {
  yield all([
    watchGetItems(),
    watchGetItem(),
    watchCreateItem(),
    watchEditItem(),
    watchDeleteItem()
  ]);
}