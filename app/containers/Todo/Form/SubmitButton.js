import styled from 'styled-components';

import Button from 'components/Button/Form';

const SubmitButton = styled(Button)`
  display: flex;
  justify-content: flex-end;
`;

SubmitButton.defaultProps = {
  type: 'submit'
};

export default SubmitButton;
