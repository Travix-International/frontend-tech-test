/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import request from 'request';
import tasksContainer from './../tasks';

const baseUrl = 'http://localhost:3000';

describe('server', function () {
	this.timeout(15000);
	it('gets the right range of tasks', done => {
		request.get({ url: `${baseUrl}/tasks/0/5` }, (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			const tasks = JSON.parse(body).tasks;
			expect(tasks.length).to.equal(5);
			done();
		});
	});
	it('updates the task content and status', done => {
		const taskToUpdate = tasksContainer.tasks[30];
		const id = taskToUpdate.id;
		const newTaskContent = {
			title: 'new title for test III',
		};
		request.put({ url: `${baseUrl}/task/update/${id}`, json: true, body: newTaskContent }, (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(body.task.title).to.equal(newTaskContent.title);
			done();
		});
	});
});
