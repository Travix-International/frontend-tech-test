/* eslint-disable */
import * as ActionTypes from '../actions/ActionTypes'

const defaultStore = {
  todosList: [],
}

export default function todosReducer(store = defaultStore, action) {
  switch (action.type) {

    case ActionTypes.FETHC_TODOS_REQUESTED:
      return {
        ...store,
        todosList: [],
      }

    case ActionTypes.FETCH_TODOS_RECEIVED:
      return {
        ...store,
        todosList: action.todosList,
      }

    case ActionTypes.UPDATE_TODO:
      return {
        ...store,
        todosList: store.todosList.map((t) => {
          if (t.id === action.todo.id) {
            return {
              ...action.todo
            }
          }
          return t
        }),
      }

    case ActionTypes.ADD_TODO:
      return {
        ...store,
        todosList: [
          {
            ...action.todo,
            id: Math.random(),
            completed: false,
          },
          ...store.todosList,
        ]
      }

    default:
      return store
  }
}
