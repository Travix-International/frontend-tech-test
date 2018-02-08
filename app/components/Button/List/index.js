import styled from 'styled-components';

import buttonStyles from '../buttonStyles';

const StyledButton = styled.button`
  ${buttonStyles}
  color: #6A7989;
  height: 100%;
  width: 100%;

  :hover {
    color: #02DCA4;
  }
`;

export default StyledButton;
