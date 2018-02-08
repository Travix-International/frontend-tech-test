import styled from 'styled-components';

import HOC from '../HOC';
import inputStyles from '../inputStyles';

const Input = styled.input`
  ${inputStyles}
  margin: 0;
  padding: 0 1em;
  font-size: 1em;
  width: 100%;
  height: 100%;

  :active,
  :focus {
    color: #02DCA4;
  }
`;

export default HOC(Input);
