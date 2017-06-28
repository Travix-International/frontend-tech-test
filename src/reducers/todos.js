import {
  UPDATE_TODOS,
  CREATE_TODO
} from '../constants';

export const INITIAL_STATE = {
  list: [],
  isFetching: false
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_TODOS:
      return Object.assign({}, {
        list: action.payload.todos || []
      });

    case CREATE_TODO:
      return Object.assign({}, {
        list: [...state.list, action.payload.todo]
      });

    default:
      return state;
  }
}
