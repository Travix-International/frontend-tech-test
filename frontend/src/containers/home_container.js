import {connect} from 'react-redux'
import {getAllTasks,
  selectOrCreateTask,
  deleteTask,
  unselectTask} from '../actions/task_actions'
import {HomeComponent} from 'components'

const mapStateToProps = ({loader}) => ({
  fetching: loader.fetching,
  error: loader.error,
  selectOrCreate: loader.selectOrCreate,
  selectedTask: loader.selectedTask
})

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks()),
  selectOrCreateTask: (task) => dispatch(selectOrCreateTask(task)),
  unselectTask: () => dispatch(unselectTask())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
