//Third Party
import React from 'react'
import { 
    Row,
    Col,
    Modal, 
    Button, 
    FormControl, 
    FormGroup, 
    ControlLabel, 
    Label
} from 'react-bootstrap'
import PropTypes from 'prop-types'

//Modal
class ModalUpdateComponent extends React.Component {

	constructor (props) {
		super(props);

		this.state = Object.assign({}, this.props.TODO, {
            tags: []
        });

        this.tags = [
            'Home', 'Work', 'Fun', 'Friends', 'Health', 'Vacations', '2017', '2018', 'Others', 'Important'
        ];
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
     * If a selected tag has been clicked
     * is removed from the TODO tags
     * and added to the avaiable tags
     */
    removeTag (event) {

        //Retrieve Tag from Clicked element
        const tag = event.target.getAttribute('tag');

        //Add tag to TODO
        this.tags.push(tag);

        //Remove TAG from list of available TAGS
        let tags = this.state.tags.slice();
            tags.splice(tags.indexOf(tag));
        this.setState({tags});
    }

    /*
     * If a avaiable tag has been clicked
     * is removed from the available tags
     * and added to the TODO's tags
     */
    addTag (event) {

        //Retrieve Tag from Clicked element
        const tag = event.target.getAttribute('tag');

        //Remove TAG from list of available TAGS
        this.tags.splice(this.tags.indexOf(tag), 1);

        //Add tag to TODO
        let tags = this.state.tags.slice();
            tags.push(tag);
        this.setState({tags});
    }

    /*
     * Calls Container's method to fire a save action
     */
	save () {
		this.props.saveModal(this.state);
	}

    render () {
        return (
          <Modal show={this.props.open}>
            <Modal.Header>
              <Modal.Title>{`Updating TODO "${this.props.TODO.title}"`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  onChange={event => this.titleChange(event)}
                  placeholder="Title" 
                  type="text" 
                  value={this.state.title} 
                />  
              </FormGroup>

              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl 
                  onChange={event => this.descriptionChange(event)}
                  placeholder="Description" 
                  type="text" 
                  value={this.state.description}
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Tags</ControlLabel>
                <Row>
                  <Col xs={12}>
                    {
                      this.state.tags.map(
                        tag => (
                          <span>
                            <Label
                              bsStyle="success"
                              key={tag}
                              onClick={event => this.removeTag(event)}
                              tag={tag}
                            >
                              {tag}
                            </Label>
                            { ' ' }
                          </span>
                        )
                      )
                    }
                    {
                      this.tags.map(
                        tag => (
                          <span>
                            <Label
                              bsStyle="info"
                              key={tag}
                              onClick={event => this.addTag(event)}
                              tag={tag}
                            >
                              {tag} 
                            </Label>
                            { ' ' }
                          </span>
                        )
                      )
                    }
                  </Col>
                </Row>
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={() => this.save()}>Save</Button>
              <Button onClick={event => this.props.close(event)}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        );
    }

}

ModalUpdateComponent.propTypes = {
    TODO: PropTypes.object,
    saveModal: PropTypes.func,
    close: PropTypes.func,
    open: PropTypes.func
}

export default ModalUpdateComponent