import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import ToDos from 'containers/ToDos'

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route component={ToDos} path="/:filter?" />
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
