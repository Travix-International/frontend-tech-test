import * as actionTypes from './actions';

const initialState = {
  tasks: [],
};

let id = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          action.task,
        ]
      };
    case actionTypes.REMOVE_TASK:
      return {
        tasks: [...state.tasks.filter(task => task.id !== action.id)]
      };
    default:
      return state;
  }
};

export default reducer;