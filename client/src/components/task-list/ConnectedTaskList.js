import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateActions from '../../actions/update';
import TaskList from '.';
import actions from '../../actions';

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

const getUpdateErrorMessage = (error) => {
  if (!error) return "";
  if (typeof error === "string") {
    return error;
  } else {
    return error.message
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
    id: state.update.id,
    updateErrorMessage: getUpdateErrorMessage (state.update.error),
    isCreating: state.create.isCreating
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  updateTask: updateActions.updateTask,
  fetchTabData: actions.fetchTabDataIfNeeded
}, dispatch);

const ConnectedTaskList = connect (
  mapStateToProps,
  mapDispatchToProps
) (TaskList);

export default ConnectedTaskList;
