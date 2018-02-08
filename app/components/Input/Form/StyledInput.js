import styled from 'styled-components';

import HOC from '../HOC';
import inputStyles from '../inputStyles';

const Input = styled.input`
  ${inputStyles}
  position: relative;
  display: block;
  padding: 0.8em;
  font-size: 1.2em;
  margin-top: 0.85em;
  width: 100%;

  :-webkit-autofill {
    background-color: transparent;
    background-image: none;
    color: #6A7989;
  }
`;

export default HOC(Input);
