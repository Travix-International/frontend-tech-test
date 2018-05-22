import { ADD_TASK } from "../constants/action-types";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
