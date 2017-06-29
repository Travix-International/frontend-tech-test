import {
  GET_TODOS,
  UPDATE_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  CREATE_TODO,
  UPDATE_SORT
} from '../constants';

export const INITIAL_STATE = {
  list: [],
  sort: null,
  isFetching: false
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return Object.assign({}, state, {
        sort: action.payload.sort || null
      });

    case GET_TODOS:
      return Object.assign({}, state, { isFetching: true });

    case UPDATE_TODOS:
      return Object.assign({}, state, {
        list: action.payload.todos || [],
        isFetching: false
      });

    case CREATE_TODO:
      return Object.assign({}, state, {
        list: [...state.list, action.payload.todo]
      });

    case EDIT_TODO:
      return Object.assign({}, state, {
        list: state.list.map(l => (
          l.id === action.payload.id ? action.payload.todo : l
        ))
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        list: state.list.filter(l => l.id !== action.payload.id) || []
      });

    default:
      return state;
  }
}
