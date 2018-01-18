import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import todoType from 'types/todo'

import TodoList from 'components/TodoList'

import {
  makeSelectAllTodos,
} from 'redux/selectors/todos'

import {
  completeTodo,
} from 'redux/ducks/todos'

function AllToDos(props) {
  const {
    handleComplete,
    todos,
  } = props

  return (
    <div>
      <TodoList
        handleComplete={handleComplete}
        handleDelete={console.log}
        handleEdit={console.log}
        todos={todos}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  todos: makeSelectAllTodos(),
})

AllToDos.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.listOf(todoType).isRequired,
}

export default connect(mapStateToProps, {
  handleComplete: completeTodo,
})(AllToDos)
