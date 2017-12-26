import { combineReducers } from 'redux';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  RECEIVE_TODOS,
  REQUEST_TODOS,
  SEARCH_TODOS
} from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  items: [],
  query: '',
  visibleItems: []
};

function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.todos
      });

    case REQUEST_TODOS:
      return Object.assign({}, state, { isFetching: true });

    case ADD_TODO:
      return Object.assign({}, state, { items: [...state.items, action.item] });

    case EDIT_TODO:
      return Object.assign({}, state, {
        items: state.items.map(i => (i.id === action.item.id ? action.item : i))
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        items: state.items.filter(i => i.id !== action.id) || []
      });

    case SEARCH_TODOS:
      return Object.assign({}, state, {
        query: action.query,
        visibleItems: state.items.filter(i => i.title.match(action.query))
      });

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
