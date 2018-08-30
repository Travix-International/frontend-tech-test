import {connect} from 'react-redux'
import {createTask} from '../actions/task_actions'
import CompleteTasks from '../components/CompleteTasks'

const mapStateToProps = ({completeTasks}) => ({
  completeTasks: completeTasks.tasks,
  error: completeTasks.error
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)(dispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTasks)
