
import React from 'react';
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
import { withSpinner } from '../components/withSpinner';

/**
 * Maps the related state data and actions to list. 
 * The list displays tasks or search results
 */

const mapStateToProps = state => ({
  // shows search results or all tasks
  tasks:  !!getSearchQuery(state) 
    ? getSearchTasks(state)
    : getVisibleTasksArray(state),
  isPending: isPending('fetchAllTasks')(state)
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

const ListContainer = props => {
  const { children, ...rest } = props;
  return (
    <React.Fragment>
      { children }
      <TaskList { ...rest } />
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withSpinner(ListContainer));