import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, TextInput as StyledTextInput, TextArea as StyledTextArea, Label, Error } from './assets/style';

/**
 * Input component
 *
 * @param {string} type - (text|textarea)
 * @param {string} id - Element id
 * @param {string} label - Input label
 * @param {string} placeholder - Input placeholder
 * @param {function} onChange - The function which triggers the change event and returns the input value
 * @param {string} error - If the given value is not null shows the error
 * @param {string} defaultValue - Default value of the input
 */
const Input = ({ type, id, label, placeholder, onChange, error, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onChangeHandler = e => {
    setDirty(true); // make the input dirty in order to show error message
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <InputWrapper>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      {type === 'text' ? (
        <StyledTextInput
          error={error && dirty}
          value={value}
          onChange={onChangeHandler}
          id={id}
          placeholder={placeholder}
        />
      ) : null}
      {type === 'textarea' ? (
        <StyledTextArea
          error={error && dirty}
          value={value}
          onChange={onChangeHandler}
          id={id}
          placeholder={placeholder}
        />
      ) : null}
      {error && dirty ? <Error>{error}</Error> : null}
    </InputWrapper>
  );
};

Input.defaultProps = {
  label: null,
  placeholder: null,
  error: null,
  type: 'text',
  defaultValue: ''
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string
};

export default Input;
