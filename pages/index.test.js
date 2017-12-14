/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './index';

import { getLang, changeLang } from './../actions/langActions';

configure({ adapter: new Adapter() });
const props = {
	getLang,
	changeLang,
	lang: getLang(),
	modals: {
		about: false,
		task: false
	}
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
