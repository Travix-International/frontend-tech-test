import { tasksReducer } from "./reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  tasks: tasksReducer
});
