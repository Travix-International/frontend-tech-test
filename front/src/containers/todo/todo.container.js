import ToDoComponent from './todo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getItems } from '../../modules/todo/actions/getItems'
import { insertOrUpdateItem } from '../../modules/todo/actions/insertOrUpdateItem'
import { deleteItem } from '../../modules/todo/actions/deleteItem'

const mapStateToProps = ({items}) => ({items})

const mapDispatchToProps = dispatch => bindActionCreators({
  getItems,
  insertOrUpdateItem,
  deleteItem
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoComponent)
