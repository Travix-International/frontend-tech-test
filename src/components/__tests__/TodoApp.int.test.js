import React from 'react';
import { mount } from 'enzyme';
import TodoApp from '../TodoApp/TodoApp.js'

test('A new todo added is displayed in the list', () => {

    fetch.mockResponses(
		[
			JSON.stringify({tasks: []}),
			{ status: 200 }
		],
		[
			JSON.stringify({}),
			{ status: 200 }
		]
    );
    
    const wrapper = mount(<TodoApp />);
    let input = wrapper.find('input').instance();
    input.value = 'Test Task Title';
    wrapper.find('#addForm').simulate('submit', {
        preventDefault: () => {},
        target: [input]
    });

    expect(wrapper.find('.todoListItemContainer').text()).toBe('Test Task Title');
});


test('Todo is marked as checked on clicking check button', () => {

    fetch.mockResponses(
		[
			JSON.stringify({tasks: []}),
			{ status: 200 }
		],
		[
			JSON.stringify({}),
			{ status: 200 }
		]
    );
    
    const wrapper = mount(<TodoApp />);
    let input = wrapper.find('input').instance();
    input.value = 'Test Task Title';
    wrapper.find('#addForm').simulate('submit', {
        preventDefault: () => {},
        target: [input]
    });
    const taskItemContainer  = wrapper.find('.todoListItemContainer').find('.taskItemContainer');
    taskItemContainer.find('button').simulate('click');
    expect(wrapper.find('.todoListItemContainer').find('.taskItemContainer').hasClass('taskCompleted')).toBe(true);
});

test('Click on delete button deletes the task entry.', () => {

	fetch.mockResponses(
		[
			JSON.stringify({tasks: []}),
			{ status: 200 }
		],
		[
			JSON.stringify({}),
			{ status: 200 }
		],
		[
			JSON.stringify({}),
			{ status: 200 }
		]
	);

    const wrapper = mount(<TodoApp/>);
    let input = wrapper.find('input').instance();
    input.value = 'Test Task Title';
    wrapper.find('#addForm').simulate('submit', {
        preventDefault: () => {},
        target: [input]
    });

    const taskItemContainer  = wrapper.find('.todoListItemContainer').find('.taskItemContainer');
    taskItemContainer.find('#removeButton').hostNodes().simulate('click');
    expect(wrapper.find('.todoListItemContainer').hostNodes().text()).toBe('No Pending Tasks !');
});