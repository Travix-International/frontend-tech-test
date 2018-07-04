import { SET_ACTIVE_TODO } from '../constants/actions.js';

export default function activeTodo(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_TODO:
      return action.payload;
    default:
      return state;
  }
}