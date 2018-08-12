import { call, put, takeLatest, all } from 'redux-saga/effects';
import { GET_ITEMS, GET_ITEM, DELETE_ITEM, CREATE_ITEM, EDIT_ITEM } from '../actions/constants';
import Api from '../../api';
import * as actions from '../actions/actions';

const api = new Api("http://localhost:9001");

// saga for retreiving all items
function* watchGetItems() {
  yield takeLatest(GET_ITEMS, fetchGetItems);
}

function* fetchGetItems() {
  try {
    const data = yield call(api.getItems);
    const body = yield data.json();
    yield put(actions.getItemsSuccess(body.tasks));
  } catch(error) {
    yield put(actions.getItemsFail(error));
  }
}

// saga for single item
function* watchGetItem() {
  yield takeLatest(GET_ITEM, fetchGetItem);
}

function* fetchGetItem(action) {
  try {
    const data = yield call(api.getItem, action.id);
    const body = yield data.json();
    yield put(actions.getItemSuccess(body.task));
  } catch(error) {
    yield put(actions.getItemFail(error));
  }
}

// saga for creating an item
function* watchCreateItem() {
  yield takeLatest(CREATE_ITEM, fetchCreateItem);
}

function* fetchCreateItem(action) {
  try {
    const data = yield call(api.createItem, action.data);
    const body = yield data.json();
    yield put(actions.createItemSuccess(body));
  } catch(error) {
    yield put(actions.createItemFail(error));
  }
}

// saga for editing an item
function* watchEditItem() {
  yield takeLatest(EDIT_ITEM, fetchEditItem);
}

function* fetchEditItem(action) {
  try {
    const data = yield call(api.editItem, action.data);
    const body = yield data.json();
    yield put(actions.editItemSuccess(body));
  } catch(error) {
    yield put(actions.editItemFail(error));
  }
}

// saga for deleting an item
function* watchDeleteItem() {
  yield takeLatest(DELETE_ITEM, fetchDeleteItem);
}

function* fetchDeleteItem(action) {
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