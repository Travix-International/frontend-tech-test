import React, { Component } from 'react'

const ENTER_KEY = 'Enter'

const withSubmitHandler = (WrappedInput) => {
  return class extends Component {
    constructor(props) {
      super(props)
      const wrappedInputName = WrappedInput.displayName || WrappedInput.name
      this.displayName = `withSubmitHandler(${wrappedInputName})`
    }

    handleSubmit = (event) => {
      if (event.key === ENTER_KEY) {
        this.props.handleSubmit()
      }
    }

    render() {
      return <WrappedInput {...this.props} handleSubmit={this.handleSubmit} />
    }
  }
}

export default withSubmitHandler
