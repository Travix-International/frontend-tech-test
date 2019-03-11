import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ModalContent from './components/modal-content'
import ModalContainer from './components/modal-container'

const KEY_ESC = 27

const ModalComponent = ({open, children, onClose}) => {

  const keyDown = (evt) => {
    if (evt.keyCode == KEY_ESC) {
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
