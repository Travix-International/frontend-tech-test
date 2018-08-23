import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.scss'

const Button = props => {
  return (
    <button
      className={`${props.add ? styles.Button_Add : null} ${
        props.delete ? styles.Button_Delete : null
      } ${props.edit ? styles.Button_Edit : null}`}
      onClick={props.onButtonClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  add: PropTypes.bool,
  delete: PropTypes.bool,
  edit: PropTypes.bool,
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func
}

export default Button
