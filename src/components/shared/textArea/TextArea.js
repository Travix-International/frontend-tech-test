import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import TextAreaAutosize from 'react-textarea-autosize'
import './textArea.scss'

const onChangeHandler = (e, onChange) => {
  if (onChange) {
    onChange(e.target.value)
  }
}

function TextArea({ placeholder, value, maxLength, onChange, ...props }) {
  return (
    <TextAreaAutosize
      className={classNames('textarea-container', props.className)}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={e => onChangeHandler(e, onChange)}
    />
  )
}

TextArea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number
}

TextArea.defaultProps = {
  placeholder: 'Type...',
  maxLength: 1000
}

export default TextArea
