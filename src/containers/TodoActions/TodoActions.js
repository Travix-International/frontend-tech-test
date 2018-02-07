import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoButtons from '../../components/TodoButtons/';

import todoListActions from '../../actions/todoListActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTodo: todoListActions.deleteTodo,
  setEditMode: todoListActions.setEditMode
}, dispatch);

const TodoActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoButtons);

export default TodoActions;
