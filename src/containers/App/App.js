import React from 'react'
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

/* eslint-disable react/prefer-stateless-function  */
export default class App extends React.Component {
  shouldComponentUpdate() {
    return true
  }

  render() {
    return (
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
    )
  }
}
