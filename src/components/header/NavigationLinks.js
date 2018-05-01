import PropTypes from 'prop-types'
import React from 'react'
import { LinkTabs, Panel } from '../shared/linkTabs'

function NavigationLinks({ location }) {
  return (
    <div className="header-navbar-nav">
      <LinkTabs location={location}>
        <Panel label={<i className="fas fa-home" />} pathCategory="" pathCategoryIndex={1} cutAfter />
        <Panel label="To Do" pathCategory="todo" pathCategoryIndex={1} cutAfter />
        <Panel label="Done" pathCategory="done" pathCategoryIndex={1} cutAfter />
      </LinkTabs>
    </div>
  )
}

NavigationLinks.propTypes = {
  location: PropTypes.object.isRequired
}

export default NavigationLinks
