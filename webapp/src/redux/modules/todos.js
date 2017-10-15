import _ from 'lodash';
import http from '../utils/http';

export const constants = {
  LIST_TODOS: 'LIST_TODOS',
  GET_TODO: 'GET_TODO',
  CREATE_TODO: 'CREATE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

const rejectPromise = (response) => {
  console.error(response, 'Bad response received'); // eslint-disable-line no-console
  const { body } = response;
  return Promise.reject(body || response);
};

export const actions = {
  listTodos: () => {
    return {
      type: constants.LIST_TODOS,
      payload: {
        promise: http.get('/task').then((response) => {
          const { statusCode, body } = response;

          if(statusCode === 200 && body && body.tasks) {
            // Normalizing
            const todoIds = [];
            const todos = {};

            response.body.tasks.forEach((task) => {
              todos[task.id] = task;
              todoIds.push(task.id);
            });

            return Promise.resolve({ todoIds, todos });
          } else {
            return rejectPromise(response);
          }
        })
      }
    };
  },
  createTodo: (title, description) => {
    return {
      type: constants.CREATE_TODO,
      payload: {
        promise: http.post('/task', { title, description }).then((response) => {
          const { statusCode, body } = response;
          if(statusCode === 201 && body && body.task) {
            return Promise.resolve(body);
          } else {
            return rejectPromise(response);
          }
        })
      }
    };
  },
  updateTodo: (id, todo) => {
    return {
      type: constants.UPDATE_TODO,
      payload: {
        promise: http.put(`/task/${id}`, todo).then((response) => {
          const { statusCode } = response;

          if(statusCode === 204) {
            todo.id = id;
            return Promise.resolve(todo);
          } else {
            return rejectPromise(response);
          }
        })
      }
    };
  },
  deleteTodo: (id) => {
    return {
      type: constants.DELETE_TODO,
      payload: {
        promise: http.delete(`/task/${id}`).then((response) => {
          const { statusCode } = response;

          if(statusCode === 200) {
            return Promise.resolve({ id });
          } else {
            return rejectPromise(response);
          }
        })
      }
    };
  }
};

const pendingReducer = (state) => ({ ...state, isLoading: true });

const rejectedReducer = (state, action) => {
  const error = action.payload;
  return {
    ...state,
    error,
    isLoading: false
  };
};

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
  LIST_TODOS_FULFILLED: (state, action) => {
    const { payload } = action;

    return {
      ...state,
      todoIds: payload.todoIds,
      todos: payload.todos,
      error: null,
      isLoading: false
    };
  },
  CREATE_TODO_FULFILLED: (state, action) => {
    const { payload } = action;
    const newTodo = {};
    newTodo[payload.task.id] = payload.task;

    return {
      todoIds: [
        ...state.todoIds,
        payload.task.id
      ],
      todos: {
        ...state.todos,
        ...newTodo
      },
      error: null,
      isLoading: false
    };
  },
  UPDATE_TODO_FULFILLED: (state, action) => {
    const { payload } = action;
    const todos = _.cloneDeep(state.todos);

    todos[payload.id] = {
      ...todos[payload.id],
      ...payload
    };

    return {
      ...state,
      todos,
      error: null,
      isLoading: false
    };
  },
  DELETE_TODO_FULFILLED: (state, action) => {
    const { payload } = action;
    const todoIds = state.todoIds.filter((id) => id !== payload.id);
    const todos = _.cloneDeep(state.todos);

    delete todos[payload.id];
    return {
      ...state,
      todoIds,
      todos,
      error: null,
      isLoading: false
    };
  },
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
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
