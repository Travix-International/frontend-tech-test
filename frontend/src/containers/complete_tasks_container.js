import {connect} from 'react-redux'
import {selectOrCreateTask, deleteTask} from '../actions/task_actions'
import CompleteTasks from '../components/CompleteTasks'

const mapStateToProps = ({completeTasks}) => ({
  completeTasks: completeTasks.tasks
})

const mapDispatchToProps = (dispatch) => ({
  selectOrCreateTask: (task) => dispatch(selectOrCreateTask(task)),
  deleteTask: (task) => dispatch(deleteTask(task))

})

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTasks)
