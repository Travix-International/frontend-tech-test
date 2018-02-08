import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  50% {
    opacity: 0;
    transform: translate3d(1em, 0, 0);
  }
  51% {
    opacity: 0;
    transform: translate3d(-1em, -40%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, -40%, 0);
  }
`;

const getComputedStyles = ({ focused }) => `
  ${focused && `animation: ${animation} 0.3s forwards`}
`;

export default styled.label`
  position: absolute;
  padding: 1.6em 0;
  width: 100%;

  ${props => getComputedStyles(props)}
`;
