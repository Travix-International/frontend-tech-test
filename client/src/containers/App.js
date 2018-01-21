import React, {Component} from 'react';
import TodosApp from './todosApp';
import {Provider} from 'react-redux';

//const store = createStore(rootReducer);
import store from '../store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<TodosApp />
			</Provider>
		)
	}
}