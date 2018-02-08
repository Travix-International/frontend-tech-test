import { css } from 'styled-components';

const getComputedStyles = ({ disabled }) => `
  cursor: ${disabled ? 'none' : 'pointer'};
  opacity: ${disabled ? 0.7 : 1};
  pointer-events: ${disabled ? 'none' : 'auto'};
`;

const buttonStyles = css`
  display: block;
  padding: 0.75em;
  font-size: 1em;
  border: none;
  background: none;
  color: inherit;
  vertical-align: middle;
  backface-visibility: hidden;
  appearance: button;
  overflow: hidden;
  ${props => getComputedStyles(props)}

  :focus {
    outline: none;
  }
`;

export default buttonStyles;
