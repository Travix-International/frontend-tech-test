/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import tasksContainer from './../tasks';
import tasksReducer from './../reducers/tasksReducer';
import { TASKS_GET_SUCCEEDED, TASK_DELETE_SUCCEEDED } from '../actions/actionTypes';

describe('Tasks Reducer', () => {
	it('should add Tasks when passed TASKS_GET_SUCCEEDED', () => {
		const tasksInitialState = tasksReducer(undefined, {});
		// assert initial state comes as expected
		expect(tasksInitialState).to.deep.equal([]);
		const action = {
			type: TASKS_GET_SUCCEEDED,
			payload: {
				tasks: tasksContainer.tasks.slice(0, 10)
			}
		};
		const tasksNewState = tasksReducer(undefined, action);
		expect(tasksNewState.length).to.equal(10);
		expect(tasksNewState[0].title).to.equal(action.payload.tasks[0].title);
	});

	it('should delete Task when passed TASK_DELETE_SUCCEEDED', () => {
		const action = {
			type: TASK_DELETE_SUCCEEDED,
			payload: {
				taskIndex: 2
			}
		};
		const tasksNewState = tasksReducer(tasksContainer.tasks.slice(0, 10), action);
		expect(tasksNewState.length).to.equal(tasksContainer.tasks.slice(0, 10).length - 1);
		const findDeletedTask = tasksNewState.find(task => task.id === tasksContainer.tasks.slice(0, 10)[2].id);
		expect(findDeletedTask).to.equal(undefined);
	});
});
