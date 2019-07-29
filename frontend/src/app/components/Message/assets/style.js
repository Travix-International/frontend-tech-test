import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => {
    if (props.success) {
      return '#1a531b';
    }
    if (props.error) {
      return '#912d2b';
    }
    if (props.warning) {
      return '#b58105';
    }
    if (props.info) {
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
