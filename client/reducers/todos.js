import _ from 'lodash';
import { combineReducers } from 'frint-store';

import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
  RECEIVE_TODOS,
  RECEIVE_TODO_ADD,
  RECEIVE_TODO_DELETE,
  RECEIVE_TODO_UPDATE,
} from '../constants';

const TodoById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODO_UPDATE:
    case RECEIVE_TODO_ADD:
      return { ...state, [action.payload.id]: action.payload };
    case RECEIVE_TODOS:
      return action.payload.entities.todo || state;
    default:
      return state;
  }
};

const TodoAllIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TODO_DELETE:
      return state.filter(id => id !== action.id);
    case RECEIVE_TODO_ADD:
      return [action.payload.id, ...state];
    case RECEIVE_TODOS:
      return action.payload.result;
    default:
      return state;
  }
};

export default combineReducers({
  byId: TodoById,
  allIds: TodoAllIds,
});
