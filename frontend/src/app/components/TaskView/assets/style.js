import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.2em;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.secondary};
`;

export const Description = styled.p`
  font-size: 0.9em;
  width: 100%;
  color: ${props => props.theme.colors.light};
`;
