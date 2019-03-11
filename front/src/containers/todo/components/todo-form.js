import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../../components/input'

import Title from '../../../components/title'
import Button from './button-form'
import ModalContainer from './modal-container'
import InputsContainer from './inputs-container'

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
