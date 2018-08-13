import reducer from './../store/reducers';
import * as actions from '../store/actions/actions';
import * as types from './../store/actions/constants';

const initialState = {
  isFetching: false,
  items: [],
  currentItem: null,
  error: null
};

describe("Reducers testing", () => {
  test("Should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
  describe("GET ITEMS reducer", () => {
    test(`${types.GET_ITEMS}`, () => {
      expect(reducer(initialState, actions.getItems())).toEqual({
        ...initialState,
        isFetching: true
      });
    });
    test(`${types.GET_ITEMS_SUCCESS}`, () => {
      const items = [
        { title: 1 },
        { title: 2 },
      ];
      expect(reducer(initialState, actions.getItemsSuccess(items))).toEqual({
        ...initialState,
        items
      });
    });
    test(`${types.GET_ITEMS_FAIL}`, () => {
      const error = new Error();
      expect(reducer(initialState, actions.getItemsFail(error))).toEqual({
        ...initialState,
        error
      });
    });
  });
});