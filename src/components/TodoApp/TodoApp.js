import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoListItem from '../TodoListItem/TodoListItem';
import TaskDetails from '../TaskDetails/TaskDetails';
import FaSquareCheck from 'react-icons/lib/fa/check-square-o';
import './scss/TodoApp.scss';

class TodoApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			todoList: [
				
			]
		};
	}

	render(){
		return (
			<Router>
			<div>
				<Notifications />
				<TodoHeader today={new Date()} add={this.addToList}/>
				<div className="todoListItemContainer">
					{
						this.state.todoList.length 
						? this.state.todoList.map((element) => <TodoListItem key={element.id} itemInfo={element} change={this.toggleStatus} remove={this.removeFromList}/>)
						: <div className="NoPendingTasks"><FaSquareCheck className="checkSquareIcon" /><br/>No Pending Tasks !</div>
					}
				</div>

				<Route path="/task/:id" render={() => <TaskDetails update={this.updateTaskDetails} />}/>
			</div>
			</Router>
		);
	}

	componentDidMount() {
		fetch("http://localhost:9001/tasks")
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				todoList: result.tasks
			  });
			},
			(error) => {
			  this.setState({
				todoList: [],
				error
			  });
			}
		  )
	  }

	addToList = (task) => {
		let list = this.state.todoList;
		var timestamp = new Date().getTime();
		let id = timestamp;
		list.push({
			id: id,
			title: task,
			description: "",
			status: true
		});
		this.setState({todoList : list});

		fetch(`http://localhost:9001/task/create/${task}/${id}`, {
			method: "POST"
		})
		  .then(
			(res) => {
			  notify.show('Synced.', 'success');
			},
			(error) => {
				console.log(error);
				this.removeFromList(id);
			  notify.show('Failed to Sync.', 'error');
			}
		  );
	}

	toggleStatus = (id) => {
		let list = this.state.todoList;
		let newList = list.map((item) => {
			if(item.id==id){
				item.status = item.status ? false : true;
			}
			return item;
		});
		this.setState({todoList: newList});
	}

	updateTaskDetails = (id, taskTitle, description) => {
		let list = this.state.todoList;
		let newList = list.map((item) => {
			if(item.id == id){
				item.title = taskTitle;
				item.description = description;
				return item;
			}else{
				return item;
			}
		});

		this.setState({todoList : newList});

		fetch(`http://localhost:9001/task/update/${id}/${taskTitle}/${description}`, {
			method: "PUT",
			headers: {
				'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
			},
		})
		  .then(
			(res) => {
			  notify.show('Synced.', 'success');
			}
		  );
	}

	removeFromList = (id) => {
		let list = this.state.todoList;
		let newList = list.filter((element) => {
			if(element.id!=id){
				return true;
			}
			else{
				return false;
			}
		});
		this.setState({todoList : newList});

		fetch(`http://localhost:9001/task/delete/${id}`, {
			method: "DELETE"
		})
		  .then(
			(res) => {
			  notify.show('Synced.', 'success');
			},
			(error) => {
				console.log(error);
			  notify.show('Failed to Sync.', 'error');
			}
		  );
	}

	getAllTasks = () => {
		return this.state.todoList;
	}
}


export default TodoApp;