import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
`;

export default Wrapper;
