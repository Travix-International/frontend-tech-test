import * as React from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control, actions, Errors } from 'react-redux-form';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSubmit(values) {
		console.log(values);
		const somePromise = new Promise((resolve) => {
			setTimeout(() => { resolve({ users: [{ name: 'herat' }, { name: 'yogesh' }, { name: 'ronak' }, values] }); }, 1000);
		});
		this.props.submitFormValue(somePromise);
	}

	render() {
		return (
			<LocalForm model='user'
				onSubmit={(values) => this.handleSubmit(values)}
			>
				<label>Your name?</label>
				<Control.text
					model="user.name"
				// validators={{ len: (val) => val.length > 8 }}
				/>
				<Errors model=".name" messages={{
					len: 'len must be > 8'
				}} />
				<button>Submit!</button>
			</LocalForm>
		)
	}
}

const mapStateToDispatch = (dispatch) => {
	return {
		submitFormValue: (somePromise) => somePromise.then(a => dispatch(actions.change('user', a))),
	}
}

const mapStateToProps = (state, props) => {
	return {

	}
}

export default connect(mapStateToProps, mapStateToDispatch)(App);