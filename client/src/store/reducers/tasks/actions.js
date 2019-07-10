import { createAction } from "redux-actions";
import { async } from "redux-async-epic";
import api from "./api";

export const types = {
  fetchList: "tasks/fetch-list",
  fetch: "tasks/fetch-one",
  change: "tasks/change",
  create: "tasks/create",
  remove: "tasks/remove",
};

export const fetchList = createAction(types.fetchList, null, () => ({
  [async]: true,
  method: api.fetchList,
}));
