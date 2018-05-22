import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// The Todo Container Component

import TasksListContainer from './containers/tasks-list.container'


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>

        {/* It's setup at the default index route */}

        <Route path="/" component={TasksListContainer} />
      </Switch>
    </BrowserRouter>
  )
};

export { Routes }