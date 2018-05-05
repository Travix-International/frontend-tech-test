import React from 'react'
import PropTypes from 'prop-types'

import './styles.less'

class TodoListItem extends React.PureComponent {
  deleteTodoRequest = e => {
    const { id } = this.props.todo

    this.props.deleteTodoRequest({ id })
  }

  toggleEditMode = () => {
    const { id } = this.props.todo

    this.props.toggleEditMode({ editedTodoId: id })
  }

  render() {
    const { todo } = this.props

    return (
      <div className="item-container" onDoubleClick={this.toggleEditMode}>
        <div className="item-container-info-section">
          <h2>{todo.title}</h2>
          <div>{todo.description}</div>
        </div>
        <span className="delete-btn" onClick={this.deleteTodoRequest}>
          &#215;
        </span>
      </div>
    )
  }
}

TodoListItem.propTypes = {
  deleteTodoRequest: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })
}

export default TodoListItem
