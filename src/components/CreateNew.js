import React, { Component } from "react";
import { observer } 				from "mobx-react";
import FontAwesome 					from "react-fontawesome";
import DataWrapper 					from "./DataWrapper";


@DataWrapper
@observer
export default class CreateNew extends Component {
	constructor(props) {
		super(props);
		this.store          = this.props.store;
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.onValueChange  = this.onValueChange.bind(this);
	}
	handleOnSubmit(e){
		e.preventDefault();
		let title =  this.store.appState.newTaskTitle;
		this.store.appState.createNewTask(title);
		this.store.appState.newTaskTitle = '';
	}
	onValueChange(e) {
		let value = e.target.value;
		this.store.appState.newTaskTitle = value;
	}
	render() {
		return (
			<div className="new-todo-wrap">
				<form onSubmit={this.handleOnSubmit} id="new-todo-form">
				  <div className="form-group new-todo-input">
						<input
							className="form-control Todo-Input"
							value={this.store.appState.newTaskTitle}
							onChange={this.onValueChange}
							placeholder="What needs to be done?"
						/>
				  </div>
				  <button type="submit" className="btn btn-default task-add-btn">
						<FontAwesome name='plus-circle' />
					</button>
				</form>

			</div>
		);
	}
}
