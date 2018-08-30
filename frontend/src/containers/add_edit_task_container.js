import {connect} from 'react-redux'
import {createTask, updateTask, unselectTask} from '../actions/task_actions'
import AddEditTaskComponent from '../components/AddEditTask'

const mapStateToProps = ({loader}) => ({
  selectOrCreate: loader.selectOrCreate,
  selectedTask: loader.selectedTask
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task, dispatch)),
  updateTask: (task) => dispatch(updateTask(task, dispatch)),
  unselectTask: () => dispatch(unselectTask())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditTaskComponent)
