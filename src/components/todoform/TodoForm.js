import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'

import './TodoForm.css'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup className="todoform-group">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter a new task"
            bsSize="lg"
            className="todoform-input"
            onChange={(e) => this.handleChange(e)}
            onSubmit={(e) => this.handleSubmit(e)}
          />
        </FormGroup>
      </form>
    );
  }
}
