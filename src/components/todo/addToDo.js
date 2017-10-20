import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button     } from 'react-bootstrap';
import { connect } from 'react-redux'

class addToDo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            description: "",
        }
    }

    getValidationStateForTitle() {
        const titleLength = this.state.title.value.length;
        if (titleLength > 10) return 'success';
        else if (titleLength > 5) return 'warning';
        else if (titleLength > 0) return 'error';
    };

    getValidationStateForDescription() {
        const descriptionLength = this.state.description.length;
        console.log("Valor: " + descriptionLength);
        if (descriptionLength > 10) return 'success';
        else if (descriptionLength > 5) return 'warning';
        else if (descriptionLength > 0) return 'error';
    };

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    };

    handleDescriptionChange(e) {
        console.log("e: " + e.target.value);
        this.setState({ description: e.target.value });
    };

    render(){
        function FieldGroup({ id, label, help, ...props }) {
            return (
              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
              </FormGroup>
            );
        }

        return(
            <form>
                
                <FieldGroup id="formControlsText" type="text" label="Title" placeholder="Please enter a title" />
                <FormGroup controlId="formControlsTextarea" validationState={this.getValidationStateForDescription()}>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Please enter a description" 
                        value={this.state.value} onChange={e => this.handleDescriptionChange(e)} />
                </FormGroup>
                <Button bsStyle="success">Add Task</Button>
                {/* <button type="button" className="btn btn-success" onClick={() => this.props.addTask("Testing", "Testing descrip too")}>Add Task</button> */}
                {/* <button type="button" className="btn btn-success" onSubmit={this.handleLogin}>Add Task</button> */}
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { tasks: state.tasks };
}

export default connect(mapStateToProps)(addToDo);