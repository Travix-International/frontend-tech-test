import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background: #FFF;
  transition: height 0.3s;
  transform: translate3d(0,0,0);
  overflow: hidden;
  height: ${({ collapsed, height }) => collapsed ? `calc(4em + ${height}px)` : '4em'};
  margin: 0 auto;
`;

export default Wrapper;
