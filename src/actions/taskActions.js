import * as types from '../constants/appConstants';


export const getTasks = (tasks) => ({type: types.GET_ALL_TASKS, tasks});
let nextTaskId = 0;
export const addTask = (task) => ({type: types.POST_TASK, id: nextTaskId++, task});
export const taskUpdate = (id, task) => ({type: types.UPDATE_TASK, id });
export const taskDelete = (id) => ({type: types.DELETE_TASK, id});
