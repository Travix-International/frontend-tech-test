import PropTypes from 'prop-types'
import React from 'react'
import NavigationLinks from './NavigationLinks'
import CreateTask from './CreateTask'
import './header.scss'

export default function Header(props) {
  const { location } = props

  return (
    <header className="header">
      <nav className="header-container">
        <NavigationLinks location={location} />
        <CreateTask />
      </nav>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired
}
