import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  overflow: auto;

  #task-delete {
    float: right;
  }

  #task-delete-cancel {
    float: left;
  }
`;

export const Title = styled.h2`
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #c43d3b;
`;

export const Description = styled.p`
  font-size: 0.9em;
  margin-bottom: 20px;
  color: #c43d3b;
`;
