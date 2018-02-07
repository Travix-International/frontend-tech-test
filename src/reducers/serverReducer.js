import { handleActions } from 'redux-actions';

import todoListActions from '../actions/todoListActions';

const defaultState = {
  isAwaitingServer: false,
  serverError: null,
  hasSaved: false
};

const serverReducer = handleActions({
  [todoListActions.addTodo]: state => {
    return {
      ...state,
      isAwaitingServer: true,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.addTodoFail]: (state, action) => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: action.payload.error,
      hasSaved: false
    };
  },
  [todoListActions.addTodoSuccess]: state => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: null,
      hasSaved: true
    };
  },
  [todoListActions.deleteTodo]: state => {
    return {
      ...state,
      isAwaitingServer: true,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.deleteTodoFail]: (state, action) => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: action.payload.error,
      hasSaved: false
    };
  },
  [todoListActions.deleteTodoSuccess]: state => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.fetchTodos]: state => {
    return {
      ...state,
      isAwaitingServer: true,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.fetchTodosFail]: (state, action) => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: action.payload.error,
      hasSaved: false
    };
  },
  [todoListActions.fetchTodosSuccess]: state => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.toggleTodo]: state => {
    return {
      ...state,
      isAwaitingServer: true,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.toggleTodoFail]: (state, action) => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: action.payload.error,
      hasSaved: false
    };
  },
  [todoListActions.toggleTodoSuccess]: state => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.updateTodo]: state => {
    return {
      ...state,
      isAwaitingServer: true,
      serverError: null,
      hasSaved: false
    };
  },
  [todoListActions.updateTodoFail]: (state, action) => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: action.payload.error,
      hasSaved: false
    };
  },
  [todoListActions.updateTodoSuccess]: state => {
    return {
      ...state,
      isAwaitingServer: false,
      serverError: null,
      hasSaved: false
    };
  }
}, defaultState);

export default serverReducer;
