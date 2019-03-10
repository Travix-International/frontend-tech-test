import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const Animation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

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

const ModalComponent = ({open, children, onClose}) => {

  const keyDown = (evt) => {
    if (evt.keyCode == 27) {
      onClose()
    }
  }
  
  return open ? ReactDOM.createPortal((
    <Fragment>
      <ModalContent onKeyDown={keyDown}>
        {children}
      </ModalContent>
      <ModalContainer onClick={onClose} onKeyDown={keyDown} />
    </Fragment>
  ), document.body) : null
}

ModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
}

export default ModalComponent
