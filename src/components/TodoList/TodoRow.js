import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Icon } from '@wepow/aphrodite'

import todoType from 'types/todo'

import styles from './TodoList.css'

function TodoRow(props) {
  const {
    handleComplete,
    handleDelete,
    todo,
  } = props

  return (
    <li className={styles.todoRow}>
      <div className={styles.checkBox}>
        <Checkbox
          isChecked={todo.get('done')}
          onChange={handleComplete}
        />
      </div>

      <h1>{todo.get('title')}</h1>
      {todo.get('description')}

      <div className={styles.icon}>
        <Icon
          name="DELETE"
          onClick={handleDelete}
          onKeyDown={handleDelete}
          role="button"
          tabIndex={0}
        />
      </div>
    </li>
  )
}

TodoRow.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todo: todoType,
}

export default TodoRow
