import * as types from '../actions/constants';

const initialState = {
  isFetching: false,
  items: [],
  currentItem: null,
  error: null,
  tag: null,
  currentAction: null
};
let items = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS:
      return {
        ...state,
        isFetching: true,
        currentItem: null,
        tag: action.tag,
        currentAction: null
      };
    case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
        currentAction: 'ITEMS'
      };
    case types.GET_ITEMS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case types.GET_ITEM:
      return {
        ...state,
        isFetching: true,
        currentAction: null
      };
    case types.GET_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentItem: action.data,
        currentAction: 'ITEM'
      };
    case types.GET_ITEM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case types.CREATE_ITEM:
      return {
        ...state,
        isFetching: true,
        currentAction: null
      };
    case types.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentItem: action.data,
        currentAction: 'CREATE'
      };
    case types.CREATE_ITEM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case types.EDIT_ITEM:
      return {
        ...state,
        isFetching: true,
        currentAction: null
      };
    case types.EDIT_ITEM_SUCCESS:
      const data = state.items.map(val => {
        if (val.id === action.data.id) val = action.data;
        return val;
      });
      return {
        ...state,
        isFetching: false,
        currentItem: action.data,
        items: data,
        currentAction: 'EDIT'
      };
    case types.EDIT_ITEM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case types.DELETE_ITEM:
      return {
        ...state,
        isFetching: true,
        currentAction: null
      };
    case types.DELETE_ITEM_SUCCESS:
      items = state.items.filter(val => val.id !== action.id);
      return {
        ...state,
        isFetching: false,
        items,
        currentItem: null,
        currentAction: 'DELETE'
      };
    case types.DELETE_ITEM_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;