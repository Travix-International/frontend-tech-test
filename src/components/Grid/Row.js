import React from 'react'
import PropTypes from 'prop-types'

import styles from 'flexboxgrid2/flexboxgrid2.css'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
const options = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between']

/**
 * Rows are containers for columns on your grid.
 */
function Row(props) {
  const {
    children,
    className,
    isReverse,
    tagName,
    ...other
  } = props

  let classes = options.reduce((result, prop) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props[prop]) { result.push(styles[`${prop}-${props[prop]}`]) }
    return result
  }, [styles.row]).join(' ')

  classes = isReverse ? `${classes} ${styles.reverse}` : classes
  classes = className ? `${classes} ${className}` : classes

  const ComponentTag = tagName

  return (
    <ComponentTag className={classes} {...other}>
      {children}
    </ComponentTag>
  )
}

Row.propTypes = {
  /** Distribute columns around the row. */
  around: PropTypes.oneOf(sizes),
  /** Distribute columns between the row */
  between: PropTypes.oneOf(sizes),
  /** Align columns to the bottom of the row. */
  bottom: PropTypes.oneOf(sizes),
  /** Align columns to the center of the row. */
  center: PropTypes.oneOf(sizes),
  /** Children of the row. */
  children: PropTypes.node,
  /** Extra classes for the row. */
  className: PropTypes.string,
  /** Align columns to the end of the row. */
  end: PropTypes.oneOf(sizes),
  /** Reverse order of columns */
  isReverse: PropTypes.bool,
  /** Align columns to the middle of the row. */
  middle: PropTypes.oneOf(sizes),
  /** Align columns to the start of the row. */
  start: PropTypes.oneOf(sizes),
  /** Tag name to be used */
  tagName: PropTypes.string,
  /** Align columns to the top of the row. */
  top: PropTypes.oneOf(sizes),
}

Row.defaultProps = {
  tagName: 'div',
}

export default Row
