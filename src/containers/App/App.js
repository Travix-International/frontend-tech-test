import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import MainNav from 'components/MainNav'

import AllToDos from 'containers/AllToDos'

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <MainNav />

          <Route component={AllToDos} exact path="/" />
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
