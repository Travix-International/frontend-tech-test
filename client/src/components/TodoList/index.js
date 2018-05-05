import React from 'react'
import PropTypes from 'prop-types'

import TodoEditForm from 'components/TodoEditForm'
import TodoListItem from 'components/TodoListItem'
import { ButtonTypes } from 'common/constants'

const TodoList = ({
  deleteTodoRequest,
  editTodoRequest,
  toggleEditMode,
  editedTodoId,
  todoList
}) =>
  todoList.map(
    todo =>
      todo.id === editedTodoId ? (
        <TodoEditForm
          key={editedTodoId}
          onSubmit={editTodoRequest}
          initialValues={todo}
          type={ButtonTypes.EDIT}
        />
      ) : (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deleteTodoRequest={deleteTodoRequest}
          editTodoRequest={editTodoRequest}
          toggleEditMode={toggleEditMode}
        />
      )
  )

TodoList.propTypes = {
  deleteTodoRequest: PropTypes.func.isRequired,
  editTodoRequest: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  editedTodoId: PropTypes.string.isRequired,
  todoList: PropTypes.array.isRequired
}

export default TodoList
