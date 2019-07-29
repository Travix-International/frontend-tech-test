import styled from 'styled-components';

const Text = styled.h2`
  font-size: 1.2em;
  color: ${props => props.theme.colors.primary};

  .icon {
    vertical-align: middle;
    margin: -5px 5px 0 0;
    animation: spin 500ms linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Text;
