import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LinkTab from './LinkTab'
import styles from './linkTabs.scss'

function LinkTabs({ children, location, className: classname }) {
  return (
    <div className={classnames(styles.link_tabs, classname)}>
      <ul className={styles.link_tabs__labels}>
        {children.map((x, i) => <LinkTab {...x.props} location={location} key={i} />)}
      </ul>
    </div>
  )
}

LinkTabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  location: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default LinkTabs
