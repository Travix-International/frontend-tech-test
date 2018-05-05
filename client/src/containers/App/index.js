import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { history } from 'history'
import { store } from 'store'
import Todo from 'containers/Todo'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from={'/'} to={'/tasks'} />
        <Route exact path="/tasks" component={Todo} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App
