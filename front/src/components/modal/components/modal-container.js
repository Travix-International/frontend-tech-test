import styled from 'styled-components'
import Animation from './animation'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 50;
  animation: ${Animation} 500ms ease;
`
ModalContainer.displayName = 'ModalContainer'

export default ModalContainer
