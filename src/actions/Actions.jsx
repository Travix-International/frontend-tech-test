import * as ActionTypes from "../data/ActionTypes";

export const addToDo = toDoItem => ({
  type: ActionTypes.ADD_TODO,
  ...toDoItem
});

export const getToDo = todoItems => ({
  type: ActionTypes.GET_TODO,
  todoItems
});

export const deleteToDo = id => ({
  type: ActionTypes.DELETE_TODO,
  id
});

export const editTodo = (id, description) => ({
  type: ActionTypes.EDIT_TODO,
  id,
  description
});
