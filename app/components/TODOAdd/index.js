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
                        style={{width: '100%'}}
                        type="text" 
                        placeholder="Title" 
                        value={this.state.title} 
                        onChange={event => this.titleChange(event)} />
                        {this.state.error}
                </FormGroup>

                { ' ' }

                <FormControl
                    style={{width: '100%', margin: '10px 0'}}
                    componentClass="textarea" 
                    placeholder="Description" 
                    value={this.state.description}  
                    onChange={event => this.descriptionChange(event)}/>


                <FormGroup style={{width: '100%'}}>
                    <Button type="submit" bsStyle='success' className='pull-right'>
                        Create
                    </Button>
                </FormGroup>

            </Form>
        );
    }

}

export default TODOAddComponent