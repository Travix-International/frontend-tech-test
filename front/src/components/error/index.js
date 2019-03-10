import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../modal'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2rem;
  color: #707070;
  margin: 1.5rem;
  font-weight: 600;
`

const Descriptions = styled.p`
  font-size: 1.5rem;
  color: #707070;
`

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

const ErrorComponent = ({isOpen, message}) => {
  return (
    <Modal open={isOpen} onClose={() => location.reload()}>
      <ModalContainer>
        <Title>Error!</Title>
        <Descriptions>{message}</Descriptions>
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
