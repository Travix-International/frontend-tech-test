import TodosService from '../services/todosservice.js';
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_TODOS
} from '../constants/actions.js';

export function addTodo(todo) {
  return dispatch => (
    TodosService.addTodo(todo).then(newTask => {
      dispatch({
        type: ADD_TODO,
        payload: newTask
      });
    })
  );
}

export function updateTodo(todo) {
  return dispatch => (
    TodosService.updateTodo(todo).then(updatedTask => {
      dispatch({ type: UPDATE_TODO, payload: updatedTask });
    })
  );
}

export function deleteTodo(todoId) {
  return dispatch => (
    TodosService.deleteTodo(todoId).then(deletedTaskId => {
      dispatch({ type: DELETE_TODO, payload: deletedTaskId });
    })
  );
}

export function getTodos() {
  return dispatch => (
    TodosService.getTodos().then(tasks => {
      dispatch({ type: GET_TODOS, payload: tasks });
    })
  );
}