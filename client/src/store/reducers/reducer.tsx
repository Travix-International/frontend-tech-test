import * as Actions from "../actions/actions";
import { Reducer, AnyAction } from "redux";
import { Task } from "../../models/Task";

interface State {
  tasks: Task[];
  selectedTask: Task | undefined;
}

let initialState: State = {
  tasks: [],
  selectedTask: undefined
};

export const tasksReducer: Reducer<any> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case Actions.FETCH_TASKS: {
      return { ...state, tasks: [...action.payload] };
    }
    case Actions.ADD_TASK: {
      return { ...state, tasks: [action.payload, ...state.tasks] };
    }
    case Actions.DELETE_TASK: {
      const filtered = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
      return { ...state, tasks: [...filtered] };
    }
    case Actions.UPDATE_TASK: {
      state.tasks.find((task: Task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.category = action.payload.category;
        }
      });
      return { ...state, tasks: [...state.tasks] };
    }
    case Actions.CHANGE_STATUS: {
      state.tasks.find((task: Task) => {
        task.id === action.payload && (task.completed = !task.completed);
      });
      return { ...state, tasks: [...state.tasks] };
    }
    case Actions.CHOOSE_TASK: {
      return { ...state, selectedTask: action.payload };
    }
    case Actions.FILTER_BY_CATEGORY: {
      const filtered = state.tasks.filter(
        (task: Task) => task.category.indexOf(action.payload) > -1
      );
      return { ...state, tasks: [...filtered] };
    }
    default:
      return state;
  }
};
