import {
  SERVER_REQUESTED,
  TODO_ADD,
  TODO_DELETE,
  TODO_FETCH,
  TODO_UPDATE,
} from '../constants';

const INITIAL_STATE = false;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SERVER_REQUESTED:
      return true;

    case TODO_ADD:
    case TODO_DELETE:
    case TODO_FETCH:
    case TODO_UPDATE:
      return false;

    default:
      return state;
  }
}
