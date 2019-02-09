import React, { Component } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import TextArea from "../presentational/TextArea.jsx";

const SERVER_URL = 'http://localhost:9001/tasks/';

import Toaster from 'toastr';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddEvent = this.handleAddEvent.bind(this);
    }

    componentDidMount(){
        const request = axios.get(`${SERVER_URL}`);       
        request.then(({ data }) => {
                console.log(data);
            })
            .catch(error => {
                return [];
            }); 
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleAddEvent(event) {
        Toaster.success("Task added - Success."); 
    }
    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                <div className="row bg-info">
                    <div className="col-xs-12 col-sm-12 col-md-12 l-p-20">
                        <Input
                            text="Task Title"
                            label="seo_title"
                            type="text"
                            id="seo_title"                        
                            value={seo_title}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <TextArea
                            text="Task Description"
                            label="seo_title"
                            type="text"
                            id="seo_title"
                            value={seo_title}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 l-p-20">
                        <div className="row"> 
                            <div className="offset-md-7 col-xs-12 col-sm-12 col-md-5 text-right">
                                <button type="button" className="btn btn-primary btn-min-width">
                                    CLear
                                </button>
                                <button type="button" onClick={this.handleAddEvent} className="btn btn-success l-ml-10 btn-min-width">
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </form>
        );
    }
}
export default FormContainer;