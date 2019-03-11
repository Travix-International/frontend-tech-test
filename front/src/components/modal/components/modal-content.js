import styled from 'styled-components'
import Animation from './animation'

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  background: rgb(255, 255, 255);
  padding: 1.5rem;
  border-radius: .4rem;
  z-index: 100;
  animation: ${Animation} 500ms ease;
`

export default ModalContent
