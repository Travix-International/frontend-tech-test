"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class TaskContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row bg-info l-p-10">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p>{this.props.taskdetails.title}</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p>{this.props.taskdetails.description}</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 text-right">
                    <button type="button" onClick={this.props.ondelete} value={this.props.taskdetails.id} className="btn btn-danger btn-small-width">
                        Delete
                    </button>
                    <button type="button" onClick={this.props.onupdate} value={this.props.taskdetails.id} className="btn btn-primary l-ml-10 btn-small-width">
                        Update
                    </button>
                </div>
            </div>
        );
    }
}
export default TaskContainer;