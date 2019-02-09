"use strict";

import axios from 'axios';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderContainer from '../HeaderContainer/HeaderContainer.jsx';
import TaskListContainer from '../TaskListContainer/TaskListContainer.jsx';

const SERVER_URL = 'http://localhost:9001/tasks/';
import Toaster from 'toastr';

class LayoutContainer extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            tasks: []
        };

        this.handleAddTaskEvent = this.handleAddTaskEvent.bind(this);
        this.handleDeleteTaskEvent = this.handleDeleteTaskEvent.bind(this);
        this.handleUpdaetTaskEvent = this.handleUpdaetTaskEvent.bind(this);
        this.handleHideModalEvent = this.handleHideModalEvent.bind(this);
    }

    componentDidMount(){
        this.loadToDoTasksList();
    }
       
    loadToDoTasksList(){
        const request = axios.get(`${SERVER_URL}`);
        request.then(({ data }) => {
            console.log(data);
            this.setState({ tasks: data.tasks });
        }).catch(error => {
            return [];
        }); 
    }

    handleAddTaskEvent(){
        this.setState({
            isModalOpen: true
        });
        Toaster.success("Task added - Success."); 
    }
    handleDeleteTaskEvent(){
        Toaster.success("Task Deleted - Success."); 
    }
    handleUpdaetTaskEvent() {
        Toaster.success("Task Updated - Success.");
    }
    handleHideModalEvent(){
        this.setState({
            isModalOpen: false
        });
        Toaster.success("Modal Closed - Success."); 
    }
    render() {
        const { seo_title } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 l-p-20">
                <HeaderContainer onadd={this.handleAddTaskEvent}></HeaderContainer>
                <TaskListContainer ondelete={this.handleDeleteTaskEvent}
                    onupdate={this.handleUpdaetTaskEvent} 
                    tasklist={this.state.tasks}
                    showmodal={this.state.isModalOpen}
                    hidemodal={this.handleHideModalEvent}></TaskListContainer>                
            </div>
        );
    }
}
export default LayoutContainer;