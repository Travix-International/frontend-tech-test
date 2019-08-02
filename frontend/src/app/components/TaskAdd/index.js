import { connect } from 'react-redux';
import Actions from '../../redux/Actions';
import TaskAdd from './TaskAdd';

const mapStateToProps = state => ({
  task: state.task
});

const mapDispatchToProps = dispatch => ({
  setDraft: task => dispatch(Actions.task.setDraft(task)),
  clearDraft: () => dispatch(Actions.task.clearDraft())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskAdd);
