import { handleActions } from "redux-actions";
import { getSuccessType } from "redux-async-epic";
import Immutable from "seamless-immutable";
import { types } from "./actions";
import lib from "./lib";

export const initialState = Immutable({
  tasks: {},
  filter: "undone",
});

export default handleActions(
  {
    [getSuccessType(types.fetchList)]: lib.fulfillList,
    [getSuccessType(types.change)]: lib.changeTask,
    [getSuccessType(types.remove)]: lib.removeTask,
    [getSuccessType(types.create)]: lib.createTask,
    [types.changeFilter]: lib.changeFilter,
  },
  initialState
);
