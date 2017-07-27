import React, { Component } 		from "react";
import { observer } 						from "mobx-react";
import FontAwesome 							from "react-fontawesome";
import enhanceWithClickOutside 	from "react-click-outside";

@enhanceWithClickOutside
@observer
export default class TodoItem extends Component {
	constructor(props) {
		super(props);
		const { task } = this.props;
		this.state = {
			isEditing: false,
			newValue: task.title
		}
		this.handleEditing = this.handleEditing.bind(this);
		this.handleSendNewTitle = this.handleSendNewTitle.bind(this);
		this.handeChangeTitleValue = this.handeChangeTitleValue.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}
	handleEditing() {
		this.setState({ isEditing: true })
	}
	handeChangeTitleValue(e) {
		var value = e.target.value;
		this.setState({
			newValue: value
		})
	}
	handleClickOutside() {
    this.setState({ isEditing: false })
  }
	handleSendNewTitle(e) {
		const { task } = this.props;
		if (e.charCode == 13) {
			this.props.handleChangeTitle(task, this.state.newValue);
			this.setState({ isEditing: false })
		}
	}
	render() {
		const { task, toggleComplete,  handleDelete } = this.props;
		return (
			<div className={task.completed === true ? 'todo-item completed-todo-item' : 'todo-item'}>
				<button className={task.completed ? 'task-checkbox-done' : 'task-checkbox'}
					onClick={() => {toggleComplete(task)}}>
					<FontAwesome name='check' />
				</button>
				{
					this.state.isEditing ? '':
					<span className="todo-item-title" tabIndex="0" onDoubleClick={this.handleEditing}
						onBlur={() => this.handleClickOutside}
						>{task.title}</span>
				}
				{
					this.state.isEditing ?
					<input type="text"
						className="task-edit-input"
						value={this.state.newValue}
						onChange={this.handeChangeTitleValue}
						onKeyPress={this.handleSendNewTitle}
					/> : ''
				}
				<button className="delete-task"
					onClick={ () => {handleDelete(task.id)}}>
					<FontAwesome name='trash' />
				</button>
			</div>
		);
	}
}
