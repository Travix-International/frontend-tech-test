import React from 'react'
import { Button } from '@wepow/aphrodite'

import Note from '../components/Note'

/* eslint-disable react/prefer-stateless-function  */
export default class App extends React.Component {
  shouldComponentUpdate() {
    return true
  }

  render() {
    const text = 'HOLA BB YAY FUNCIONA'
    const buttonText = 'click me'

    return (
      <div style={{ textAlign: 'center' }}>
        <Note>
          {text}
          <Button kind="primary">
            {buttonText}
          </Button>
        </Note>
      </div>
    )
  }
}
