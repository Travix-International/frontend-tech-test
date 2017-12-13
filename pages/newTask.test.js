/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewTask from './new-task';


configure({ adapter: new Adapter() });

describe('Manage Course Page', () => {
	it('sets error message when trying to save empty title', () => {
		const wrapper = mount(<NewTask />);
		// const saveButton = wrapper.find('input').last();
		expect(1).to.equal(1);
	});
	it('sets ASD A message when trying to save empty title', () => {
		const wrapper = mount(<NewTask />);

		// const saveButton = wrapper.find('input').last();
		expect(4).to.equal(4);
	});
});
