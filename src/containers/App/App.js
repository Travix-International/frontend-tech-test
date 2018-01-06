import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'

const home = 'Home'
const about = 'About'

const Home = () => (
  <div>
    <h2>
      {home}
    </h2>
  </div>
)

const About = () => (
  <div>
    <h2>
      {about}
    </h2>
  </div>
)

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">
                {home}
              </Link>
            </li>
            <li>
              <Link to="/about">
                {about}
              </Link>
            </li>
          </ul>

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
