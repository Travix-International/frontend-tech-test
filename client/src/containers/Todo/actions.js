import { ActionTypes } from './constants'

export const addTodoRequest = createdTodo => ({
  type: ActionTypes.ADD_TODO_REQUEST,
  payload: {
    ...createdTodo
  }
})

export const deleteTodoRequest = deletedTodo => ({
  type: ActionTypes.DELETE_TODO_REQUEST,
  payload: {
    ...deletedTodo
  }
})

export const editTodoRequest = updatedTodo => ({
  type: ActionTypes.EDIT_TODO_REQUEST,
  payload: {
    ...updatedTodo
  }
})

export const toggleEditMode = todo => ({
  type: ActionTypes.TOGGLE_EDIT_MODE,
  payload: {
    ...todo
  }
})

export const resetToggleMode = () => ({
  type: ActionTypes.RESET_TOGGLE_MODE
})

export const fetchTodoListRequest = ({ selected }) => ({
  type: ActionTypes.FETCH_TODO_LIST_REQUEST,
  payload: {
    page: selected
  }
})

export const fetchTodoListSuccess = (todoList, pages) => ({
  type: ActionTypes.FETCH_TODO_LIST_SUCCESS,
  payload: {
    todoList,
    pages
  }
})

export const fetchTodoListFailure = () => ({
  type: ActionTypes.FETCH_TODO_LIST_FAILURE
})
