import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.scss'

const Button = props => {
  const { add, delete: delBTN, edit, onButtonClick, disabled, text } = props
  return (
    <button
      type="button"
      className={`${add ? styles.Button_Add : null} ${
        delBTN ? styles.Button_Delete : null
      } ${edit ? styles.Button_Edit : null}`}
      onClick={onButtonClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  add: null,
  delete: null,
  edit: null,
  disabled: null,
  onButtonClick: null,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  add: PropTypes.bool,
  delete: PropTypes.bool,
  edit: PropTypes.bool,
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
}

export default Button
