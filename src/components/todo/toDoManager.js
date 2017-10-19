import React, { Component } from 'react';
import { Well, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


class TodoManager extends Component{
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
            <Well>
            <h2>TO DO:</h2>
            <form>
                <FieldGroup id="formControlsText" type="text" label="Title" placeholder="Please enter a title" />
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Please enter a description" />
                </FormGroup>
            </form>
    
            </Well>
        );
    }
}

export default TodoManager;