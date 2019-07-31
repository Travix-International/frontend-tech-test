import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  overflow: auto;
`;

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

export const ActionBar = styled.div`
  overflow: auto;
  font-size: 1.3em;

  .task-edit {
    float: right;
    color: ${props => props.theme.colors.secondary};
    margin-left: 20px;
  }

  .task-delete {
    float: left;
    color: #c43d3b;
  }
`;
