import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 1rem;
  box-sizing: border-box;
`

const InputWrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
  &:before {
    width: 95%;
    left: 0;
    right: 0;
    bottom: 0;
    content: "\00a0";
    position: absolute;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
  }
`

const Input = styled.input`
  width: 95%;
  border: 0;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
`

const Label = styled.label`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.54);
`


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
