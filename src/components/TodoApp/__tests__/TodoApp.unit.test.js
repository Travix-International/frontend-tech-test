import React from 'react';
import TodoApp from '../TodoApp';
import { shallow } from 'enzyme';

test('Component Function getAllTasks gets an array of tasks initially empty.', () => {

	fetch.mockResponses(
		[
			JSON.stringify({tasks: [], total: 0}),
			{ status: 200 }
		],
		[
			JSON.stringify({}),
			{ status: 200 }
		]
	);

	const TodoAppRender = shallow(<TodoApp />);
	expect(TodoAppRender.instance().getAllTasks().length).toBe(0);
	TodoAppRender.instance().addToList("Sample Test Task Goes here.");
	expect(TodoAppRender.instance().getAllTasks().length).toBe(1);
});


test('Component Function addToList adds a new task in the todo-list.', () => {

	fetch.mockResponses(
		[
			JSON.stringify({tasks: [], total: 0}),
			{ status: 200 }
		],
		[
			JSON.stringify({}),
			{ status: 200 }
		]
	);

	const TodoAppRender = shallow(<TodoApp />);
	TodoAppRender.instance().addToList("Sample Test Task Goes here.");
	expect(TodoAppRender.instance().getAllTasks().length).toBe(1);
});

test('Component Function removeFromList removes a specified task from the todo-list.', () => {

	fetch.mockResponses(
		[
			JSON.stringify({tasks: [], total: 0}),
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

	const TodoAppRender = shallow(<TodoApp />);
	TodoAppRender.instance().addToList("Sample Test Task Goes here.");
	expect(TodoAppRender.instance().getAllTasks().length).toBe(1);
	const allTasks = TodoAppRender.instance().getAllTasks();
	const lastId = allTasks[0].id;
	TodoAppRender.instance().removeFromList(lastId);
	expect(TodoAppRender.instance().getAllTasks().length).toBe(0);
});

test('Component Function toggleStatus changes the task status.', () => {

	fetch.mockResponses(
		[
			JSON.stringify({tasks: [], total: 0}),
			{ status: 200 }
		],
		[
			JSON.stringify({}),
			{ status: 200 }
		]
	);

	const TodoAppRender = shallow(<TodoApp />);
	TodoAppRender.instance().addToList("Sample Test Task Goes here.");
	const allTasks = TodoAppRender.instance().getAllTasks();
	const lastId = allTasks[0].id;
	TodoAppRender.instance().toggleStatus(lastId);
	expect(TodoAppRender.instance().getAllTasks()[0].status).toBe(false);

});

test('Component Function updateTaskDetails updates the task details of any specified task.', () => {

	fetch.mockResponses(
		[
			JSON.stringify({tasks: [], total: 0}),
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

	const TodoAppRender = shallow(<TodoApp />);
	TodoAppRender.instance().addToList("Sample Test Task Goes here.");
	const allTasks = TodoAppRender.instance().getAllTasks();
	const lastId = allTasks[0].id;
	TodoAppRender.instance().updateTaskDetails(lastId, "Changed", "New Description");
	expect(TodoAppRender.instance().getAllTasks()[0].title).toBe("Changed");

});