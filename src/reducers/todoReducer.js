import {
  GET_TASKS,
  GET_TASK,
  DELETE_TASK,
  ADD_TASK,
  UPDATE_TASK
} from "../actions/types";

const initialState = {
  tasks: [],
  task: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };

    case GET_TASK:
      return {
        ...state,
        task: action.payload
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.id !== action.payload
        )
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(
          task =>
            task.id === action.payload.id
              ? (task = action.payload)
              : task
        )
      };

    default:
      return state;
  }
}
