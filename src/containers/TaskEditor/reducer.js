import {
  SAVE_TASK_FULFILLED,
  SAVE_TASK_PENDING,
  GET_TASK_FULFILLED,
  GET_TASK_PENDING,
  DELETE_TASK_FULFILLED,
  DELETE_TASK_PENDING,
} from './constants';

const reducer = (
  state = {
    task: { id: -1, title: '', description: '' },
    inProgress: false,
  },
  action
) => {
  switch (action.type) {
    case GET_TASK_PENDING:
      return { ...state, inProgress: true };
    case GET_TASK_FULFILLED:
      return {
        ...state,
        task: action.payload.task,
        inProgress: false,
      };
    case SAVE_TASK_PENDING:
      return { ...state, inProgress: true };
    case SAVE_TASK_FULFILLED:
      return {
        ...state,
        inProgress: false,
        task: action.payload.task,
      };

    case DELETE_TASK_PENDING:
      return { ...state, inProgress: true };
    case DELETE_TASK_FULFILLED:
      return { ...state, inProgress: false };
    default:
      return state;
  }
};

export default reducer;
