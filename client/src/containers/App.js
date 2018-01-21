import React, {Component} from 'react';
import rootReducer from '../reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TodosApp from './todosApp';

const store = createStore(rootReducer);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<TodosApp />
			</Provider>
		)
	}
}