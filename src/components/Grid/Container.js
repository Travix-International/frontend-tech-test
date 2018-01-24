import React from 'react'
import PropTypes from 'prop-types'

import styles from 'flexboxgrid2/flexboxgrid2.css'

/**
 * Containers are the grid wrappers.
 */
function Container(props) {
  const {
    children,
    className,
    isFluid,
    tagName,
    ...other
  } = props

  let classes = isFluid ? styles['container-fluid'] : styles.container

  classes = className ? `${classes} ${className}` : classes

  const ComponentTag = tagName

  return (
    <ComponentTag className={classes} {...other}>
      {children}
    </ComponentTag>
  )
}

Container.propTypes = {
  /** Children of the row. */
  children: PropTypes.node,
  /** Extra classes for the row. */
  className: PropTypes.string,
  /** Should the container be fluid? */
  isFluid: PropTypes.bool,
  /** Tag name to be used */
  tagName: PropTypes.string,
}

Container.defaultProps = {
  tagName: 'div',
}

export default Container
