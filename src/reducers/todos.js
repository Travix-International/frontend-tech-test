import * as types from '../sagas/actionTypes';

// todos reducer
export default function todos(state = {}, action) {
  switch (action.type) {
    case types.TODOS_LIST_SAVE:
      return action.todos;

    case types.TODOS_ADD_SAVE:
      const todo = action.todo;
      todo.id = todo.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, todo];

    case types.TODOS_EDIT_SAVE:
      return state.map(todo =>
        Number(todo.id) === Number(action.todo.id) ? {...action.todo} : todo
      );
      break;

    case types.TODOS_DELETE_SAVE:
      return state.filter(todo =>
        Number(todo.id) !== Number(action.todo.id)
      );

    // initial state
    default:
      return state;
  }
}