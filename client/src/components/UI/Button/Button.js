import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.scss'

const Button = props => {
  return (
    <button
      className={`${props.add ? styles.Button_Add : null} ${
        props.delete ? styles.Button_Delete : null
      }`}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  add: PropTypes.bool,
  delete: PropTypes.bool
}

export default Button
