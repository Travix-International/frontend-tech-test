import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from './components/input-container'
import Label from './components/label'
import InputWrapper from './components/input-wrapper'
import Input from './components/input'

const InputComponent = ({className, label, value, onChange}) => {
  return (
    <InputContainer className={className}>
      <Label>{label}</Label>
      <InputWrapper tabindex="1">
        <Input value={value} onChange={onChange} type="text" />
      </InputWrapper>
    </InputContainer>
  )
}

InputComponent.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputComponent
