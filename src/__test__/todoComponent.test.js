import * as React from 'react';
import { Provider } from 'react-redux';
import ConnectedTodoComponent from '../components/TodoComponent';
import configureStore from 'redux-mock-store'
// import TodoComponent from '../components/TodoComponent';

describe("Integration testing", () => {

	let store, componentWrapper;
	const initialState = {
		todo: {
			error: false,
			loading: false,
			selectedTaskId: 1,
			operation: '',
			operationStatus: false,
			tasks: [
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
			]
		}
	};
	const mockStore = configureStore();

	beforeEach(() => {
		store = mockStore(initialState);
		componentWrapper = mount(
			<Provider store={store}>
				<ConnectedTodoComponent />
			</Provider>
		);
	});

	it("todoComponent Testing Pending", () => {
		console.log(componentWrapper.find('UserList'));
		// console.log(componentWrapper.find('TodoForm').props())		
	});

});