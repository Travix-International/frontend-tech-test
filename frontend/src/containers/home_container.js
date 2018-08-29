import {connect} from 'react-redux'
import {getAllTasks} from '../actions/task_actions'
import HomeComponent from '../components/Home'

const mapStateToProps = ({loader}) => ({
  fetching: loader.fetching,
  error: loader.error
})

const mapDispatchToProps = (dispatch) => ({
  getAllTasks: () => dispatch(getAllTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
