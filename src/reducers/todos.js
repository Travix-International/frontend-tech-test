import {
  GET_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  UPDATE_TODOS,
  UPDATE_SORT
} from '../constants';

export const INITIAL_STATE = {
  list: [],
  sort: null,
  isFetching: false
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign({}, state, { isFetching: true });

    case UPDATE_SORT:
      return Object.assign({}, state, {
        sort: action.data.sort || null
      });

    case UPDATE_TODOS:
      return Object.assign({}, state, {
        list: action.data.todos || [],
        isFetching: false
      });

    case ADD_TODO:
      return Object.assign({}, state, {
        list: [...state.list, action.data.todo]
      });

    case EDIT_TODO:
      return Object.assign({}, state, {
        list: state.list.map(l => (
          l.id === action.data.id ? action.data.todo : l
        ))
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        list: state.list.filter(l => l.id !== action.data.id) || []
      });
    case UPDATE_SORT:
      return Object.assign({}, state, {
        sort: action.data.sort || null
      });
    default:
      return state;
  }
}
