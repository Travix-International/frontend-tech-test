//Third Party
import React from 'react'
import { Modal, Button, FormGroup, Label, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

//Modal
class ModalReadOnlyComponent extends React.Component {

    render () {
        return (
          <Modal show={this.props.open}>
            <Modal.Header>
              <Modal.Title>{this.props.TODO.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {this.props.TODO.description}
              <FormGroup>
                <Row>
                  <Col xs={12}>
                    {
                      this.props.TODO.tags && this.props.TODO.tags.map(
                        tag => (
                          <span>
                            <Label bsStyle="success" tag={tag}>{tag}</Label>{ ' ' }
                          </span>
                        )
                      )
                    }
                  </Col>
                </Row>
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={event => this.props.close(event)}>Close</Button>   
              <Button onClick={event => this.props.update(event)}>Update</Button>
            </Modal.Footer>
          </Modal>
        );
    }

}

ModalReadOnlyComponent.propTypes = {
    TODO: PropTypes.object,
    saveModal: PropTypes.func,
    close: PropTypes.func,
    open: PropTypes.func,
    update: PropTypes.func
}

export default ModalReadOnlyComponent