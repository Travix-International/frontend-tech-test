import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import PropTypes from 'prop-types'

import {
  Col,
  Container,
  Row,
} from 'components/Grid'
import Button from 'components/Button'
import Input from 'components/Input'

import {
  required,
  length,
  makeValidate,
} from 'utils/formValidations'

import styles from './AddTodoForm.css'

function AddTodoForm(props) {
  const titleLabel = 'New todo title:'
  const titlePlaceholder = 'Create a todo application.'
  const descriptionLabel = 'New todo description:'
  const descriptionPlaceholder = 'Use react, redux, sagas, jest, webpack...'
  const saveButton = 'Add new todo'

  const { handleSubmit } = props

  return (
    <Container isFluid>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.addTodoForm}>
          <Container isFluid tagName="ul">
            <Row middle="xs" start="xs" tagName="li" top="xs">
              <Col tagName="span" xs={3}>
                {titleLabel}
              </Col>

              <Col tagName="span" xs={9}>
                <Field
                  component={Input}
                  isBlock
                  isDark
                  name="title"
                  placeholder={titlePlaceholder}
                  type="text"
                />
              </Col>
            </Row>

            <Row middle="xs" start="xs" tagName="li" top="xs">
              <Col tagName="span" xs={3}>
                {descriptionLabel}
              </Col>

              <Col tagName="span" xs={9}>
                <Field
                  component={Input}
                  isBlock
                  isDark
                  name="description"
                  placeholder={descriptionPlaceholder}
                  type="text"
                />
              </Col>
            </Row>
          </Container>

          <Container isFluid>
            <Row end="xs">
              <Button isBlock kind="primary" type="submit">{saveButton}</Button>
            </Row>
          </Container>
        </fieldset>
      </form>
    </Container>
  )
}

AddTodoForm.propTypes = {
  handleSubmit: PropTypes.func,
}

const validations = {
  title: [required(), length({ max: 25 })],
  description: [required()],
}

export default reduxForm({
  form: 'addTodo',
  touchOnBlur: false,
  validate: makeValidate(validations),
})(AddTodoForm)

export { AddTodoForm }
