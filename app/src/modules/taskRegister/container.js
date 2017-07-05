import { connect } from 'react-redux';
import component from './component';
import {
  taskSave
} from './actions';

const mapStateToProps = (state, ownProps) => {
  const task = state.main.tasks[ownProps.match.params.id];
  return {
    task,
    isFetching: state.main.isFetching
  };
};

const mapDispatchToProps = ({
  taskSave
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
