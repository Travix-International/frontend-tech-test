import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'
import { loadTasks } from '../actions'
import Header from './header/Header'
import ToDoTasks from './tasks/ToDoTasks'
import DoneTasks from './tasks/DoneTasks'

import './app.scss'

const AllTasks = () => <Async load={import('./tasks/AllTasks')} />

class App extends Component {
  componentDidMount() {
    this.props.loadTasks()
  }

  render() {
    const { location } = this.props
    return (
      <div className="app">
        <Header location={location} />
        <div className="tasks">
          <Switch>
            <Route exact path="/" component={AllTasks} />
            <Route path="/todo" component={ToDoTasks} />
            <Route path="/done" component={DoneTasks} />
          </Switch>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  loadTasks: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default withRouter(connect(null, {
  loadTasks
})(App))
