import { connect } from 'react-redux';
import component from './component';
import {
  taskList, taskDelete
} from './actions';

const mapStateToProps = state => ({
  main: state.main,
  tasks: state.main.tasks,
  isFetching: state.main.isFetching,
  notification: state.main.notification
});

const mapDispatchToProps = ({
  taskList,
  taskDelete
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
