import ADD_TASK from '../constants/action-types';

const addTask = task => ({ type: ADD_TASK, payload: task });

export default addTask;
