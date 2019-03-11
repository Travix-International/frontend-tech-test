import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../modal'
import Title from '../title'
import ModalContainer from './components/modal-container'
import Description from './components/description'

const ErrorComponent = ({isOpen, message}) => {
  return (
    <Modal open={isOpen} onClose={() => location.reload()}>
      <ModalContainer>
        <Title>Error!</Title>
        <Description>{message}</Description>
      </ModalContainer>
    </Modal>
  )
}

ErrorComponent.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  message: PropTypes.string
}

export default ErrorComponent
