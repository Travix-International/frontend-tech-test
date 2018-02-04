import {
  GET_TODOS,
  REQUEST_PENDING,
  REQUEST_REJECTED,
  REQUEST_FULFILL
} from '../actions/types';

const initialState = {
  todoList: [],
  sending: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PENDING: {
      return {...state, sending: true};
    }
    case REQUEST_FULFILL: {
      return {...state, sending: false};
    }
    case REQUEST_REJECTED: {
      return {...state, sending: false, error: action.payload};
    }
    case GET_TODOS: {
      return {...state, sending: false, todoList: action.payload.tasks};
    }
    default:
      return state;
  }
}
