import React from 'react'
import PropTypes from 'prop-types'

import SVGIcons from './icons'
import styles from './Icon.css'

/**
 * Icons are graphic representations of a program, option or action.
 */
function Icon(props) {
  const {
    color,
    name,
    size,
    ...other
  } = props

  return (
    <svg
      className={styles.icon}
      fill={color}
      height={size}
      viewBox="0 0 512 512"
      width={size}
      {...other}
    >
      <path d={SVGIcons[name]} />
    </svg>
  )
}

Icon.propTypes = {
  /** Icon's Color */
  color: PropTypes.string,
  /** Name of Icon */
  name: PropTypes.string.isRequired,
  /** Size of the Icon */
  size: PropTypes.oneOf([12, 16, 32, 64]),
}

Icon.defaultProps = {
  size: 16,
}

export default Icon
