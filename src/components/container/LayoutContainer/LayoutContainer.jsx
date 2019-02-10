"use strict";

import axios from 'axios';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderContainer from '../HeaderContainer/HeaderContainer.jsx';
import TaskListContainer from '../TaskListContainer/TaskListContainer.jsx';

const SERVER_URL = 'http://localhost:9001';
import Toaster from 'toastr';

class LayoutContainer extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            tasks: [],
            task: [],
        };

        this.handleAddTaskEvent = this.handleAddTaskEvent.bind(this);
        this.handleDeleteTaskEvent = this.handleDeleteTaskEvent.bind(this);
        this.handleUpdaetTaskEvent = this.handleUpdaetTaskEvent.bind(this);
        this.handleHideModalEvent = this.handleHideModalEvent.bind(this);
        this.handleCreateTaskEvent = this.handleCreateTaskEvent.bind(this);
    }

    componentDidMount(){
        this.loadToDoTasksList();
    }
       
    loadToDoTasksList(){
        const request = axios.get(`${SERVER_URL}/tasks/`);
        request.then(({ data }) => {
            console.log(data);
            this.setState({ tasks: data.tasks.reverse() });
        }).catch(error => {
            return [];
        }); 
    }
    handleAddTaskEvent(){        
        this.setState({ task: {} });
        this.setState({ isModalOpen: true });        
    }
    handleCreateTaskEvent(event){
        let createTask = JSON.parse(event.target.value);
        var SERVER_ACTION_URL = '';
        var SERVER_ACTION_METHOD = '';
        console.log("Add or Update.");
        if (!Number.isNaN(createTask.id) && createTask.id > 0){
            SERVER_ACTION_URL= `${SERVER_URL}/task/update/${createTask.id}/${createTask.title}/${createTask.description}`;
            SERVER_ACTION_METHOD = 'PUT';
        }else{
            SERVER_ACTION_URL = `${SERVER_URL}/task/create/${createTask.title}/${createTask.description}`;
            SERVER_ACTION_METHOD = 'POST';
        }

        const request = axios({
            url: SERVER_ACTION_URL,
            method: SERVER_ACTION_METHOD,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        request.then(({ data }) => {
            if (!Number.isNaN(createTask.id)) {
                Toaster.success("Task Updated - Success.");
            }else{
                Toaster.success("Task Deleted - Success.");
            }
            this.setState({ tasks: data.tasks.reverse() });
            this.setState({ task: {} });
            this.setState({ isModalOpen: false });
        }).catch(error => {
            return [];
        }); 
    }
    handleDeleteTaskEvent(event){
        let deleteTaskId = event.target.value;
        const request = axios({
            url: `${SERVER_URL}/task/delete/${deleteTaskId}`,
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        request.then(({ data }) => {
            Toaster.success("Task Deleted - Success."); 
            this.setState({ tasks: data.tasks.reverse() });
        }).catch(error => {
            return [];
        });         
    }
    handleUpdaetTaskEvent() {
        let selectedTaskId = event.target.value;
        const request = axios({
            url: `${SERVER_URL}/task/${selectedTaskId}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        request.then(({ data }) => {
            Toaster.success("Task Update - Success.");
            this.setState({ task: data.task });
            this.setState({ isModalOpen: true });
        }).catch(error => {
            return [];
        });      
    }
    handleHideModalEvent(){
        this.setState({ task: {} });
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
                    onselect={this.state.task}
                    tasklist={this.state.tasks}
                    showmodal={this.state.isModalOpen}
                    oncreate={this.handleCreateTaskEvent}
                    hidemodal={this.handleHideModalEvent}></TaskListContainer>                
            </div>
        );
    }
}
export default LayoutContainer;