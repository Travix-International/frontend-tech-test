import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaCheck from 'react-icons/lib/fa/check';
import FaMinus from 'react-icons/lib/fa/minus-circle';
import FaUndo from 'react-icons/lib/fa/rotate-left';
import './scss/TodoListItem.scss';


class TodoListItem extends Component{

	constructor(props){
		super(props);
	}

	render(){
		let status = this.props.itemInfo.status;
		if(status == undefined){
			status = true;
		}
		let taskClasses = status ? "taskItemContainer" : "taskItemContainer taskCompleted"
		return (
		<div className={taskClasses}>
			<button className="checkButton" id="toggleButton" onClick={() => this.props.change(this.props.itemInfo.id)}><FaCheck className="checkIcon"/><FaUndo className="undoIcon"/></button>
			<div className="taskTextContainer"><Link to={"/task/" + this.props.itemInfo.id} >{this.props.itemInfo.title}</Link></div>
			<FaMinus className="removeButton" id="removeButton" onClick={() => this.props.remove(this.props.itemInfo.id)} />
		</div>
		);
	}
}

export default TodoListItem;