
import {
  ADD_TODO,
  DECREMENT_COUNTER,
  INITIAL_ITEMS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from '../constants';

const INITIAL_STATE = {
  tasks: null,
  selectedTask:{}

};

export default function Socket(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODOs':
      return Object.assign({}, {
        tasks: action.payload,
      });

    case INITIAL_ITEMS:
      return {
        ...state,
        tasks: action.tasks.reverse(),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case DELETE_TASK:
      return {
        ...state,
        selectedTask:{},
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
      };
    case EDIT_TASK:
      return {
        ...state,
        selectedTask:action.payload,
        tasks: state.tasks.map( (taskItem) => {
          if (taskItem.id === action.payload.id) taskItem = action.payload;
          return taskItem;
        }),
      };

    default:
      return state;
  }
}
