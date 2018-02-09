import actionTypes from '../constants/ActionTypes';

const initialState = [
  // {
  //   id: 0,
  //   title: 'Todo title',
  //   description: 'Todo description',
  //   completed: false,
  // },
  // {
  //   id: 1,
  //   title: 'Todo title 1',
  //   description: 'Todo description',
  //   completed: false,
  // },
  // {
  //   id: 2,
  //   title: 'Todo title 2',
  //   description: 'Todo description',
  //   completed: true,
  // },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LIST_TODOS:
      return [...state, ...action.todos];

    case actionTypes.LIST_TODO:
      return state.filter(todo => todo.id === action.id);

    case actionTypes.CREATE_TODO:
      return [...state, ...[action.todo]];

    case actionTypes.EDIT_TODO_TITLE:
      return state.map(todo => (todo.id === action.todo.id ? { ...todo, title: action.todo.title } : todo));

    case actionTypes.EDIT_TODO_DESCRIPTION:
      return state.map(todo =>
        (todo.id === action.todo.id ? { ...todo, description: action.todo.description } : todo));

    case actionTypes.TOGGLE_TODO:
      return state.map(todo => (todo.id === action.todo.id ? { ...todo, completed: action.todo.completed } : todo));

    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.todo.id);

    default:
      return state;
  }
}
