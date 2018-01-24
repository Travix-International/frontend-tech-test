import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.css'

/**
 * Buttons are used to emphasize call to actions.
 */
function Button(props) {
  const {
    children,
    href,
    isBlock,
    isShort,
    isSlim,
    isWorking,
    kind,
    ...other
  } = props
  /** Assigning necessary classes */
  let classes = styles.button

  classes = styles[kind] ? `${classes} ${styles[kind]}` : classes
  classes = isBlock ? `${classes} ${styles.block}` : classes
  classes = isShort ? `${classes} ${styles.short}` : classes
  classes = isSlim ? `${classes} ${styles.slim}` : classes
  classes = isWorking ? `${classes} ${styles.working}` : classes

  /** If href prop is present, return an anchor tag */
  const ComponentTag = href ? 'a' : 'button'
  if (href) { delete other.type }

  /** Return button */
  return (
    <ComponentTag
      className={classes}
      href={href}
      {...other}
    >
      {children}
    </ComponentTag>
  )
}

Button.propTypes = {
  /** Children of the button. */
  children: PropTypes.node,
  /** If present, button will be an anchor tag instead. */
  href: PropTypes.string,
  /** Displays button as a block. */
  isBlock: PropTypes.bool,
  /** Short button size */
  isShort: PropTypes.bool,
  /** Slim button size */
  isSlim: PropTypes.bool,
  /** Displays button in "working" state. */
  isWorking: PropTypes.bool,
  /** Kind of button. */
  kind: PropTypes.oneOf(['primary', 'secondary', 'flat', 'destructive', 'warning']),
  /** Type of button. */
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
