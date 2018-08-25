import { connect } from 'react-redux'
import { List } from '../../components/List'
import * as actions from '../../store/actions'

const mapStateToProps = state => ({
  selectedTask: state.tasks.selectedTask,
})

const mapDispatchToProps = dispatch => ({
  selectTask: id => dispatch(actions.selectTask(id)),
  deleteTask: id => dispatch(actions.deleteTask(id)),
  saveTask: (id, title, desc) => dispatch(actions.editTask(id, title, desc)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
