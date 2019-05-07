import { connect } from 'react-redux';
import { getVisibleTasksArray } from '../selectors/taskSelectors';
import { 
  fetchAllTasks, 
  editTaskAction, 
  deleteTaskAction, 
  toggleTaskAction 
} from '../actions/apiActions';
import { TaskList } from '../components/TaskList';


const mapStateToProps = state => ({
  tasks: getVisibleTasksArray(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  onSubmitTask: task => {
    const { id, title, description } = task;
    return dispatch(editTaskAction(id, title, description));
  },
  onToggleTask: id => dispatch(toggleTaskAction(id)),
  onDeleteTask: id => dispatch(deleteTaskAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);