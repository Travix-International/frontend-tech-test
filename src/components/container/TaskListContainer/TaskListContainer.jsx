"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import TaskContainer from '../TaskContainer/TaskContainer.jsx';

class TaskListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>                
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