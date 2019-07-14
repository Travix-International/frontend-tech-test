import { handleActions, combineActions } from "redux-actions";
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
    [combineActions(
      getSuccessType(types.change),
      types.externalChange
    )]: lib.changeTask,
    [combineActions(
      getSuccessType(types.remove),
      types.externalRemove
    )]: lib.removeTask,
    [combineActions(
      getSuccessType(types.create),
      types.externalCreate
    )]: lib.createTask,
    [types.changeFilter]: lib.changeFilter,
  },
  initialState
);
