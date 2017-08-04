/* eslint-disable */
import * as ActionTypes from './ActionTypes'


export function requestTodos() {
  return {
    type: ActionTypes.FETHC_TODOS_REQUESTED,
  }
}

export function receivedTodos(todosList) {
  return {
    type: ActionTypes.FETCH_TODOS_RECEIVED,
    todosList
  }
}

export function faildTodos(err) {
  return {
    type: ActionTypes.FETCH_TODOS_FAILD,
    err
  }
}

export function updateTodo(todo) {
  return {
    type: ActionTypes.UPDATE_TODO,
    todo
  }
}

export function addTodo(todo) {
  return {
    type: ActionTypes.ADD_TODO,
    todo
  }
}
