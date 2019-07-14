import { createAction } from "redux-actions";
import { async } from "redux-async-epic";
import api from "./api";

export const types = {
  fetchList: "tasks/fetch-list",
  fetch: "tasks/fetch-one",
  change: "tasks/change",
  create: "tasks/create",
  remove: "tasks/remove",
  changeFilter: "tasks/change-filter",

  socketConnect: "tasks/socket-connect",
  socketDisconnect: "tasks/socket-disconnect",
  externalCreate: "tasks/external-create",
  externalChange: "tasks/external-change",
  externalRemove: "tasks/external-remove",
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

export const socketConnect = createAction(types.socketConnect);
export const socketDisconnect = createAction(types.socketDisconnect);
export const externalCreate = createAction(types.externalCreate);
export const externalChange = createAction(types.externalChange);
export const externalRemove = createAction(types.externalRemove);
