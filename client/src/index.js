import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

const rootElement = document.getElementById('app')

ReactDOM.render(<App />, rootElement)

if (module.hot) {
  module.hot.accept()
}
