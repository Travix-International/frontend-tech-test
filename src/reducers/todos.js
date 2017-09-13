import {
  GET_TODOS,
  UPDATE_TODOS
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
    case UPDATE_TODOS:
      return Object.assign({}, state, {
        list: action.data.todos || [],
        isFetching: false
      });
    default:
      return state;
  }
}
