import { FETCH_TODOS, NEW_TODO, DELETE_TODO, UPDATE_TODO, EDITING } from '../actions/types';

const initialState = {
  todos: {tasks: []},
  todo: {},
  deletedTodo: {},
  updatedTodo: {},
  isEditing: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
          return {
          ...state,
          todos: action.payload
        };
    case NEW_TODO:
        return {
          ...state,
          todo: action.payload
        };
    case DELETE_TODO:
      return {
        ...state,
        deletedTodo: action.payload
      }
    case UPDATE_TODO:
      const arr = state.todos.tasks;
      arr.forEach(function(item, index) {
        if (item.id === action.payload.task.id) {
          arr[index] = action.payload.task;
        }
      });
      return {
        ...state,
        updatedTodo: action.payload,
        isEditing: false
      }
    case EDITING:
      return {
        ...state,
        updatedTodo: action.payload,
        isEditing: true
      }
    default:
      return state;
  }
}
