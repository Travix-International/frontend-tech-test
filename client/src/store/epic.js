import { combineEpics } from "redux-observable";
import { asyncEpic } from "redux-async-epic";

export const rootEpic = combineEpics(asyncEpic);
