import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import todoType from 'types/todo'

import {
  Container,
} from 'components/Grid'

import styles from './TodoList.css'
import TodoRow from './TodoRow'

function TodoList(props) {
  const {
    handleComplete,
    handleDelete,
    todos,
  } = props

  return (
    <Container isFluid>
      <ul className={styles.todoList}>
        {todos.map((todo) => {
          const id = Map({ id: todo.get('id') })
          const _handleComplete = () => handleComplete(id)
          const _handleDelete = () => handleDelete(id)

          return (
            <TodoRow
              key={id}
              handleComplete={_handleComplete}
              handleDelete={_handleDelete}
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
  todos: ImmutablePropTypes.listOf(todoType),
}

export default TodoList
