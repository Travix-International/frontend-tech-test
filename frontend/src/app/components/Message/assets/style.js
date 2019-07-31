import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => {
    if (props.type === 'success') {
      return '#1a531b';
    }
    if (props.type === 'error') {
      return '#912d2b';
    }
    if (props.type === 'warning') {
      return '#b58105';
    }
    if (props.type === 'info') {
      return '#2185d0';
    }
    return '#000000';
  }};
`;

export const Title = styled.h2`
  font-size: 1.2em;
`;

export const Description = styled.p`
  font-size: 0.9em;
`;
