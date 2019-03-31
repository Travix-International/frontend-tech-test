import { combineReducers } from "redux";
import todoItems from "./todoReducer";

const rootReducer = combineReducers({
    todoItems
});

export default rootReducer;
