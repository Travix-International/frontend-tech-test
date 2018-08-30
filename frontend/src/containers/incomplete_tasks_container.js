import {connect} from 'react-redux'
import {createTask} from '../actions/task_actions'
import IncompleteTasksComponent from '../components/incomplete_tasks'

const mapStateToProps = ({incompleteTasks}) => ({
  incompleteTasks: incompleteTasks.tasks,
  error: incompleteTasks.error
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)(dispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(IncompleteTasksComponent)
