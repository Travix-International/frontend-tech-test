import { SET_ACTIVE_TODO } from '../constants/actions.js';

export function setActiveTodo(todoId) {
  return { type: SET_ACTIVE_TODO, payload: todoId };
}

export function unsetActiveTodo() {
  return { type: SET_ACTIVE_TODO, payload: null };
}