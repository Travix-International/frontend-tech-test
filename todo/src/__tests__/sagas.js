import * as actions from './../store/actions/actions';
import * as types from './../store/actions/constants';
import {
  watchGetItems,
  fetchGetItems,
  watchDeleteItem,
  fetchDeleteItem
} from './../store/sagas';
import { put, call, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import Api from './../api';

const api = new Api("http://localhost:9001");
const action = { tag: 'string', id: 1 };
const str = JSON.stringify;

describe('test sagas', () => {
  describe('test fetch all items generator', () => {
    const watchGenerator = cloneableGenerator(watchGetItems)();
    const fetchGenerator = cloneableGenerator(fetchGetItems)(action);
    expect(str(watchGenerator.next().value)).toEqual(str(takeLatest(types.GET_ITEMS, fetchGetItems)));
    expect(str(fetchGenerator.next().value)).toEqual(str(call(api.getItems, action.tag)));

    test('Get items', () => {
      const clone = fetchGenerator.clone();
      const data = { json: () => {}};
      const body = { tasks: [] };
      expect(str(clone.next(data).value)).toEqual(str(call([data, 'json'])));
      expect(str(clone.next(body).value)).toEqual(str(put(actions.getItemsSuccess(body.tasks))));
    });
  });

  describe('test delete generator', () => {
    const watchGenerator = cloneableGenerator(watchDeleteItem)();
    const fetchGenerator = cloneableGenerator(fetchDeleteItem)(action);
    expect(str(watchGenerator.next().value)).toEqual(str(takeLatest(types.DELETE_ITEM, fetchDeleteItem)));
    
    test('Delete success', () => {
      const clone = fetchGenerator.clone();
      expect(str(clone.next().value)).toEqual(str(call(api.deleteItem, action.id)));
      expect(str(clone.next().value)).toEqual(str(put(actions.deleteItemSuccess(action.id))));
    });
  })
});