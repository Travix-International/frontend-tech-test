import React from 'react'

import Note from '../components/Note'

/* eslint-disable react/prefer-stateless-function  */
export default class App extends React.Component {
  shouldComponentUpdate() {
    return true
  }

  render() {
    const text = 'HOLA BB YAY FUNCIONA'

    return (
      <div style={{ textAlign: 'center' }}>
        <Note>
          {text}
        </Note>
      </div>
    )
  }
}
