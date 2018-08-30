import {connect} from 'react-redux'
import {createTask, selectOrCreateTask} from '../actions/task_actions'
import IncompleteTasksComponent from '../components/incomplete_tasks'

const mapStateToProps = ({incompleteTasks}) => ({
  incompleteTasks: incompleteTasks.tasks
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)(dispatch)),
  selectOrCreateTask: (task) => dispatch(selectOrCreateTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(IncompleteTasksComponent)
