import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import MainNav from '../../components/MainNav'

import Home from '../Home'
import About from '../About'

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <MainNav />

          <Route component={Home} exact path="/" />
          <Route component={About} path="/about" />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object,
}

export default App
