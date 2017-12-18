/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import tasks from './../tasks';

import ToDoList from './../components/toDoList';
import SingleTask from './../components/singleTask';

import { getLang } from './../actions/langActions';
import { deleteTask, updateTask, loadMore } from '../actions/tasksActions';

configure({ adapter: new Adapter() });
const props = {
	lang: getLang(),
	tasks: tasks.tasks,
	deleteTask,
	updateTask,
	loadMore,
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
	beforeEach(() => {
		wrapper = mount(< SingleTask {...props} details={props.tasks[3]} />);
	});
	it('contains update status button', () => {
		expect(wrapper.find('.done-section')).to.exist;
	});
	it('contains a delete task button', () => {
		expect(wrapper.find('.content-section')).to.exist;
	});
});
