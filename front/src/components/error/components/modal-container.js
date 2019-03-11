import styled from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`

export default ModalContainer
