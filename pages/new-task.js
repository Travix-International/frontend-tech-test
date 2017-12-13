import React, { Component } from 'react';

import Loader from '../components/loader';

class NewTask extends Component {
	render() {
		return (
			<div className='new-task-container'>
				<Loader />
			</div>
		);
	}
}

export default NewTask;
