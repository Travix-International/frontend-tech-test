import { connect } from 'react-redux';
import { 
  getVisibleTasksArray, 
  getSearchQuery, 
  getSearchTasks 
} from '../selectors/taskSelectors';
import { 
  fetchAllTasks, 
  editTaskAction, 
  deleteTaskAction, 
  toggleTaskAction 
} from '../actions/apiActions';
import { isPending } from '../selectors/apiSelectors';
import { TaskList } from '../components/TaskList';
import withSpinner from '../components/withSpinner';


const mapStateToProps = state => ({
  tasks:  !!getSearchQuery(state) 
    ? getSearchTasks(state)
    : getVisibleTasksArray(state),
  isPending: isPending('fetchAllTasks')(state)
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchAllTasks()),
  onSubmitTask: task => {
    const { id, title, description } = task;
    return dispatch(editTaskAction(id, title, description));
  },
  onToggleTask: id => dispatch(toggleTaskAction(id)),
  onDeleteTask: id => dispatch(deleteTaskAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withSpinner(TaskList));