import * as actionTypes from './actions';

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASK_ADDED: {
      return {
        tasks: [
          ...state.tasks,
          action.task,
        ],
      };
    }

    case actionTypes.TASK_UPDATED: {
      const tasks = state.tasks.map((task) => {
        if (task.id !== action.task.id) {
          return task;
        }
        return { ...action.tasks };
      });
      return {
        tasks,
      };
    }

    case actionTypes.TASK_DELETED: {
      return {
        tasks: [...state.tasks.filter(task => task.id !== action.id)],
      };
    }

    default:
      return state;
  }
};

export default reducer;
