import { createAction } from 'redux-actions';
import { FETCH_TASKS } from '../actionTypes';
import Tasks from '../../../../services/Tasks';

const tasksService = new Tasks();

export const fetchTasks = createAction(FETCH_TASKS, () => tasksService.fetchTasks());
