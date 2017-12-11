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
import PropTypes from 'prop-types'

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
                  checked={this.props.TODO.completed}
                  onChange={event => this.props.onChecked(event)}
                  type="checkbox" 
                />
              </Col>
              <Col onClick={event => this.props.onClick(event)} xs={10}>
                {this.props.TODO.title}
              </Col>
            </Row>
          </ListGroupItem>
        );
    }

}

TODOItemComponent.propTypes = {
    TODO: PropTypes.object,
    onChecked: PropTypes.func,
    onClick: PropTypes.func
}

export default TODOItemComponent