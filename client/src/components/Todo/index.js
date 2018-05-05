import React from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

import TodoAddForm from 'components/TodoAddForm'
import TodoList from 'components/TodoList'
import { ButtonTypes } from 'common/constants'
import './styles.less'

const Todo = ({
  addTodoRequest,
  deleteTodoRequest,
  editTodoRequest,
  toggleEditMode,
  editedTodoId,
  fetchTodoListRequest,
  todoList,
  pages
}) => (
  <div className="container">
    <TodoAddForm onSubmit={addTodoRequest} type={ButtonTypes.ADD} />
    <TodoList
      editedTodoId={editedTodoId}
      todoList={todoList}
      deleteTodoRequest={deleteTodoRequest}
      editTodoRequest={editTodoRequest}
      toggleEditMode={toggleEditMode}
    />
    <ReactPaginate
      nextLabel={'next'}
      breakLabel={<a href="">...</a>}
      breakClassName={'break-me'}
      pageCount={pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={fetchTodoListRequest}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  </div>
)

Todo.propTypes = {
  addTodoRequest: PropTypes.func.isRequired,
  deleteTodoRequest: PropTypes.func.isRequired,
  editTodoRequest: PropTypes.func.isRequired,
  fetchTodoListRequest: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  editedTodoId: PropTypes.string.isRequired,
  todoList: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired
}

export default Todo
