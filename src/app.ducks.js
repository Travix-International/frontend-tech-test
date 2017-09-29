import { combineReducers } from 'redux';

const initialState = {
  todos: [],
  loading: true,
  selectedTodoIndex: null,
  deletedTodoIndex: null,
  todoDetail: null
};

const LOAD_TODOS = 'app/LOAD_TODOS';
const loadTodos = todos => ({
  type: LOAD_TODOS,
  todos
});

const FINISH_LOAD_TODOS = 'app/FINISH_LOAD_TODOS';
const finishLoadTodos = {
  type: FINISH_LOAD_TODOS
};

const OPEN_ADD_DETAIL = 'app/OPEN_ADD_DIALOG';
const openAddDetail = {
  type: OPEN_ADD_DETAIL
};
const OPEN_UPDATE_DETAIL = 'app/OPEN_UPDATE_DETAIL';
const openUpdateDetail = {
  type: OPEN_UPDATE_DETAIL
};
const CLEAR_DETAIL = 'app/CLEAR_DETAIL';
const clearOpenedDetail = {
  type: CLEAR_DETAIL
};

const ADD_TODO = 'app/ADD_TODO';
const addTodo = ({ id, title, description }) => ({
  type: ADD_TODO,
  id,
  title,
  description
});

const UPDATE_TODO = 'app/UPDATE_TODO';
const updateTodo = (index, { id, title, description }) => ({
  type: UPDATE_TODO,
  index,
  id,
  title,
  description
});

const REMOVE_TODO = 'app/REMOVE_TODO';
const removeTodo = index => ({
  type: REMOVE_TODO,
  index
});

const SELECT_TODO = 'app/SELECT_TODO';
const selectTodoIndex = index => ({
  type: SELECT_TODO,
  index
});

const UNSELECT_TODO = 'app/UNSELECT_TODO';
const unselectTodoIndex = {
  type: UNSELECT_TODO
};

const CLEAR_DELETED_TODO = 'app/CLEAR_DELETED_TODO';
const clearDeletedTodo = {
  type: CLEAR_DELETED_TODO
};

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

const loading = (state = initialState.loading, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return true;
    case FINISH_LOAD_TODOS:
      return false;
    default:
      return state;
  }
};

const selectedTodoIndex = (state = initialState.selectedTodoIndex, { type, index }) => {
  switch (type) {
    case SELECT_TODO:
      return index;
    case CLEAR_DETAIL:
    case UNSELECT_TODO:
      return null;
    default:
      return state;
  }
};

const deletedTodoIndex = (state = initialState.deletedTodoIndex, { type, index }) => {
  switch (type) {
    case REMOVE_TODO:
      return index;
    case CLEAR_DELETED_TODO:
      return null;
    default:
      return state;
  }
};

const todoDetail = (state = initialState.todoDetail, { type }) => {
  switch (type) {
    case OPEN_ADD_DETAIL:
    case OPEN_UPDATE_DETAIL:
      return true;
    case CLEAR_DETAIL:
      return null;
    default:
      return state;
  }
};

const reducer = combineReducers({
  todos,
  loading,
  selectedTodoIndex,
  deletedTodoIndex,
  todoDetail
});

export {
  addTodo,
  openAddDetail,
  openUpdateDetail,
  clearOpenedDetail,
  updateTodo,
  removeTodo,
  clearDeletedTodo,
  loadTodos,
  finishLoadTodos,
  selectTodoIndex,
  unselectTodoIndex,
  reducer as default,
};
