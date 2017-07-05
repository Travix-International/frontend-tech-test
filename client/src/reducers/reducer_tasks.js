import { FETCH_TASKS, ADD_TASK } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
      break;
    case ADD_TASK:
      return state;
      break;
    default:
      return state;
  }
}
