import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Match, Link } 			from "react-router-dom";
import Progress 						from 'react-progressbar';
import DataWrapper 					from "./DataWrapper";
import TodoItem 						from "./TodoItem";

@DataWrapper
@observer
export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
		this.handleDelete     = this.handleDelete.bind(this);
		this.toggleComplete 	= this.toggleComplete.bind(this);
		this.handleChangeTitle 	= this.handleChangeTitle.bind(this);
		this.handleScrollable 	= this.handleScrollable.bind(this);
		// handle Todos wrap style
		this.state = {
			scrollable: false
		}
	}
	handleDelete(id){
		this.store.appState.deleteTask(id);
	}
	toggleComplete(task){
		task.completed = !task.completed;
		this.store.appState.completehTask(task);
	}
	handleChangeTitle(task, value){
		this.store.appState.ChangeTaskTitle(task, value);
	}
	handleScrollable() {
		var { scrollable } = this.state;
		this.setState({
			scrollable: !scrollable
		})
	}
	render() {
		const { tasks, completedTasks } = this.store.appState;
		var { scrollable } = this.state;
		const style = {
			height: '397px',
    	overflowY: 'scroll'
		}
		var taskList = tasks.map( (task)=> {
			return (
				<TodoItem
					key={task.id}
					task={task}
					toggleComplete={this.toggleComplete}
					handleChangeTitle={this.handleChangeTitle}
					handleDelete={this.handleDelete}
				/>
			)
		})
		var DoneRatio = ((tasks.length - completedTasks.length) / tasks.length) * 100;
		return (
					<div className="todo-list" style={scrollable === true ? style : {}}>
						{taskList}
						{
							tasks.length > 0 ?
							<div>
								<div className="progress-wrapper"><Progress completed={DoneRatio} /></div>
								<span className="">{completedTasks.length} Items left.</span>
								<div className="make-scrollable" onClick={this.handleScrollable}>Fixed Height</div>
							</div>
							: ''
						}
					</div>
		);
	}
}
