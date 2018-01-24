import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { is } from 'immutable'

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
  completeTodo,
  deleteTodo,
  loadTodos,
} from 'redux/ducks/todos'

// eslint-disable-next-line react/prefer-stateless-function
class ToDos extends React.Component {
  componentWillMount() {
    const { requestTodos } = this.props

    requestTodos()
  }

  shouldComponentUpdate(nextProps) {
    const { props } = this

    return !is(nextProps.todos, props.todos) || !is(nextProps.match, props.match)
  }

  render() {
    const {
      handleComplete,
      handleDelete,
      handleSubmit,
      match: { params } = { params: {} },
      todos,
    } = this.props

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
          todos={todos}
        />
      </div>
    )
  }
}

ToDos.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  match: matchType,
  requestTodos: PropTypes.func,
  todos: ImmutablePropTypes.listOf(todoType).isRequired,
}

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
})

const mapDispatchToProps = {
  handleComplete: completeTodo,
  handleSubmit: addTodo,
  handleDelete: deleteTodo,
  requestTodos: loadTodos,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDos)
export { ToDos }
