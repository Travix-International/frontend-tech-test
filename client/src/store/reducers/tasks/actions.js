import { createAction } from "redux-actions";
import { async } from "redux-async-epic";
import api from "./api";

export const types = {
  fetchList: "tasks/fetch-list",
  fetch: "tasks/fetch-one",
  change: "tasks/change",
  create: "tasks/create",
  remove: "tasks/remove",
  changeFilter: "tasks/changeFilter",
};

export const fetchList = createAction(types.fetchList, null, () => ({
  [async]: true,
  method: api.fetchList,
}));

export const change = createAction(types.change, null, () => ({
  [async]: true,
  method: ({ payload }) => {
    return api.change(payload);
  },
}));

export const remove = createAction(types.remove, null, () => ({
  [async]: true,
  method: ({ payload }) => {
    return api.remove(payload);
  },
}));

export const create = createAction(types.create, null, () => ({
  [async]: true,
  method: ({ payload }) => {
    return api.create(payload);
  },
}));

export const changeFilter = createAction(types.changeFilter);
