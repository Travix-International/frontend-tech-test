import React from 'react'

/* eslint-disable react/prefer-stateless-function  */
export default class App extends React.Component {
  shouldComponentUpdate() {
    return true
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          Hello Worldee
        </h1>
      </div>
    )
  }
}
