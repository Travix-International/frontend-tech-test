import * as React from 'react';
import TodoComponent from './TodoComponent';
import Header from './Header';

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<TodoComponent/>
			</div>
		)
	}
}