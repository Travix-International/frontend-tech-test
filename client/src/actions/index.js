import { ADD_TASK } from '../constants/action-types';

export function addTask (payload) {
    return { type: ADD_TASK, payload }
};
