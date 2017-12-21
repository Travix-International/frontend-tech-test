/* eslint-disable import/no-extraneous-dependencies */
import { expect, should } from 'chai';

import { TASK_POST_REQUESTED, TASK_DELETE_REQUESTED } from '../actions/actionTypes';
import { requestTaskPost, requestTaskDelete } from './../actions/tasksActions';

should();

describe('Tasks actions', () => {
	const task = {
		title: 'Clean Code',
		date: new Date(),
		description: 'let\'s test that thing'
	};
	describe('requestTaskPost', () => {
		it('should create a request task post action', () => {
			const action = requestTaskPost(task);
			expect(action).to.deep.equal({ type: TASK_POST_REQUESTED, payload: task });
		});
	});
	describe('requestTaskDelete', () => {
		it('should create a request task delete action', () => {
			task.id = '7e7e5e1f-eb43-4a95-ab79-251bb3c1eb03';
			const action = requestTaskDelete(task);
			(action.type).should.equal(TASK_DELETE_REQUESTED);
			(Object.keys(action.payload).length).should.equal(4);
		});
	});
});
