import styled from 'styled-components'
import Animation from './animation'

const Square = styled.div`
  height: 15px;
  width: 15px;
  background-color: #fb83fa;
  left: 6rem;
  position: absolute;
  margin: 0 auto;
  border-radius: .2rem;
  transform: translateY(0) rotate(45deg) scale(0);
  animation: ${Animation} 2500ms linear infinite;

  &:nth-child(1) {
    animation-delay: calc(2500ms * 1 / -1.5);
  }
  &:nth-child(2) {
    animation-delay: calc(2500ms * 2 / -1.5);
  }
  &:nth-child(3) {
    animation-delay: calc(2500ms * 3 / -1.5);
  }
`
Square.displayName = 'Square'

export default Square
