import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaClose from 'react-icons/lib/fa/times-circle';
import './scss/TaskDetails.scss';

class TaskDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: false,
            message: 'Loading..',
            info : {
                id: null,
                title: null,
                description: null,
            }
        }
    }

    render(){
        return (
            <div>
                <div className="taskDetailsContainer"></div>
                <form className="contents" onSubmit={this.submitChanges}>
                <div><Link to="/" ><FaClose className="closeButton" /></Link></div>
                { 
                    this.state.status
                    ? <div className="taskInfo" >
                        <input type="text" className="taskTitle" placeholder="Task title goes here.." defaultValue={this.state.info.title} />
                        <textarea className="taskDescription" placeholder="Add task description here.." defaultValue={this.state.info.description} ></textarea>
                    </div>
                    : <div className="loader">{this.state.message}</div>
                }
                
                <button type="submit" className="saveButton" id="saveButton">SAVE</button>
                </form>
            </div>
        );
    }

    submitChanges = (event) => {
        event.preventDefault();
        let taskTitle = event.target[0].value;
        let desctiption = event.target[1].value;
        this.props.update(this.state.info.id, taskTitle, desctiption);
    }

    componentDidMount() {
		fetch(`http://localhost:9001${location.pathname}`)
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
                info: result.task,
                status: true
			  });
			},
			(error) => {
			  this.setState({
				message: 'Error!'
			  });
			}
		  )
	  }

}

export default TaskDetails;