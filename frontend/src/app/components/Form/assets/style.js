import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1em;
  margin-bottom: 10px;
  display: block;
  color: ${props => props.theme.colors.secondary};
`;

export const TextInput = styled.input`
  font-size: 1em;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${props => (props.error ? '#c43d3b' : props.theme.colors.lighter)};
  color: ${props => props.theme.colors.secondary};
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.lighter};
  }
`;

export const Error = styled.p`
  font-size: 0.8em;
  padding: 5px 0;
  color: #c43d3b;
`;

export const TextArea = styled.textarea`
  font-size: 0.9em;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 150px;
  border: 1px solid ${props => (props.error ? '#c43d3b' : props.theme.colors.lighter)};
  color: ${props => props.theme.colors.secondary};
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.lighter};
  }
`;
