import {connect} from 'react-redux'
import {List} from '../../components/List'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTask: id => dispatch(actions.selectTask(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
