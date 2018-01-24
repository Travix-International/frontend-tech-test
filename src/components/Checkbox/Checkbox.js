import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'

import styles from './Checkbox.css'

/**
 * Checkboxes are multiple choice inputs.
 */
function Checkbox(props) {
  const {
    input,
    isDisabled,
    label,
    labelPosition,
    ...other
  } = props

  let classes = styles.checkbox

  classes = isDisabled ? `${classes} ${styles.disabled}` : classes
  classes = input.checked ? `${classes} ${styles.checked}` : classes

  /** Return Checkbox */
  return (
    <label className={classes} {...other}>
      {labelPosition === 'left' && label}
      <span>
        <input
          disabled={isDisabled}
          type="checkbox"
          {...input}
        />
        {input.checked && <Icon name="CHECK" size={12} />}
      </span>
      {labelPosition === 'right' && label}
    </label>
  )
}

Checkbox.propTypes = {
  /** Contains input attributes. */
  input: PropTypes.shape({
    /** Input is checked */
    checked: PropTypes.bool,
    /** Input name. */
    name: PropTypes.string.isRequired,
    /** Input onBlur. */
    onBlur: PropTypes.func,
    /** Input onChange. */
    onChange: PropTypes.func,
    /** Input onFocus. */
    onFocus: PropTypes.func,
    /** Input value. */
    value: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
  }).isRequired,
  /** Checkbox is disabled */
  isDisabled: PropTypes.bool,
  /** Label for the checkbox */
  label: PropTypes.string,
  /** Label position */
  labelPosition: PropTypes.oneOf(['left', 'right']),
}

Checkbox.defaultProps = {
  labelPosition: 'right',
}

export default Checkbox
