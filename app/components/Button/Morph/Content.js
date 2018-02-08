import styled from 'styled-components';

const getComputedStyles = ({ collapsed }) => `
  pointer-events: ${collapsed ? 'auto' : 'none'};
  opacity: ${collapsed ? 1 : 0};
`;

const Wrapper = styled.div`
  width: 100%;
  transition: opacity .3s;

  ${props => getComputedStyles(props)}
`;

export default Wrapper;
