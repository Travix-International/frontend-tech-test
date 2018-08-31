import {connect} from 'react-redux'
import {selectOrCreateTask, deleteTask} from '../actions/task_actions'
import CompleteAndIncompleteTasksComponent from '../components/CompleteAndIncompleteTasks'

const mapStateToProps = ({completeTasks}) => ({
  tasks: completeTasks.tasks,
  type: completeTasks.type
})

const mapDispatchToProps = (dispatch) => ({
  selectOrCreateTask: (task) => dispatch(selectOrCreateTask(task)),
  deleteTask: (task) => dispatch(deleteTask(task))

})

export default connect(mapStateToProps, mapDispatchToProps)(CompleteAndIncompleteTasksComponent)
