/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import { createStore } from 'redux';

import tasksContainer from './../tasks';

import tasksReducer from './../reducers/tasksReducer';
import initialState from './../reducers/initialStates';
import { TASK_DELETE_SUCCEEDED, TASK_UPDATE_SUCCEEDED, TASKS_GET_SUCCEEDED } from '../actions/actionTypes';

describe('Store', () => {
	const store = createStore(tasksReducer, initialState);
	const tasks = tasksContainer.tasks.slice(0, 5);
	const action = {
		type: TASKS_GET_SUCCEEDED,
		payload: {
			tasks
		}
	};
	store.dispatch(action);
	it('Should react to get tasks', () => {
		expect(store.getState().length).to.equal(5);
	});
	it('Should react to delete task', () => {
		const initTasksLength = store.getState().length;
		const deleteAction = {
			type: TASK_DELETE_SUCCEEDED,
			payload: {
				taskIndex: 2
			}
		};
		store.dispatch(deleteAction);
		expect(store.getState().length).to.equal(initTasksLength - 1);
	});
	it('Should react to update task', () => {
		const targetedTask = store.getState()[1];
		const updateAction = {
			type: TASK_UPDATE_SUCCEEDED,
			payload: {
				taskIndex: 1,
				task: {
					...targetedTask,
					done: !targetedTask.done
				}
			}
		};
		store.dispatch(updateAction);
		expect(targetedTask.done).to.equal(!store.getState()[1].done);
	});
});
