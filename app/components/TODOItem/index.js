//Third Party
import React from 'react'
import Infinite from 'react-infinite'
import {
    Row, 
    Grid, 
    Col, 
    ListGroup, 
    ListGroupItem,
    InputGroup
} from 'react-bootstrap'

class TODOItemComponent extends React.Component {

    componentDidMount () {
        this.state = {
            open: false
        }
    }

    render () {
        return (
            <ListGroupItem bsStyle={this.props.TODO.completed ? 'success' : 'info'}>
                <Row>
                    <Col xs={2}>
                        <input 
                            type="checkbox" 
                            checked={this.props.TODO.completed}
                            onChange={event => this.props.onChecked(event)}/>
                    </Col>
                    <Col xs={10} onClick={event => this.props.onClick(event)}>
                        {this.props.TODO.title}
                    </Col>
                </Row>
            </ListGroupItem>
        );
    }

}

export default TODOItemComponent