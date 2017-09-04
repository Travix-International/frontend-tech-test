import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App'
import Home from './pages/Home/Home'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='home' component={Home}/>
    <Redirect from='*' to='/' />
  </Route>
)
