import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import todoType from 'types/todo'

import MainNav from 'components/MainNav'
import AddTodoForm from 'components/AddTodoForm'
import TodoList from 'components/TodoList'

import {
  makeSelectTodos,
} from 'redux/selectors/todos'

import {
  addTodo,
  editTodo,
  completeTodo,
  deleteTodo,
} from 'redux/ducks/todos'

function ToDos(props) {
  const {
    handleComplete,
    handleDelete,
    handleEdit,
    handleSubmit,
    todos,
  } = props

  function onSubmit(vals) {
    handleSubmit(vals)
  }

  return (
    <div>
      <MainNav />

      <AddTodoForm onSubmit={onSubmit} />

      <TodoList
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        todos={todos}
      />
    </div>
  )
}

ToDos.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.listOf(todoType).isRequired,
}

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
})

const mapDispatchToProps = {
  handleComplete: completeTodo,
  handleEdit: editTodo,
  handleSubmit: addTodo,
  handleDelete: deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDos)
export { ToDos }
