import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ContainerSpinner from './components/container-spinner'
import Square from './components/square'
import ModalContainer from './components/modal-container'

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
