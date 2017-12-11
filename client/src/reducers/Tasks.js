import {
  TOGGLE_TASK,
  FETCH_TASKS,
  UPDATE_TASK,
  CREATE_TASK,
  DELETE_TASK
} from 'actions/Tasks';

const DEFAULT_STATE = {
  isFetching: true,
  tasks: []
};

export default function Tasks(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case DELETE_TASK:
      return { isFetching: false, tasks: action.payload };
    case CREATE_TASK:
      return { isFetching: false, tasks: [...state.tasks, action.payload] };
    case TOGGLE_TASK:
      return { isFetching: false, tasks: action.payload };
    case UPDATE_TASK:
      return { isFetching: false, tasks: action.payload };
    case FETCH_TASKS:
      return { isFetching: false, tasks: action.payload.tasks};
    default:
      return state;
  }
}
