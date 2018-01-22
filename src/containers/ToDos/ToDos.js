import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import todoType from 'types/todo'
import matchType from 'types/match'

import AddTodoForm from 'containers/AddTodoForm'

import MainNav from 'components/MainNav'
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
    match: { params } = { params: {} },
    todos,
  } = props

  function onSubmit(vals) {
    handleSubmit(vals)
  }

  return (
    <div>
      <MainNav filter={params.filter} />

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
  match: matchType,
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
