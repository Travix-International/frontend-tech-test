import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const FETCH_TASKS = 'travix/front-end-test/tasks/FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = `${FETCH_TASKS}_${FULFILLED}`;
export const FETCH_TASKS_ERROR = `${FETCH_TASKS}_${REJECTED}`;
export const FETCH_TASKS_LOADING = `${FETCH_TASKS}_${PENDING}`;
