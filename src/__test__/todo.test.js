import * as React from 'react';
import TodoList from '../components/TodoList';

describe('TodoList Independent Component unit testing', () => {

	let todoListProps, todoListConfiguration;
	beforeEach(() => {

		todoListConfiguration = {
			searchBar: false, // configure search bar on todo list table
		}
		todoListProps = {
			"tasks": [
				{
					id: 0,
					title: 'herat',
					description: 'dhruv'
				},
				{
					id: 1,
					title: 'dhruv',
					description: 'herat'
				},
				{
					id: 2,
					title: 'test',
					description: 'data'
				}
			],
			selectedTaskId: null
		}

	});

	it('configurable search bar missing', () => {
		const componentWrapper = mount(<TodoList {...todoListProps} todoListConfiguration={todoListConfiguration} />);
		expect(componentWrapper.find('.searchBar').length).toBe(0);
	});


	it('search Functionality', () => {
		const componentWrapper = mount(<TodoList {...todoListProps} todoListConfiguration={todoListConfiguration} />);
		componentWrapper.setState({ searchStr: 'herat' });
		expect(componentWrapper.find('tbody').find('tr').length).toBe(2);
	});

})