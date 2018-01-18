import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import todoType from 'types/todo'

import TodoList from 'components/TodoList'

import {
  makeSelectTodos,
} from 'redux/selectors/todos'

import {
  completeTodo,
  deleteTodo,
} from 'redux/ducks/todos'

function AllToDos(props) {
  const {
    handleComplete,
    handleDelete,
    todos,
  } = props

  return (
    <div>
      <TodoList
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        handleEdit={console.log}
        todos={todos}
      />
    </div>
  )
}

AllToDos.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.listOf(todoType).isRequired,
}

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
})

const mapDispatchToProps = {
  handleComplete: completeTodo,
  handleDelete: deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllToDos)
