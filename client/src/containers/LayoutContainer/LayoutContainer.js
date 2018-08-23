import {connect} from 'react-redux'
import {Layout} from '../../components'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const {tasks, err, loading} = state.tasks
  return {tasks, err, loading}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(actions.fetchTasks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
