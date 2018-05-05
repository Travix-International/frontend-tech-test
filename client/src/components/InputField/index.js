import React from 'react'
import PropTypes from 'prop-types'

import './styles.less'

const InputField = ({
  input: { value, onChange },
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="form-input-field"
      />
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
)

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
}

export default InputField
