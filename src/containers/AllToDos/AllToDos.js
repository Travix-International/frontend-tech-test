import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import todoType from 'types/todo'

import TodoList from 'components/TodoList'

import {
  makeSelectAllTodos,
} from 'redux/selectors/todos'

function AllToDos(props) {
  const {
    todos,
  } = props

  return (
    <div>
      <TodoList
        handleComplete={console.log}
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
  todos: ImmutablePropTypes.listOf(todoType).isRequired,
}

export default connect(mapStateToProps, null)(AllToDos)
