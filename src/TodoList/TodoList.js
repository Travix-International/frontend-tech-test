/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestTodos, updateTodo, addTodo } from 'SRC/actions'

import dummyTodos from './dummyTodos'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class TodosList extends React.Component {
  propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    })),
  }

  defaultProps = {
    todos: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      todos: props.todos || [],
    }
  }

  componentWillMount() {
    this.props.requestTodos() // eslint-disable-line
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ todos: nextProps.todos })
  }

  handleTodoToggle = (todo) => {

    this.props.updateTodo({
      ...todo,
      completed: !todo.completed,
    })
  }

  handleAddTodo = (todoTitle) => {
    this.props.addTodo({
      title: todoTitle
    })
  }

  render() {
    const { todos } = this.state

    let todosList = (todos||[])
      .reduce(
          (col, itm) => {
            if (itm.completed) {
              col.closed.push(itm)
            } else {
              col.open.push(itm)
            }
            return col
          },
          { open: [], closed: [] }
      )

    todosList = Object.entries(todosList)
      .reduce(
        (col, [k, v]) => {
          const elm = v.map((val) => (
            <TodoItem
              key={val.id}
              id={val.id}
              isComplete={val.completed}
              onClick={() => this.handleTodoToggle(val)}
              text={val.title}
            />
          ))

          if (k === 'open') {
            return [
              ...elm,
              ...col,
            ]
          }

          return [
            ...col,
            (<hr/>),
            ...elm,
          ]
        },
        []
      )


    return (
      <section className="Todo__List">
        <TodoInput onAdd={this.handleAddTodo} />
        {todosList}
      </section>
    )
  }
}

function mapStateToProps(store) {
  const { todosList} = store.Todos


  return {
    todos: todosList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestTodos,
    updateTodo,
    addTodo
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
