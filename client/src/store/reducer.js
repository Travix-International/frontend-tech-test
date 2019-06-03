import * as actionTypes from './actionTypes';

const initialState = {
  tasks: [],
  selectedTask: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_TASKS: {
      return {
        ...state,
        tasks: action.tasks.map(task => task),
      };
    }

    case actionTypes.TASK_ADDED: {
      return {
        ...state,
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
        return { ...action.task };
      });
      return {
        ...state,
        tasks,
      };
    }

    case actionTypes.TASK_DELETED: {
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== action.id)],
      };
    }

    case actionTypes.SET_SELECT_TASK: {
      return {
        ...state,
        selectedTask: action.selectedTask,
      };
    }

    default:
      return state;
  }
};

export default reducer;
