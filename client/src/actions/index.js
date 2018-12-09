import actionTypes from "../constants/actionTypes";
import axios from "axios";
import appConstants from "../constants/appConstants";

/**
 * @description updates the current tab.
 * @param {Number} tab current tab
 */
const updateCurrentTab = tab => ({
  type: actionTypes.UPDATE_CURRENT_TAB,
  tab
});

/**
 * @description updates the count of tasks in all categories.
 * @param {Object} data contains count data
 */
const updateTaskCounts = data => ({
  type: actionTypes.APP_DATA.UPDATE_COUNT,
  doneCount: data.doneCount,
  pendingCount: data.pendingCount,
  allCount: data.allCount
});

/**
 * @desc action creator: indicates fetch has started.
 * @param {Number} tab current tab index.
 */
const fetchAppDataStart = tab => ({
  type: actionTypes.APP_DATA.FETCH_APP_DATA_START,
  tab
});

/**
 * @description action creator: indicates fetch has successfully finished.
 * @param {Object} data received from the success call.
 * @param {Number} tab current tab
 */
const fetchAppDataSuccess = (data, tab) => ({
  type: actionTypes.APP_DATA.FETCH_APP_DATA_SUCCESS,
  tab,
  data
});

/**
 * @description action creator: indicates fetch has successfully finished.
 * Using a different action here to separate actions, like pagination, tasks counts
 * @param {Object} data received from the success call.
 * @param {Number} tab current tab
 */
const fetchTabDataSuccess = (data, tab) => ({
  type: actionTypes.APP_DATA.FETCH_TAB_DATA_SUCCESS,
  data,
  tab
})

/**
 * @description action creator: indicates fetch has failed to load.
 * @param {Object} error 
 * @param {Number} status 
 */
const fetchAppDataFailed = (error, status) => ({
  type: actionTypes.APP_DATA.FETCH_APP_DATA_FAILED,
  error,
  status
});


/**
 * @description function determines if the data for this tab needs to 
 * be fetched. It's used in case of tab switching. In case of pagination,
 * data will always be fetched.
 * @param {Object} state current state of the application
 * @param {Number} currentTab selected tab
 */
const hasDataForCurrentTab = (state, currentTab) => {
  let shouldFetch = false;
  const { allTasks, doneTasks, pendingTasks } = state.appData;
  switch (currentTab) {
    case 0:
      shouldFetch = (allTasks.length < appConstants.DEFAULTS.DATA_LIMIT);
      break;
    case 1:
      shouldFetch = (pendingTasks.length < appConstants.DEFAULTS.DATA_LIMIT);
      break;
    case 2:
      shouldFetch = (doneTasks.length < appConstants.DEFAULTS.DATA_LIMIT);
      break;
    default:
      break;
  }
  return shouldFetch;
}

const actions = {
  /**
   * @description function executes as on app mount.
   * It fetches the inital data.
   * - tasks counts for all tabs.
   * - all tasks for the current tab => all tasks [first tab]
   */
  fetchAppData () {
    return dispatch => {
      dispatch (fetchAppDataStart (0));
      
      const url = appConstants.API.FETCH_APP_DATA
                    .replace ('__limit__', appConstants.DEFAULTS.DATA_LIMIT)
      return axios.get (url)
        .then (response => {
          if (response.status === 200) {
            dispatch (fetchAppDataSuccess (response.data.data, 0));
          } else {
            throw new Error ("Test");
          }
        }).catch (error => {
          dispatch (fetchAppDataFailed (error.response.data, error.response.status));
        });
    }
  },

  /**
   * @description function determines whether to send an api call to fetch data
   * for the given tab.
   * 1. in case of pagination always fetch data,
   * 2. otherwise, if it's just a tab switch, check if for the given tab
   *    data exists, if not send an api call.
   * @param {Number} tab current tab
   * @param {Number} page current page
   * @param {Number} limit no of records per call
   * @param {Boolean} pagination indicates whether pagination is active
   */
  fetchTabDataIfNeeded (tab, page, limit, pagination) {
    return (dispatch, getState) => {
      const currentState = getState ();
      const shouldFetch = hasDataForCurrentTab (currentState, tab);
      if (shouldFetch || pagination) {
        dispatch (fetchAppDataStart (tab));
        const type = (tab === 0) ? '' : ((tab === 1) ? 'P' : 'C')
        const url = appConstants.API.FECTH_TAB_DATA
                      .replace ('__limit__', appConstants.DEFAULTS.DATA_LIMIT)
                      .replace ('__page__', (page || 1))
                      .replace ('__type__', type)
        return axios.get (url)
        .then (response => {
          if (response.status === 200) {
            dispatch (fetchTabDataSuccess (response.data.data, tab));
          } else {
            throw new Error ("Test");
          }
        }).catch (error => {
          dispatch (fetchAppDataFailed (error.response.data, error.response.status));
        });
      } else {
        dispatch (updateCurrentTab (tab));
      }
    }
  },

  /**
   * @description function to dispatch action to update counts.
   * @param {Object} data count data
   */
  updateCount (data) {
    return updateTaskCounts (data);
  },

  /**
   * @description function to update buckets.
   * @param {Object} data from the server 
   */
  updateBuckets (data) {
    return ({
      type: actionTypes.APP_DATA.UPDATE_BUCKETS,
      task: data.task
    });
  },

  /**
   * @description add in pending and all tasks.
   * @param {Object} data from the server
   */
  addInBuckets (data) {
    return ({
      type: actionTypes.APP_DATA.ADD_IN_BUCKETS,
      task: data.task
    });
  }
}

export default actions;
