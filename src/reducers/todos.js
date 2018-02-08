import {
  GET_TODOS, GET_TODO, CREATE_TODO,
  EDIT_TODO, DELETE_TODO, UPDATE_TODOS
} from './../constants';

export const INITIAL_STATE = {
  todos: [],
  todo: {},
  isFetching: false
};

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign({}, state, { isFetching: true });

    case UPDATE_TODOS:
      return Object.assign({}, state, {
        todos: action.payload.todos || [],
        isFetching: false
      });

    case GET_TODO:
      return Object.assign({}, state, {
        todo: action.payload.todo || {},
        isFetching: true
      });

    case CREATE_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload.todo]
      });

    case EDIT_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(l => (
          l.id === action.payload.todo.id ? action.payload.todo : l
        ))
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(l => l.id !== action.payload.id) || []
      });
    default:
      return state
  }
}

export default todos