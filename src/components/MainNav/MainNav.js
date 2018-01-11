import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
  const home = 'Home'
  const about = 'About'

  return (
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
  )
}

export default MainNav
