//Third Party
import React from 'react'
import { 
    Form, 
    FormGroup, 
    ControlLabel, 
    FormControl, 
    Button,
    Row,
    Col
} from 'react-bootstrap'
import PropTypes from 'prop-types'

class TODOAddComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        }
    }

    titleChange (event) {
        this.setState({
            title: event.target.value
        });
    }

    descriptionChange (event) {
        this.setState({
            description: event.target.value
        });
    }

    /*
     * If the required title has been set
     * calls the parent's submit method
     * to Create a new TODO
     */
    submit (event) {
        event.preventDefault();

        this.setState({
            title: '',
            description: ''
        });

        this.props.submit(this.state);
    }

    render () {
        return (
          <Form inline onSubmit={event => this.submit(event)}>

            <FormGroup style={{width: '100%'}}>
              <FormControl 
                onChange={event => this.titleChange(event)} 
                placeholder="Title" 
                style={{width: '100%'}}
                type="text" 
                value={this.state.title} 
              />
              {this.state.error}
            </FormGroup>

            { ' ' }

            <FormControl
              componentClass="textarea" 
              onChange={event => this.descriptionChange(event)}
              placeholder="Description" 
              style={{width: '100%', margin: '10px 0'}}
              value={this.state.description}  
            />


            <FormGroup style={{width: "100%"}}>
              <Button bsStyle="success" className="pull-right" type="submit">
                Create
              </Button>
            </FormGroup>

          </Form>
        );
    }

}

TODOAddComponent.propTypes = {
    submit: PropTypes.func
}

export default TODOAddComponent