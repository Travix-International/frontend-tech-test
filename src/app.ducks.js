import { combineReducers } from 'redux';

const initialState = {
  todos: new Map(),
  lastTaskID: 0
};

const LOAD_TODOS = 'app/LOAD_TODOS';
const loadTasks = todos => ({
  type: LOAD_TODOS,
  todos
});

const ADD_TODO = 'app/ADD_TODO';
const addTask = (title, desctiption) => ({
  type: ADD_TODO,
  title,
  desctiption
});

const todos = (state = initialState.todos, action) => {
  const { title, desctiption } = action;
  const id = state.size + 1;
  switch (action.type) {
    case LOAD_TODOS:
      return new Map(action.todos.map((t, i) => [i, t]));
    case ADD_TODO:
      return new Map(state).set(id, { id, title, desctiption, isDone: false });
    default:
      return state;
  }
};

const reducer = combineReducers({
  todos
});

export {
  addTask,
  loadTasks,
  reducer as default,
};
