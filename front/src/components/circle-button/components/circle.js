import styled from 'styled-components'

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #FFB874;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.2);
  }
  &:active {
    box-shadow: 0px 0px 10px 0px rgba(235,70,70,1);
  }
`
Circle.displayName = 'Circle'

export default Circle
