import _ from 'lodash';
import { combineReducers } from 'frint-store';

import {
  TODOS_ADD,
  TODOS_DELETE,
  TODOS_UPDATE,
  RECEIVE_TODOS,
} from '../constants';

const TodoById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.payload.entities.todo || state;
    default:
      return state;
  }
};

const TodoAllIds = (state = [], action) => {
  switch (action.type) {
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
