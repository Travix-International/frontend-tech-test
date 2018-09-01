import {connect} from 'react-redux'
import {createTask, updateTask, unselectTask} from '../actions/task_actions'
import {AddEditTaskComponent} from 'components'

const mapStateToProps = ({loader}) => ({
  selectOrCreate: loader.selectOrCreate,
  selectedTask: loader.selectedTask
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  unselectTask: () => dispatch(unselectTask())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditTaskComponent)
