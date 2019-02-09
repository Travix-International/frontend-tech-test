

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
                title: "",
                description:""
            }
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }
    handleChangeTitle(event) {
        let task = {};
        task.title = event.target.value
        task.description = this.state.task.description;
        this.setState({ task: task });
    } 
    handleChangeDescription(event) {
        let task = {};
        task.title = this.state.task.title;
        task.description = event.target.value;
        this.setState({ task: task });
    }
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.showmodal) {
            return null;
        }

        return (
            <div className="backdrop">
                <div className="modal">
                    <form id="article-form">
                        <div className="row bg-info">
                            <div className="col-xs-12 col-sm-12 col-md-12 l-p-20">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 text-center">
                                        <h4>Add Task</h4>
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
                                        <button type="button" className="btn btn-primary btn-min-width">
                                            Clear
                                        </button>
                                        <button type="button" value={JSON.stringify(this.state.task)} onClick={this.props.oncreate} className="btn btn-success l-ml-10 btn-min-width">
                                            Add Task
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