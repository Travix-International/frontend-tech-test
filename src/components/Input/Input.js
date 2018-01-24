import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'

import styles from './Input.css'

/**
 * Inputs are used to accept user text input.
 */
function Input(props) {
  const {
    defaultValue,
    isDisabled,
    input,
    isBlock,
    isDark,
    meta = {},
    placeholder,
    type,
    ...other
  } = props

  /** Assigning necessary classes */
  let classes = styles.input
  let wrapperClasses = styles.wrapper
  let errorClasses = styles.errorMessage

  classes = meta.touched && meta.invalid ? `${classes} ${styles.error}` : classes
  classes = isBlock ? `${classes} ${styles.block}` : classes
  classes = isDark ? `${classes} ${styles.dark}` : classes

  wrapperClasses = isBlock ? `${wrapperClasses} ${styles.isBlock}` : wrapperClasses

  errorClasses = `${styles.errorMessage} ${isBlock ? styles.block : ''}`

  /** Return input */
  return (
    <span className={wrapperClasses} {...other}>
      <input
        className={classes}
        defaultValue={defaultValue}
        disabled={isDisabled}
        placeholder={placeholder}
        type={type}
        {...input}
      />
      {meta.touched && meta.error
        ? (
          <em className={errorClasses}>
            <Icon name="ALERT" />
            {meta.error}
          </em>
        )
        : null
      }
    </span>
  )
}

Input.propTypes = {
  /** Default value for input. */
  defaultValue: PropTypes.string,
  /** Contains input attributes. */
  input: PropTypes.shape({
    /** Input name. */
    name: PropTypes.string.isRequired,
    /** Input onBlur. */
    onBlur: PropTypes.func,
    /** Input onChange. */
    onChange: PropTypes.func,
    /** Input onFocus. */
    onFocus: PropTypes.func,
    /** Input value. */
    value: PropTypes.string,
  }).isRequired,
  /** Displays input as block. */
  isBlock: PropTypes.bool,
  /** Displays input with a dark style. */
  isDark: PropTypes.bool,
  /** Disabled input */
  isDisabled: PropTypes.bool,
  /** Metadata about the state of this field. For use with redux-form. */
  meta: PropTypes.shape({
    /** true if field has focus. Only works if input.onFocus was passed. */
    active: PropTypes.bool,
    /** true if this field was set with AUTOFILL action and has not since been changed. */
    autofilled: PropTypes.bool,
    /** true if the form is currently running async validation because this field was blurred. */
    asyncValidating: PropTypes.bool,
    /** true if the field value has changed from its initialized value. Opposite of pristine. */
    dirty: PropTypes.bool,
    /** Store's dispatch function. */
    dispatch: PropTypes.func,
    /** Current field error if its value is not passing validation. */
    error: PropTypes.string,
    /** form's name. */
    form: PropTypes.string,
    /** true if the field value fails validation. Opposite of valid. */
    invalid: PropTypes.bool,
    /** true if field value is the same as its initialized value. Opposite of dirty. */
    pristine: PropTypes.bool,
    /** true if field is currently being submitted. */
    submitting: PropTypes.bool,
    /** true if the form had onSubmit called and failed to submit for any reason. */
    submitFailed: PropTypes.bool,
    /** true if field has been touched. By default, this is set to true when field is blurred. */
    touched: PropTypes.bool,
    /** true if field's value passes validation. Opposite of invalid. */
    valid: PropTypes.bool,
    /** true if this field has ever had focus. It will only work if input.onFocus was passed. */
    visited: PropTypes.bool,
    /** Warning for this field if its value is not passing warning validation. */
    warning: PropTypes.string,
  }),
  /** Input's placeholder. */
  placeholder: PropTypes.string,
  /** Input type. */
  type: PropTypes.oneOf(['text', 'password', 'email', 'url', 'search', 'tel']),
}

Input.defaultProps = {
  type: 'text',
}

export default Input

