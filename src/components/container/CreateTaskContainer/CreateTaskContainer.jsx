

"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../../presentational/Input.jsx";
import TextArea from "../../presentational/TextArea.jsx";

class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                id : -1,
                title: "",
                description:""
            }
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }
    clearForm(){
        this.setState({
            task: {
                id: this.state.task.id ? this.state.task.id : -1,
                title: "",
                description: ""
            } });
    }
    handleChangeTitle(event) {
        let task = {};
        task.id = this.state.task.id ? this.state.task.id : -1;
        task.title = event.target.value
        task.description = this.state.task.description ? this.state.task.description : '';
        console.log(JSON.stringify(task));
        this.setState({ task: task });
    } 
    handleChangeDescription(event) {
        let task = {};
        task.id = this.state.task.id ? this.state.task.id : -1;
        task.title = this.state.task.title ? this.state.task.title : '';
        task.description = event.target.value;
        console.log(JSON.stringify(task));
        this.setState({ task: task });
    }
    componentWillReceiveProps() {
        console.log("this.props.onselect.id - " + this.props.onselect.id);
        if (this.props.onselect.id) {
            this.setState({ task: this.props.onselect });
        }else{
            this.setState({ task: {} });
        }
    }
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.showmodal) {
            return null;
        }

        var modalTitle;
        var buttonText;
        if (this.state.task.id) {
            modalTitle = <h4>Update Task</h4>;
            buttonText = 'Update';
        } else {
            modalTitle = <h4>Add Task</h4>;
            buttonText = 'Add Task';
        }

        return (
            <div className="backdrop">
                <div className="modal">
                    <form id="article-form">
                        <div className="row bg-info">
                            <div className="col-xs-12 col-sm-12 col-md-12 l-p-20">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 text-center">
                                        {modalTitle}
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 text-right">
                                        <button type="button" onClick={this.props.hidemodal} className="btn btn-danger">x</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 l-p-20">
                                <Input
                                    text="Task Title"
                                    label="Title"
                                    type="text"
                                    id="txtTitle"
                                    value={this.state.task.title}
                                    handleChange={this.handleChangeTitle}
                                />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <TextArea
                                    text="Task Description"
                                    label="Description"
                                    type="text"
                                    id="txtDescription"
                                    value={this.state.task.description}
                                    handleChange={this.handleChangeDescription}
                                />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 l-p-20">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 text-right">
                                        <button type="button" onClick={this.clearForm} className="btn btn-primary btn-min-width">
                                            Clear
                                        </button>
                                        <button type="button" value={JSON.stringify(this.state.task)} onClick={this.props.oncreate} className="btn btn-success l-ml-10 btn-min-width">
                                            {buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}
export default TaskContainer;