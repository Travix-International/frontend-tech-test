import React, { Component } from 'react';
import FaPlus from 'react-icons/lib/fa/plus';
import './scss/TodoHeader.scss';

class TodoHeader extends Component{
	constructor(props){
		super(props);
	}

	submitForm = (event) => {
		event.preventDefault();
		this.props.add(event.target[0].value);
		event.target[0].value = "";
	}

	render(){
		let today = this.props.today;
		let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		return (
			<div className="todoHeaderContainer">
				<div className="todoHeaderInfo" >{today.getDate() + ' ' + monthNames[today.getMonth()] + ', ' +days[today.getDay()]}</div>
				<div>
					<form id="addForm" onSubmit={this.submitForm}>
						<input id="addToListInput" type="text" placeholder="Add something to do here..." autoComplete="off" required/>
						<button type="submit" id="submitButton"><FaPlus /></button>
					</form>
				</div>
			</div>
		);
	}

}

export default TodoHeader;