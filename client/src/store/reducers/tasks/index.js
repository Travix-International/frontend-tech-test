import { handleActions } from "redux-actions";
import { getSuccessType, getPendingType } from "redux-async-epic";
import Immutable from "seamless-immutable";
import { types } from "./actions";

const initialState = Immutable({
  tasks: {},
  filter: "undone",
  uiState: "idle",
});

const mapTasksByID = tasks => {
  return tasks.reduce((acc, task) => {
    task.done = task.done || false;

    acc[task.id] = task;
    return acc;
  }, {});
};

export default handleActions(
  {
    [getPendingType(types.fetchList)]: (state, { payload }) => {
      return state.set("uiState", payload ? "pending" : "success");
    },
    [getSuccessType(types.fetchList)]: (state, action) => {
      return state.set("tasks", mapTasksByID(action.payload));
    },
    [getSuccessType(types.change)]: (state, { payload }) => {
      return state.setIn(["tasks", payload.id], payload);
    },
    [getSuccessType(types.remove)]: (state, { payload }) => {
      return state.update("tasks", tasks => tasks.without(payload));
    },
    [getSuccessType(types.create)]: (state, { payload }) => {
      return state.update("tasks", tasks => tasks.set(payload.id, payload));
    },
    [types.changeFilter]: (state, { payload }) => {
      return state.set("filter", payload);
    },
  },
  initialState
);
