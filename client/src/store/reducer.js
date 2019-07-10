import { combineReducers } from "redux";
import tasks from "store/reducers/tasks";

export const rootReducer = combineReducers({ tasks });
