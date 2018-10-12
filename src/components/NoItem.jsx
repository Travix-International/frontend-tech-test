import * as React from 'react';

export default class NoItem extends React.Component {
	render() {
		return (
			<div className="no-item">
				<h3>No Task Found...Please add task</h3>
			</div>
		)
	}
}