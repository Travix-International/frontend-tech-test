import {
  GET_TODOS, GET_TODO, CREATE_TODO,
  EDIT_TODO, DELETE_TODO
} from './../constants';

const INITIAL_STATE = {
  list: [],
  isFetching: false
};

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign({}, state, { isFetching: true });
    case GET_TODO:
      return Object.assign({}, state, { isFetching: true });
    case CREATE_TODO:
      return Object.assign({}, state, {
        list: [...state.list, action.payload.todo]
      });
    case EDIT_TODO:
      return Object.assign({}, state, {
        list: state.list.map(l => (
          l.id === action.payload.id ? action.payload.todo : l
        ))
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        list: state.list.filter(l => l.id !== action.payload.id) || []
      });
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos