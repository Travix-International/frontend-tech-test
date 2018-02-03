import actionTypes from '../constants/ActionTypes';

const listTodos = () => ({ type: actionTypes.LIST_TODOS });
const listTodo = id => ({ type: actionTypes.LIST_TODO, id });
const createTodo = (title, description) => ({ type: actionTypes.CREATE_TODO, title, description });
const editTodoTitle = (id, title) => ({
  type: actionTypes.EDIT_TODO_TITLE,
  id,
  title,
});
const editTodoDescription = (id, description) => ({
  type: actionTypes.EDIT_TODO_DESCRIPTION,
  id,
  description,
});
const toggleTodo = id => ({ type: actionTypes.TOGGLE_TODO, id });
const deleteTodo = id => ({ type: actionTypes.DELETE_TODO, id });

export default {
  listTodos,
  listTodo,
  createTodo,
  editTodoTitle,
  editTodoDescription,
  toggleTodo,
  deleteTodo,
};
