/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import TodoList, { dummyTodos } from 'SRC/TodoList'
import './App.scss'


class App extends Component {

  static propTypes = {
    location: PropTypes.object, // eslint-disable-line
  }

  state = {
    isLoggedIn: false,
  }

  componentDidMount() { }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  }

  render() {
    // const { isLoggedIn } = this.state
    return (
      <Router>
        <div>
          <h1> Todo List </h1>
          <TodoList todos={[]} />
        </div>
      </Router>
    )
  }
}

export default App
