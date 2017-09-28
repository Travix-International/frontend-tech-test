import { combineReducers } from 'redux';

const initialState = {
  todos: [],
  lastTaskID: 0
};

const LOAD_TODOS = 'app/LOAD_TODOS';
const loadTasks = todos => ({
  type: LOAD_TODOS,
  todos
});

const ADD_TODO = 'app/ADD_TODO';
const addTask = ({ id, title, description }) => ({
  type: ADD_TODO,
  id,
  title,
  description
});

const UPDATE_TODO = 'app/UPDATE_TODO';
const updateTask = ({ id, title, description }) => ({
  type: UPDATE_TODO,
  id,
  title,
  description
});

const REMOVE_TODO = 'app/REMOVE_TODO';
const removeTask = index => ({
  type: REMOVE_TODO,
  index
});

const todos = (state = initialState.todos, action) => {
  const { id, title, description } = action;
  const tmpState = [...state];
  switch (action.type) {
    case LOAD_TODOS:
      return action.todos;
    case ADD_TODO:
      tmpState.push({ id, title, description });
      return tmpState;
    case UPDATE_TODO:
      tmpState.splice(action.index, 1, { id, title, description });
      return tmpState;
    case REMOVE_TODO:
      tmpState.splice(action.index, 1);
      return tmpState;
    default:
      return state;
  }
};

const reducer = combineReducers({
  todos
});

export {
  addTask,
  updateTask,
  removeTask,
  loadTasks,
  reducer as default,
};
