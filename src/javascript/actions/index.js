import actionTypes from '../constants/ActionTypes';

const listTodos = text => ({ type: actionTypes.LIST_TODOS, text });
const listTodo = text => ({ type: actionTypes.LIST_TODO, text });
const createTodo = text => ({ type: actionTypes.CREATE_TODO, text });
const editTodo = (id, text) => ({ type: actionTypes.EDIT_TODO, id, text });
const completeTodo = id => ({ type: actionTypes.COMPLETE_TODO, id });
const deleteTodo = id => ({ type: actionTypes.DELETE_TODO, id });

export default {
  listTodos,
  listTodo,
  createTodo,
  editTodo,
  completeTodo,
  deleteTodo,
};
