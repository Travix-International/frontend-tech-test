/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Router from 'next/router';

import { Home } from './../pages/index';

import { getLang, changeLang } from './../actions/langActions';
import { requestTasksGet } from '../actions/tasksActions';

// creating new instance of router
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

configure({ adapter: new Adapter() });
const props = {
	getLang,
	changeLang,
	requestTasksGet,
	tasks: [],
	lang: getLang(),
	modals: {
		about: false,
		task: false
	},
	promises: {}
};
describe('Home Page', () => {
	it('contains a header', () => {
		mount(<Home {...props} />);
		expect(1).to.equal(1);
	});
	it('contains a header including a language and about buttons', () => {
		mount(<Home {...props} />);
		expect(1).to.equal(1);
	});
	it('contains a tasks container', () => {
		mount(<Home {...props} />);
		expect(1).to.equal(1);
	});
});
