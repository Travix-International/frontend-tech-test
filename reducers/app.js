import {
  SERVER_REQUESTED,
  TODO_ADD,
  TODO_DELETE,
  TODO_FAILED,
  TODO_FETCH,
  TODO_UPDATE,
} from '../constants';

const INITIAL_STATE = {
  loading: false,
  error: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SERVER_REQUESTED:
      return {
        ...state,
        error: {},
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

    case TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
