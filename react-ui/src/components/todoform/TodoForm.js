import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { FormGroup, FormControl, Button } from 'react-bootstrap'

import * as actions from '../../actions/actions'

import './TodoForm.css'

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

  validateTitleState() {
    const length = this.state.title.length

    if (length > 1) return 'success'
    else if (length === 0) return 'error'
  }

  validateDescriptionState() {
    const length = this.state.description.length

    if (length > 10) return 'success'
    else if (length === 0) return 'error'
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  handleSubmit(e) {
    const { addNewTask } = this.props
    const { title, description } = this.state

    if(title && title.length >= 3) {
      addNewTask(title, description)
      this.setState({ title: '', description: '' })
    }
  }

  render() {
    return (
      <form className="todoform">
        <FormGroup
          className="todoform-group"
          validationState={this.validateTitleState()}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Enter a new task title"
            bsSize="lg"
            className="todoform-input"
            onChange={(e) => this.handleTitleChange(e)}
            onSubmit={(e) => e.preventDefault()}
          />
        </FormGroup>

        <FormGroup className="todoform-group">
          <FormControl
            componentClass="textarea"
            value={this.state.description}
            placeholder="Description"
            bsSize="lg"
            className="todoform-textarea"
            onChange={(e) => this.handleDescriptionChange(e)}
          />
        </FormGroup>

        <FormGroup className="todoform-group">
          <div className="todoform-button">
            <Button
              onClick={(e) => this.handleSubmit(e)}
              bsStyle="todoform">
                Add Task
            </Button>
          </div>
        </FormGroup>
      </form>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
