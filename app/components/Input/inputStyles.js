import { css } from 'styled-components';

const inputStyles = css`
  border: none;
  border-radius: 0;
  background: transparent;
  color: #6A7989;
  -webkit-appearance: none;
  width: 100%;
  cursor: ${({ disabled }) => disabled ? 'none' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.7 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};

  :active,
  :focus {
    outline: none;
    border: none;
  }
`;

export default inputStyles;
