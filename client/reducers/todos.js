import _ from 'lodash';
import { combineReducers } from 'frint-store';

import {
  REQUEST_TODOS,
  REQUEST_TODO_ADD,
  REQUEST_TODO_DELETE,
  REQUEST_TODO_UPDATE,
  REQUEST_NEXT_TODOS,

  RECEIVE_TODOS,
  RECEIVE_TODO_ADD,
  RECEIVE_TODO_DELETE,
  RECEIVE_TODO_UPDATE,
  RECEIVE_NEXT_TODOS,

  REQUEST_TODOS_ERROR,
  REQUEST_NEXT_TODOS_ERROR,
  REQUEST_TODO_ADD_ERROR,
  REQUEST_TODO_DELETE_ERROR,
  REQUEST_TODO_UPDATE_ERROR,
} from '../constants';

const TodoById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODO_UPDATE:
    case RECEIVE_TODO_ADD:
      return { ...state, [action.payload.id]: action.payload };
    case RECEIVE_TODOS:
      return action.payload.entities.todo || state;
    case RECEIVE_NEXT_TODOS:
      return { ...state, ...action.payload.entities.todo };
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
    case RECEIVE_NEXT_TODOS:
        return state.concat(action.payload.result);
    default:
      return state;
  }
};

const pagination = (state = { total: 1, page: 1, pageSize: 10 }, action) => {
  switch (action.type) {
    case RECEIVE_TODO_DELETE:
      return { ...state, total: state.total-1 }
    case RECEIVE_TODOS:
    case RECEIVE_NEXT_TODOS:
      return action.payload.pagination;
    default: return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
    case REQUEST_TODO_ADD:
    case REQUEST_TODO_DELETE:
    case REQUEST_TODO_UPDATE:
    case REQUEST_NEXT_TODOS:
      return true;
    case RECEIVE_TODOS:
    case RECEIVE_TODO_ADD:
    case RECEIVE_TODO_DELETE:
    case RECEIVE_TODO_UPDATE:
    case RECEIVE_NEXT_TODOS:
    case REQUEST_TODOS_ERROR:
    case REQUEST_TODO_ADD_ERROR:
    case REQUEST_TODO_DELETE_ERROR:
    case REQUEST_TODO_UPDATE_ERROR:
    case REQUEST_NEXT_TODOS_ERROR:
      return false;
    default: return state;
  }
}

const error = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
    case RECEIVE_TODO_ADD:
    case RECEIVE_TODO_DELETE:
    case RECEIVE_TODO_UPDATE:
    case RECEIVE_NEXT_TODOS:
      return '';
    case REQUEST_TODOS_ERROR:
    case REQUEST_TODO_ADD_ERROR:
    case REQUEST_TODO_DELETE_ERROR:
    case REQUEST_TODO_UPDATE_ERROR:
    case REQUEST_NEXT_TODOS_ERROR:
      return action.message;
    default: return state;
  }
}

export default combineReducers({
  byId: TodoById,
  allIds: TodoAllIds,
  pagination,
  loading,
  error,
});
