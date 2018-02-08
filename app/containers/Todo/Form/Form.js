import styled from 'styled-components';

import { media } from 'global-styles';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ${media.mobile`
    flex-direction: column;
  `}
`;

export default Form;
