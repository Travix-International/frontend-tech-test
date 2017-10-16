import React, { Component } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

import './TodoForm.css'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange(e) {
    this.setState({ title: e.target.title, description: e.target.description })
  }

  handleSubmit(e) {
  }

  render() {
    return (
      <form className="todoform">
        <FormGroup className="todoform-group">
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Enter a new task title"
            bsSize="lg"
            className="todoform-input"
          />

          <FormControl
            componentClass="textarea"
            value={this.state.description}
            placeholder="Description"
            bsSize="lg"
            className="todoform-textarea"
          />
        </FormGroup>

        <div className="todoform-button">
          <Button onClick={(e) => this.handleSubmit(e)} bsStyle="todoform">Add Task</Button>
        </div>
      </form>
    )
  }
}
