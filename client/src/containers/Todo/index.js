import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Todo from 'components/Todo'
import {
  addTodoRequest,
  deleteTodoRequest,
  editTodoRequest,
  fetchTodoListRequest,
  toggleEditMode
} from './actions'

const mapStateToProps = state => ({
  editedTodoId: state.todos.editedTodoId,
  todoList: state.todos.todoList,
  pages: state.todos.pages
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodoRequest,
      deleteTodoRequest,
      editTodoRequest,
      fetchTodoListRequest,
      toggleEditMode
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
