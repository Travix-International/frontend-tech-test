import http from '../utils/http';

export const constants = {
  LIST_TODOS: 'LIST_TODOS',
  GET_TODO: 'GET_TODO',
  CREATE_TODO: 'CREATE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

export const actions = {
  listTodos: () => {
    return {
      type: constants.ASYNC_CALL,
      payload: {
        promise: http('/task').then((response) => {
          console.log('Response received!');
          // Normalize data here
          return Promise.resolve(response);
        })
      }
    };
  }
};

const pendingReducer = (state) => ({ ...state, isLoading: true });
const rejectedReducer = (state) => ({ ...state, isLoading: false });

const ACTION_HANDLERS = {
  HELLO_WORLD: (state) => {
    return {
      ...state,
      message: 'Redux is fun!'
    };
  },
  // Pending reducers
  LIST_TODOS_PENDING: pendingReducer,
  GET_TODO_PENDING: pendingReducer,
  CREATE_TODO_PENDING: pendingReducer,
  UPDATE_TODO_PENDIG: pendingReducer,
  DELETE_TODO_PENDING: pendingReducer,
  // Fulfilled reducers
  LIST_TODOS_FULFILLED: (state, action) => ({
    ...state,
    isLoading: false
  }),
  // Rejected reducers
  LIST_TODOS_REJECTED: rejectedReducer,
  GET_TODO_REJECTED: rejectedReducer,
  CREATE_TODO_REJECTED: rejectedReducer,
  UPDATE_TODO_REJECTED: rejectedReducer,
  DELETE_TODO_REJECTED: rejectedReducer
};

export const initialState = {
  todoIds: [],
  todos: {},
  isLoading: false
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
