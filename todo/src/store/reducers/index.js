import * as types from '../actions/constants';

const initialState = {
  isFetching: false,
  items: [],
  currentItem: null,
  error: null
};
let items = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS:
      return { ...state, isFetching: true };
    case types.GET_ITEMS_SUCCESS:
      return { ...state, isFetching: false, items: action.data}
    case types.GET_ITEMS_FAIL:
      return { ...state, isFetching: false, error: action.error}

    case types.GET_ITEM:
      return { ...state, isFetching: true };
    case types.GET_ITEM_SUCCESS:
      return { ...state, isFetching: false, currentItem: action.data}
    case types.GET_ITEM_FAIL:
      return { ...state, isFetching: false, error: action.error}

    case types.CREATE_ITEM:
      return { ...state, isFetching: true };
    case types.CREATE_ITEM_SUCCESS:
      return { ...state, isFetching: false, currentItem: action.data}
    case types.CREATE_ITEM_FAIL:
      return { ...state, isFetching: false, error: action.error}

    case types.EDIT_ITEM:
      return { ...state, isFetching: true };
    case types.EDIT_ITEM_SUCCESS:
      items = state.items.map(val => {
        if (val.id === action.id) val = action.data;
        return val;
      }); 
      return { ...state, isFetching: false, currentItem: action.data, items}
    case types.EDIT_ITEM_FAIL:
      return { ...state, isFetching: false, error: action.error}

    case types.DELETE_ITEM:
      return { ...state, isFetching: true };
    case types.DELETE_ITEM_SUCCESS:
      items = state.items.filter(val => val.id !== action.id);
      return { ...state, isFetching: false, items}
    case types.DELETE_ITEM_FAIL:
      return { ...state, isFetching: false, error: action.error}
    default:
      return state;
  }
};

export default reducer;