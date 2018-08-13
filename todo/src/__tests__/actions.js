import * as actions from '../store/actions/actions';
import * as types from '../store/actions/constants';

describe('Actions tests', () => {
  const data = [
    {item: 1},
    {item: 2}
  ];
  describe('Get items tests', () => {
    test('Should request all items', () => {
      expect(actions.getItems()).toEqual({ type: types.GET_ITEMS });
    });
    test("Get items success", () => {
      expect(actions.getItemsSuccess(data)).toEqual({
        type: types.GET_ITEMS_SUCCESS,
        data
      })
    });
    test('Error get items', () => {
      const error = new Error();
      expect(actions.getItemsFail(error)).toEqual({
        type: types.GET_ITEMS_FAIL,
        error
      });
    });
  });

  describe('Create item tests', () => {
    test('Should request create item', () => {
      expect(actions.createItem(data[0])).toEqual({ type: types.CREATE_ITEM, data: data[0] });
    });
    test("Create item success", () => {
      expect(actions.createItemSuccess(data[0])).toEqual({ type: types.CREATE_ITEM_SUCCESS, data: data[0] });
    });
    test('Error get items', () => {
      const error = new Error();
      expect(actions.createItemFail(error)).toEqual({
        type: types.CREATE_ITEM_FAIL,
        error
      });
    });
  });
});