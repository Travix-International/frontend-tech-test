"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import TaskContainer from '../TaskContainer/TaskContainer.jsx';
import CreateTaskContainer from '../CreateTaskContainer/CreateTaskContainer.jsx';

class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDetails :{
                id:0,
                title:'',
                description:''
            }
        }
    }

    componentDidMount() {
       // this._showModalDialog(this.props);
    }

    componentWillReceiveProps(nextProps) {
      //  this._showModalDialog(nextProps);
    }

    _showModalDialog(data) {
        
    }

    render() {
        return (
            <div>      
                <CreateTaskContainer showmodal={this.props.showmodal} 
                    hidemodal={this.props.hidemodal} 
                    oncreate={this.props.oncreate}
                    onselect={this.props.onselect}
                    taskdetails={this.state.taskDetails}></CreateTaskContainer>      
                {
                    this.props.tasklist.map((task, index) => {                    
                    return <TaskContainer ondelete={this.props.ondelete}
                        onupdate={this.props.onupdate}
                        taskdetails={task} key={index}></TaskContainer>
                })
                }
            </div>
        );
    }
}
export default TaskListContainer;