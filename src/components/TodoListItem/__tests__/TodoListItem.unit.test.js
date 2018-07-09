import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoListItem from '../TodoListItem';

test('Given proper props the list item renders properly.', () => {
	const element = {id:0, task:"Sample Task Text Goes Here.", description:"Some Description Goes Here", status: undefined};
	const toggleStatus = () => {};
	const removeFromList = () => {};
	const wrapper = shallow(<TodoListItem key={element.id} itemInfo={element} change={toggleStatus} remove={removeFromList}/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

test('ToggleStatus method provided as a prop is called on checking a task as done.', () => {
	const element = {id:0, task:"Sample Task Text Goes Here.", description:"Some Description Goes Here", status: true};
	const toggleStatus = jest.fn();
	const removeFromList = () => {};
	const wrapper = shallow(<TodoListItem key={element.id} itemInfo={element} change={toggleStatus} remove={removeFromList}/>);
	wrapper.find('#toggleButton').simulate('click');
	expect(toggleStatus.mock.calls.length).toBe(1);
});

test('removeFromList method provided as a prop is called on delete task click.', () => {
	const element = {id:0, task:"Sample Task Text Goes Here.", description:"Some Description Goes Here", status: true};
	const toggleStatus = () => {};
	const removeFromList = jest.fn(); 
	const wrapper = shallow(<TodoListItem key={element.id} itemInfo={element} change={toggleStatus} remove={removeFromList}/>);
	wrapper.find('#removeButton').simulate('click');
	expect(removeFromList.mock.calls.length).toBe(1);
});