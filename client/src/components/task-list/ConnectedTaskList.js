import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskList from '.';


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
    tasks
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({

}, dispatch);

const ConnectedTaskList = connect (
  mapStateToProps,
  mapDispatchToProps
) (TaskList);

export default ConnectedTaskList;
