import reducer from './../store/reducers';
import * as actions from '../store/actions/actions';
import * as types from './../store/actions/constants';

const initialState = {
  isFetching: false,
  items: [],
  currentItem: null,
  error: null,
  tag: null,
  currentAction: null
};
const id = 1;
const items = [{
    title: 1,
    id: 1
  },
  {
    title: 2,
    id: 2
  },
];
const editedItem = {
  id: 2,
  title: 3
};
const error = new Error();

describe("Reducers testing", () => {
  test("Should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("GET ITEMS reducer", () => {
    test(`${types.GET_ITEMS}`, () => {
      expect(reducer(initialState, actions.getItems())).toEqual({
        ...initialState,
        isFetching: true,
        tag: undefined
      });
    });

    test(`${types.GET_ITEMS} with tag`, () => {
      const tag = 'todo';
      expect(reducer(initialState, actions.getItems(tag))).toEqual({
        ...initialState,
        isFetching: true,
        tag
      });
    });

    test(`${types.GET_ITEMS_SUCCESS}`, () => {
      expect(reducer(initialState, actions.getItemsSuccess(items))).toEqual({
        ...initialState,
        currentAction: 'ITEMS',
        items
      });
    });

    test(`${types.GET_ITEMS_FAIL}`, () => {
      expect(reducer(initialState, actions.getItemsFail(error))).toEqual({
        ...initialState,
        error
      });
    });
  });

  describe("GET ITEM reducer", () => {
    test(`${types.GET_ITEM}`, () => {
      expect(reducer(initialState, actions.getItem(id))).toEqual({
        ...initialState,
        isFetching: true
      });
    });

    test(`${types.GET_ITEM_SUCCESS}`, () => {
      expect(reducer(initialState, actions.getItemSuccess(items[0]))).toEqual({
        ...initialState,
        currentItem: items[0],
        currentAction: 'ITEM'
      });
    });

    test(`${types.GET_ITEM_FAIL}`, () => {
      expect(reducer(initialState, actions.getItemFail(error))).toEqual({
        ...initialState,
        error
      });
    });
  });

  describe("CREATE ITEM reducer", () => {
    test(`${types.CREATE_ITEM}`, () => {
      expect(reducer(initialState, actions.createItem(items[1]))).toEqual({
        ...initialState,
        isFetching: true
      });
    });

    test(`${types.CREATE_ITEM_SUCCESS}`, () => {
      expect(reducer(initialState, actions.createItemSuccess(items[1]))).toEqual({
        ...initialState,
        currentItem: items[1],
        currentAction: 'CREATE'
      });
    });

    test(`${types.CREATE_ITEM_FAIL}`, () => {
      expect(reducer(initialState, actions.createItemFail(error))).toEqual({
        ...initialState,
        error
      });
    });
  });

  describe("EDIT ITEM reducer", () => {
    test(`${types.EDIT_ITEM}`, () => {
      expect(reducer(initialState, actions.editItem())).toEqual({
        ...initialState,
        isFetching: true
      });
    });

    test(`${types.EDIT_ITEM_SUCCESS}`, () => {
      expect(reducer({ ...initialState,
        items
      }, actions.editItemSuccess(editedItem))).toEqual({
        ...initialState,
        items: [items[0], editedItem],
        currentItem: editedItem,
        currentAction: 'EDIT'
      });
    });

    test(`${types.EDIT_ITEM_FAIL}`, () => {
      expect(reducer(initialState, actions.editItemFail(error))).toEqual({
        ...initialState,
        error
      });
    });
  });

  describe("DELETE ITEM reducer", () => {
    test(`${types.DELETE_ITEM}`, () => {
      expect(reducer(initialState, actions.deleteItem(id))).toEqual({
        ...initialState,
        isFetching: true
      });
    });

    test(`${types.DELETE_ITEM_SUCCESS}`, () => {
      expect(reducer({ ...initialState,
        items
      }, actions.deleteItemSuccess(id))).toEqual({
        ...initialState,
        items: [items[1]],
        currentAction: 'DELETE'
      });
    });
    
    test(`${types.DELETE_ITEM_FAIL}`, () => {
      expect(reducer(initialState, actions.deleteItemFail(error))).toEqual({
        ...initialState,
        error
      });
    });
  });
});