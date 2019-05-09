import { connect } from 'react-redux';
import { addTaskAction } from '../actions/apiActions';
import { Footer } from '../components/Footer';

/**
 * Maps addTaskAction to the related component
 */
const mapDispatchToProps = dispatch => ({
  createTask: task => {
    const { title, description } = task;
    return dispatch(addTaskAction(title, description));
  }
});

export default connect(undefined, mapDispatchToProps)(Footer);