import React from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Button,
  Row,
  Col,
  Container,
  styles as globalStyles,
} from '@wepow/aphrodite'

import styles from './AddTodoForm.css'

function AddTodoForm(props) {
  const legend = 'Create New Todo'
  const titleLabel = 'Title'
  const descriptionLabel = 'Description'
  const saveButton = 'Add Todo'

  const { handleSubmit } = props

  console.log('RENDERED')

  return (
    <form className={globalStyles.typography} onSubmit={handleSubmit}>
      <fieldset className={styles.addTodoForm}>
        <h1 className={globalStyles.heading1}>{legend}</h1>

        <Container isFluid tagName="ul">
          <Row middle="xs" start="xs" tagName="li" top="xs">
            <Col tagName="span" xs={3}>
              {titleLabel}
            </Col>

            <Col tagName="span" xs={9}>
              <Input
                isBlock
                isDark
                name="title"
                placeholder="Do a To-Do app!"
                type="text"
              />
            </Col>
          </Row>

          <Row middle="xs" start="xs" tagName="li" top="xs">
            <Col tagName="span" xs={3}>
              {descriptionLabel}
            </Col>

            <Col tagName="span" xs={9}>
              <Input
                isBlock
                isDark
                name="description"
                placeholder="Make it all pretty and shinny!"
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
  )
}

AddTodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default AddTodoForm
