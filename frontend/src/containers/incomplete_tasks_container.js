import {connect} from 'react-redux'
import {selectOrCreateTask, deleteTask} from '../actions/task_actions'
import IncompleteTasksComponent from '../components/incomplete_tasks'

const mapStateToProps = ({incompleteTasks}) => ({
  incompleteTasks: incompleteTasks.tasks
})

const mapDispatchToProps = (dispatch) => ({
  selectOrCreateTask: (task) => dispatch(selectOrCreateTask(task)),
  deleteTask: (task) => dispatch(deleteTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(IncompleteTasksComponent)
