import React, { Component } from 'react'

import LoadingIndicator from '../atoms/LoadingIndicator/index'

const withLoadingIndicator = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
      const wrappedInputName =
        WrappedComponent.displayName || WrappedComponent.name
      this.displayName = `withLoadingIndicator(${wrappedInputName})`
    }

    render() {
      if (this.props.loading) {
        return <LoadingIndicator />
      }
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withLoadingIndicator
