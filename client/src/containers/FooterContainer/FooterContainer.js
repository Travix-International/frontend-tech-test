import {connect} from 'react-redux'
import {Footer} from '../../components/Footer'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(actions.addTask(task))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
