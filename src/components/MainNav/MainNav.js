import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
  const all = 'All'

  return (
    <ul>
      <li>
        <Link to="/">
          {all}
        </Link>
      </li>
    </ul>
  )
}

export default MainNav
