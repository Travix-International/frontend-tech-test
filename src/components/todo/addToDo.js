import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

class addToDo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            IsTaskValid: false,
        }
    }

    getValidationStateForTitle() {
        const titleLength = this.state.title.length;
        if (titleLength > 5) return 'success';
        else return 'error';
    };

    getValidationStateForDescription() {
        const descriptionLength = this.state.description.length;
        if (descriptionLength > 10) return 'success';
        else return 'error';
    };

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    };

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    };

    render(){
        let button = "";
        if (this.state.title.length > 5 && this.state.description.length > 10) {
            button  = <Button bsStyle="success" onClick={() => this.props.addTask(this.state.title, this.state.description)}>Add Task</Button>;
          } else {
            button = <Button bsStyle="success" disabled>Add Task</Button>;
          }
    
        return(
            <form>
                <FormGroup controlId="formCsontrolsTextarea" validationState={this.getValidationStateForTitle()}>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" value={this.state.title.value} placeholder="Please enter a title" onChange={e => this.handleTitleChange(e)} />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea" validationState={this.getValidationStateForDescription()}>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Please enter a description" 
                        value={this.state.description.value} onChange={e => this.handleDescriptionChange(e)} />
                </FormGroup>
                {button}
                {/* <Button bsStyle="success" onClick={() => this.props.addTask(this.state.title, this.state.description)}>Add Task</Button> */}
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { tasks: state.tasks };
}

export default connect(mapStateToProps)(addToDo);