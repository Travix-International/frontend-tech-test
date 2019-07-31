import React from 'react';
import PropTypes from 'prop-types';
import { FaCircleNotch } from 'react-icons/fa';
import { InputWrapper, Button as StyledButton } from './assets/style';

const Button = ({ type, id, isSubmiting, children, onClick, disabled }) => (
  <InputWrapper>
    <StyledButton type={type} id={id} onClick={() => onClick()} disabled={isSubmiting || disabled}>
      {isSubmiting ? <FaCircleNotch className="icon" /> : null} {children}
    </StyledButton>
  </InputWrapper>
);

Button.defaultProps = {
  isSubmiting: false,
  disabled: false
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isSubmiting: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
