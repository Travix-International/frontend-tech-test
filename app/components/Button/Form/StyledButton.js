import styled from 'styled-components';

import buttonStyles from '../buttonStyles';

const StyledButton = styled.button`
  ${buttonStyles}
  position: relative;
  z-index: 1;
  color: #FFF;
  background: #6A7989;
  min-width: 6em;
  max-width: 12em;

  :before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 100%;
    margin: -15px 0 0 1px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${({ secondary }) => (secondary ? '#F94040' : '#00DCA4')};
    transform-origin: 100% 50%;
    transform: scale3d(1, 2, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.7,0,0.9,1);
  }

  :hover::before {
    transform: scale3d(9, 9, 1);
  }

  :active::before {
    transform: scale3d(9, 9, 1);
  }
`;

export default StyledButton;
