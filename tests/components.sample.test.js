/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import tasks from './../tasks';

import ToDoList from './../components/toDoList';
import SingleTask from './../components/singleTask';

import { getLang } from './../actions/langActions';

configure({ adapter: new Adapter() });
const props = {
	lang: getLang().payload,
	tasks: tasks.tasks,
	deleteTask: () => Promise.resolve(),
	updateTask: () => Promise.resolve(),
	loadMore: () => Promise.resolve(),
	promises: {
		TASKS_GET_REQUESTED: true
	},
	status: 'error'
};

let wrapper;

describe('Tasks List', () => {
	it('contains all tasks provided in props', (done) => {
		wrapper = mount(<ToDoList {...props} tasks={props.tasks.slice(0, 10)} />);
		expect(wrapper.find('.list-container').children()).to.have.length(props.tasks.slice(0, 10).length);
		done();
	});
	it('contains no list container when no there is no tasks', () => {
		wrapper = mount(<ToDoList {...props} tasks={[]} />);
		expect(wrapper.find('.list-container')).to.have.length(0);
	});
});

describe('Single Task', () => {
	const valueFormatter = (date) => new Date(Array.isArray(date) ? date[0] : date)
		.toDateString()
		.split(' ')
		.slice(1)
		.join(' ');
	beforeEach(() => {
		wrapper = mount(< SingleTask {...props} details={props.tasks[3]} />);
	});

	it('contains update status button', () => {
		expect(wrapper.find('.done-section').length).to.equal(1);
	});

	describe('contains the task details', () => {
		it('has the task details container', () => {
			expect(wrapper.find('.content-section').length).to.equal(1);
		});
		it('contains the right title', () => {
			expect(wrapper.find('.content-section').find('h3').html()).to.equal(`<h3>${props.tasks[3].title}</h3>`);
		});
		it('contains the right formatted date', () => {
			expect(wrapper.find('.content-section').find('small').html()).to.equal(`<small>${valueFormatter(props.tasks[3].date)}</small>`);
		});
		it('contains the right description', () => {
			expect(wrapper.find('.content-section').find('p').html()).to.equal(`<p>${props.tasks[3].description}</p>`);
		});
	});

	describe('delete button behaviour', () => {
		it('has the right title before action', () => {
			expect(wrapper.find('Badge').props().title).to.equal(props.lang.delete);
		});
		it('changes the title correctly after performing a click action', () => {
			const deleteButton = wrapper.find('Badge');
			deleteButton.simulate('click');
			wrapper.setProps({ promises: { ...props.promises, [props.tasks[3].id]: true } });
			// stupid but we need to find the child again so the new props get applied
			expect(wrapper.find('Badge').props().title).to.equal(props.lang.deleting);
		});
	});
});
