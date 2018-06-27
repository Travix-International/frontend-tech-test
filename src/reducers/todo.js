import { GET_TODOS, GET_ONE_TASK, ADD_TASK, EDIT_TASK, DELETE_TASK } from "../constants/ActionTypes";

const INITIAL_STATE = {
	"tasks": []
}

export default function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_TODOS: 
    return state = action.payload;
  case GET_ONE_TASK:
    return state = action.payload;
  case ADD_TASK:
    return state = action.payload;
  case EDIT_TASK:
    return state = action.payload;
  case DELETE_TASK:
    return state = action.payload;
  }
  return state;
}