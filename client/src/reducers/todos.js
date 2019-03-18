import {
  ADD_TODO_SAVED,
  FETCH_TODO_RECEIVED,
  REMOVE_TODO_DELETED,
  TOGGLE_TODO,
  SAVE_TODO_SAVED,
  EDIT_TODO
} from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_SAVED:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          completed: false,
          editable: false
        }
      ];
    case REMOVE_TODO_DELETED:
      return state.filter(element => element.id !== action.id);

    case FETCH_TODO_RECEIVED:
      return state.concat(
        action.data.map(todo => {
          todo.completed = false;
          todo.editable = false;
          return todo;
        })
      );
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case SAVE_TODO_SAVED:
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              editable: !todo.editable,
              title: action.title,
              description: action.description
            }
          : todo
      );
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, editable: !todo.editable } : todo
      );
    default:
      return state;
  }
};

export default todos;
