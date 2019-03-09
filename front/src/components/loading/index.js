import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled, {keyframes} from 'styled-components'

const Animation = keyframes`
  0% {
    transform: translateX(0) rotate(45deg) scale(0);
  }

  50% {
    transform: translateX(-233%) rotate(45deg) scale(1);
  }

  100% {
    transform: translateX(-466%) rotate(45deg) scale(0);
  }
`

const ContainerSpinner = styled.div`
  width: 60px;
  height: 15px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 200;
`

const LoadingSpinner = (
  <ContainerSpinner>
    <Square />
    <Square />
    <Square />
  </ContainerSpinner>
)

const Loading = ({className, isOpen}) => {
  return isOpen ? ReactDOM.createPortal((
    <ModalContainer className={className}>
      {LoadingSpinner}
    </ModalContainer>
  ), document.body) : null
}

Loading.propTypes = {
  className: PropTypes.string
}

export default Loading
