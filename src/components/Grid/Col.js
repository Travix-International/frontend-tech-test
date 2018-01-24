import React from 'react'
import PropTypes from 'prop-types'

import styles from 'flexboxgrid2/flexboxgrid2.css'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

/**
 * Cols are the horizontal division of your main layout. You have 12 per row.
 */
function Col(props) {
  const {
    children,
    className,
    first,
    last,
    lg,
    lgOffset,
    md,
    mdOffset,
    sm,
    smOffset,
    tagName,
    xl,
    xlOffset,
    xs,
    xsOffset,
    ...other
  } = props

  const classMap = {
    first: 'first',
    last: 'last',
    lg: 'col-lg',
    lgOffset: 'col-lg-offset',
    md: 'col-md',
    mdOffset: 'col-md-offset',
    sm: 'col-sm',
    smOffset: 'col-sm-offset',
    xl: 'col-xl',
    xlOffset: 'col-xl-offset',
    xs: 'col-xs',
    xsOffset: 'col-xs-offset',
  }

  let classes = Object.keys(classMap).reduce((result, prop) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props[prop]) { result.push(styles[`${classMap[prop]}-${props[prop]}`]) }
    return result
  }, [styles.col]).join(' ')

  classes = className ? `${classes} ${className}` : classes

  const ComponentTag = tagName

  return (
    <ComponentTag className={classes} {...other}>
      {children}
    </ComponentTag>
  )
}

Col.propTypes = {
  /** Children of the row. */
  children: PropTypes.node,
  /** Extra classes for the row. */
  className: PropTypes.string,
  /** Reorder column to first for this size */
  first: PropTypes.oneOf(sizes),
  /** Reorder column to last for this size */
  last: PropTypes.oneOf(sizes),
  /** Column size for large screens */
  lg: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** Column offset for large screens */
  lgOffset: PropTypes.number,
  /** Column size for medium screens */
  md: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** Column offset for medium screens */
  mdOffset: PropTypes.number,
  /** Column size for small screens */
  sm: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** Column offset for small screens */
  smOffset: PropTypes.number,
  /** Tag name to be used */
  tagName: PropTypes.string,
  /** Column size for extra large screens */
  xl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** Column offset for extra large screens */
  xlOffset: PropTypes.number,
  /** Column size for extra small screens */
  xs: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  /** Column offset for extra small screens */
  xsOffset: PropTypes.number,
}

Col.defaultProps = {
  tagName: 'div',
}

export default Col
