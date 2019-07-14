import { combineEpics } from "redux-observable";
import { asyncEpic } from "redux-async-epic";
import socketEpic from "store/reducers/tasks/epics/socket";

export const rootEpic = combineEpics(asyncEpic, socketEpic);
