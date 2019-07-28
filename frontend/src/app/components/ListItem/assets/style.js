import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 5px;
  background-color: #fff;
  transition: all 200ms;

  &:last-child {
    border-bottom: none;
  }

  &:active,
  &:hover {
    -moz-transform: scale(1.02);
    -webkit-transform: scale(1.02);
    -o-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
`;

export const Link = styled.a`
  padding: 15px;
  display: block;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  color: ${props => props.theme.colors.secondary};
`;

export const Description = styled.p`
  font-size: 0.9em;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.light};
`;
