import React from 'react'
import PropTypes from 'prop-types'
import { is } from 'immutable'
import {
  Checkbox,
  Col,
  Icon,
  Row,
} from '@wepow/aphrodite'

import todoType from 'types/todo'

import styles from './TodoList.css'

class TodoRow extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { props } = this
    return !is(nextProps.todo, props.todo)
  }

  render() {
    const {
      handleComplete,
      handleDelete,
      todo,
    } = this.props

    let classes = styles.todoRow

    classes = todo.get('done') ? `${classes} ${styles.completed}` : classes

    return (
      <Row className={classes} middle="xs" tagName="li" top="xs">
        <Col xs={1}>
          <Checkbox
            input={{
              name: 'select',
              checked: todo.get('done'),
              onChange: handleComplete,
            }}
          />
        </Col>

        <Col xs={10}>
          <h1>{todo.get('title')}</h1>
          {todo.get('description')}
        </Col>

        <Col className={styles.actions} xs={1}>
          <Icon
            name="DELETE"
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          />
        </Col>
      </Row>
    )
  }
}

TodoRow.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todo: todoType,
}

export default TodoRow
