import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import {
  Container,
  styles as globalStyles,
} from '@wepow/aphrodite'

import todoType from 'types/todo'

import styles from './TodoList.css'
import TodoRow from './TodoRow'

function TodoList(props) {
  const {
    handleComplete,
    handleDelete,
    handleEdit,
    todos,
  } = props

  const classes = `${styles.todoList} ${globalStyles.typography}`

  return (
    <Container isFluid>
      <ul className={classes}>
        {todos.map((todo) => {
          const id = todo.get('id')
          const _handleComplete = () => handleComplete({ id })
          const _handleDelete = () => handleDelete({ id })
          const _handleEdit = () => handleEdit({ id })

          return (
            <TodoRow
              key={id}
              handleComplete={_handleComplete}
              handleDelete={_handleDelete}
              handleEdit={_handleEdit}
              todo={todo}
            />
          )
        })}
      </ul>
    </Container>
  )
}

TodoList.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.listOf(todoType),
}

export default TodoList
