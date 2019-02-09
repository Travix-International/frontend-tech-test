"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row l-p-10">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <h2 className="text-center">To Do Test Application</h2>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 text-right">
                    <button type="button" onClick={this.props.onadd} className="btn btn-primary l-mr-10 btn-min-width">
                        Add Task
                    </button>
                </div>
            </div>
        );
    }
}
export default HeaderContainer;