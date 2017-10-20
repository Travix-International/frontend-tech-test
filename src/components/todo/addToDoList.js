import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux'

class AddToDoList extends Component{
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
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Please enter a description" />
                </FormGroup>
                <button type="button" className="btn btn-success">Add Task</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { tasks: state.tasks };
}

export default connect(mapStateToProps)(AddToDoList);