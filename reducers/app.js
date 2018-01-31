import {
  SERVER_REQUESTED,
  TODO_ADD,
  TODO_DELETE,
  TODO_FETCH,
  TODO_UPDATE,
} from '../constants';

const INITIAL_STATE = {
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SERVER_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case TODO_ADD:
    case TODO_DELETE:
    case TODO_FETCH:
    case TODO_UPDATE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
