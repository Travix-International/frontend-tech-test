import React from 'react';
import PropTypes from 'prop-types';
import { FaCircleNotch } from 'react-icons/fa';
import { InputWrapper, Button as StyledButton } from './assets/style';

/**
 * Button component
 *
 * @param {string} type - (primary|secondary|danger)
 * @param {string} id - Element id
 * @param {boolean} isSubmiting - It changes button state to submitting state
 * @param {node} children - Everything in between of the button opening and closing tag (like Component)
 * @param {function} onClick - The function which triggers the click event
 * @param {boolean} disabled - Make button disabled and on clickable
 */
const Button = ({ type, id, isSubmiting, children, onClick, disabled }) => (
  <InputWrapper>
    <StyledButton type={type} id={id} onClick={() => onClick()} disabled={isSubmiting || disabled}>
      {isSubmiting ? <FaCircleNotch className="icon" /> : null} {children}
    </StyledButton>
  </InputWrapper>
);

Button.defaultProps = {
  onClick: () => {},
  isSubmiting: false,
  disabled: false
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isSubmiting: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
