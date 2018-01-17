import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import { styles as globalStyles } from '@wepow/aphrodite'

import todoType from 'types/todo'

import styles from './TodoList.css'
import TodoRow from './TodoRow'

function TodoList(props) {
  const {
    handleComplete,
    handleDelete,
    todos,
  } = props

  const classes = `${styles.todoList} ${globalStyles.typography}`

  return (
    <ul className={classes}>
      {todos.map((todo) => {
        const _handleComplete = () => handleComplete(todo.get('id'))
        const _handleDelete = () => handleDelete(todo.get('id'))

        return (
          <TodoRow
            key={todo.get('id')}
            handleComplete={_handleComplete}
            handleDelete={_handleDelete}
            todo={todo}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.listOf(todoType),
}

export default TodoList
