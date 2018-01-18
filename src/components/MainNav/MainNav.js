import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
  const all = 'All'
  const active = 'Active'
  const done = 'Done'

  return (
    <ul>
      <li><Link to="/">{all}</Link></li>
      <li><Link to="/active">{active}</Link></li>
      <li><Link to="/done">{done}</Link></li>
    </ul>
  )
}

export default MainNav
