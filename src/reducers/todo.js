export const REQ_START = 'todo/REQ_START';
export const REQ_ERROR = 'todo/REQ_ERROR';
export const GET_TODOS_SUCCESS = 'todo/GET_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'todo/ADD_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'todo/DELETE_TODO_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'todo/UPDATE_TODO_SUCCESS';
export const SET_TODO_EDITABLE = 'todo/SET_TODO_EDITABLE';

const initialState = {
  todos: [],
  isFetching: false,
  errorMessage: '',
  editableTodo: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      }

    case REQ_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        todos: action.payload
      }

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false
      }

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false
      }

    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false
      }

    case SET_TODO_EDITABLE:
      return {
        ...state,
        editableTodo: action.payload
      }

    default:
      return state;

  }

}