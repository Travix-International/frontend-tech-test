/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import React from 'react';
import Router from 'next/router';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { expectSaga } from 'redux-saga-test-plan';

import { TASKS_GET_REQUESTED, TASKS_GET_SUCCEEDED } from '../actions/actionTypes';
import { getTasks } from './../sagas/tasksGetSaga';
import tasksContainer from './../tasks';
import StoreConfigure from './../store/index';
import Home from './../pages/index';

// creating new instance of router
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

const Store = StoreConfigure();

describe('Home container', () => {
	it('dispatch the action of TASKS_GET_REQUESTED', () => {
		const component = mount(
			<Provider store={Store}>
				<Home />
			</Provider>
		);
		expect(component).to.be.a('object');
		expect(Store.getState().promises[TASKS_GET_REQUESTED]).to.equal(true);
	});
});

describe('Get tasks Saga', () => {
	it('gets the tasks', () => {
		const tasks = tasksContainer.tasks.slice(0, 10);
		return expectSaga(getTasks, { action: TASKS_GET_REQUESTED, payload: { lastId: 0, count: 10, testURL: 'http://localhost:3000' } })
			.put({
				type: TASKS_GET_SUCCEEDED,
				payload: { tasks },
			})
			.run(false);
	});
});
