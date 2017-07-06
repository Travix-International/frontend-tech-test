import { FETCH_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
      break;
    default:
      return state;
  }
}
