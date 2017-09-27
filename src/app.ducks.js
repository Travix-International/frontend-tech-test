import { combineReducers } from 'redux';

const initialState = {
  todos: []
};

const LOAD_TODOS = 'app/LOAD_TODOS';
const loadAction = todos => ({
  type: LOAD_TODOS,
  todos
});

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return action.todos;
    default:
      return state;
  }
};

const reducer = combineReducers({
  todos,
});

export {
  loadAction,
  reducer as default,
};
