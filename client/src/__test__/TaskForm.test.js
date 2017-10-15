import React from 'react';
import  Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TaskForm from '../components/TaskForm';

const mockData = {title: 'sampleTitle', description: 'sampleDescription'};


describe('TaskForm', () => {
	it('should render with the initial state and two input field', () => {
		const component = shallow(<TaskForm taskDetails={mockData} />);

		expect(component.state('taskDetails')).toEqual(mockData);

	});

	it('should change the form value and call the passed function', () => {
		const component = shallow(<TaskForm data={mockData} />);

		component.find('input').at(0).simulate('change', {target: {name: 'title', value: 'NewTitle' }});
		component.find('input').at(1).simulate('change', {target: {name: 'description', value: 'NewDescription' }});

		expect(component.state('taskDetails').title).toEqual('NewTitle');
		expect(component.state('taskDetails').description).toEqual('NewDescription');
	});

	it('should call the passed cb function on form submit', () => {
		const mockFunction = jest.fn();
		const component = shallow(<TaskForm data={mockData} onSubmit={mockFunction} />);

		component.find('form').at(0).simulate('submit', { preventDefault() {} });

		expect(mockFunction).toBeCalled();
	});
});
