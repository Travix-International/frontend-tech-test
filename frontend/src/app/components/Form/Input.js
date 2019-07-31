import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, TextInput as StyledTextInput, TextArea as StyledTextArea, Label, Error } from './assets/style';

const Input = ({ type, id, label, placeholder, onChange, error }) => {
  const [value, setValue] = useState('');
  const [dirty, setDirty] = useState(false);

  const onChangeHandler = e => {
    setDirty(true);
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
  type: 'text'
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default Input;
