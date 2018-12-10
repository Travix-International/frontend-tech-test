/**
 * @fileoverview Connector: connects Task List component with the store.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateActions from '../../actions/update';
import TaskList from '.';
import actions from '../../actions';
import deleteActions from '../../actions/delete';

/**
 * @description function determines whether for the current
 * tab, the data is present or is being fetched. Also, it returns
 * the relevant data based on current tab's value;
 * @param {Object} state current state of the application
 */
const getTaskData = (state) => {
  const { currentTab,
          fetchingAllData,
          allTasks,
          fetchingDoneData,
          doneTasks,
          fetchingPendingData,
          pendingTasks } = state.appData;
  let isFetching = false, tasks = [];
  switch (currentTab) {
    case 0:
      isFetching = fetchingAllData;
      tasks = allTasks;
      break;
    case 1:
      isFetching = fetchingPendingData;
      tasks =  pendingTasks;
      break;
    case 2:
      isFetching = fetchingDoneData;
      tasks = doneTasks;
      break;
    default:
      break;
  }
  return {
    isFetching,
    tasks
  }
}

const mapStateToProps = state => {
  const { isFetching, tasks } = getTaskData (state)
  return {
    currentTab: state.appData.currentTab,
    isFetching,
    tasks,
    appErrorStatus: state.appData.appErrorStatus,
    isUpdating: state.update.isUpdating,
    id: state.update.id || state.destroy.id,
    isCreating: state.create.isCreating,
    isDeleting: state.destroy.isDeleting
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  updateTask: updateActions.updateTask,
  fetchTabData: actions.fetchTabDataIfNeeded,
  editThisTask: updateActions.editThisTask,
  deleteTask: deleteActions.deleteTask
}, dispatch);

const ConnectedTaskList = connect (
  mapStateToProps,
  mapDispatchToProps
) (TaskList);

export default ConnectedTaskList;
