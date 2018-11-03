import {
  SAVEFULFILLED,
  SAVEPENDING,
  GETFULFILLED,
  GETPENDING,
  DELETEFULFILLED,
  DELETEPENDING,
} from './TEconstants';

const reducer = (
  state = {
    task: { id: -1, title: '', description: '' },
    inProgress: false,
  },
  action
) => {
  switch (action.type) {
    case GETPENDING:
      return { ...state, inProgress: true };
    case GETFULFILLED:
      return {
        ...state,
        task: action.payload.task,
        inProgress: false,
      };
    case SAVEPENDING:
      return { ...state, inProgress: true };
    case SAVEFULFILLED:
      return {
        ...state,
        inProgress: false,
        task: action.payload.task,
      };

    case DELETEPENDING:
      return { ...state, inProgress: true };
    case DELETEFULFILLED:
      return { ...state, inProgress: false };
    default:
      return state;
  }
};

export default reducer;
