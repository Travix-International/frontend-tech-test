import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../../../components/input'
import ButtonComponent from '../../../components/button'

const ModalContainer = styled.div`
  width: 35vw;

  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`
const Title = styled.h1`
  font-size: 2rem;
  color: #707070;
  text-align:center;
  font-weight: 600;
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`
const Button = styled(ButtonComponent)`
  left: 50%;
  position: relative;
  transform: translateX(-50%);
`

const ModalTodo = ({values, onSave, onChangeInput}) => {

  return (
    <ModalContainer>
      <Title>Add/Edit ToDo</Title>
      <InputsContainer>
        <Input label={'Title'} value={values.title} onChange={onChangeInput('title')}/>
        <Input label={'Description'} value={values.description} onChange={onChangeInput('description')}/>
      </InputsContainer>
      <Button onClick={onSave} >Add/Update</Button>
    </ModalContainer>
  )
}

ModalTodo.propTypes = {
  values: PropTypes.object,
  onSave: PropTypes.func,
  onChangeInput: PropTypes.func,
}

export default ModalTodo
