import React from 'react'
import PropTypes from 'prop-types'
import { is } from 'immutable'
import { Checkbox, Icon } from '@wepow/aphrodite'

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
      handleEdit,
      todo,
    } = this.props

    let classes = styles.todoRow

    classes = todo.get('done') ? `${classes} ${styles.completed}` : classes

    return (
      <li className={classes}>
        <div className={styles.checkBox}>
          <Checkbox
            input={{
              name: 'select',
              checked: todo.get('done'),
              onChange: handleComplete,
            }}
          />
        </div>

        <h1>{todo.get('title')}</h1>
        {todo.get('description')}

        <div className={styles.icons}>
          <Icon
            name="EDIT"
            onClick={handleEdit}
            onKeyDown={handleEdit}
            role="button"
            tabIndex={0}
          />

          {' '}

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
}

TodoRow.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  todo: todoType,
}

export default TodoRow
