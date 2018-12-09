import actionTypes from "../constants/actionTypes";
import appConstants from '../constants/appConstants';
import HELPER from './helper';

// initial state of the application
export const initialState = {
  userid: '',
  currentTab: appConstants.DEFAULTS.TAB,
  fetchingAllData: false,
  fetchingDoneData: false,
  fetchingPendingData: false,
  allCount: 0,
  doneCount: 0,
  pendingCount: 0,
  allTasks: [],
  doneTasks: [],
  pendingTasks: [],
  error: '',
  appErrorStatus: -1
};


/**
 * @description reducer function
 * @param {Object} state current state of the application
 * @param {Object} action action received by the store.
 * @returns {Object} next state of the application.
 */
export const appData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_DATA.REGISTER_USER_SUCCESS:
      return {
        ...state,
        userid: action.id
      };
    case actionTypes.UPDATE_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.tab
      }
    case actionTypes.APP_DATA.FETCH_APP_DATA_START:
      return HELPER.startFetchingFlag (state, action.tab);
    case actionTypes.APP_DATA.FETCH_APP_DATA_SUCCESS:
      return {
        ...state,
        fetchingAllData: false,
        allCount: action.data.allCount,
        allTasks: action.data.tasks,
        doneCount: action.data.doneCount,
        pendingCount: action.data.pendingCount
      };
    case actionTypes.APP_DATA.FETCH_APP_DATA_FAILED:
    case actionTypes.APP_DATA.FETCH_TAB_DATA_FAILED:
      return {
        ...state,
        fetchingAllData: false,
        fetchingDoneData: false,
        fetchingPendingData: false,
        error: action.error,
        appErrorStatus: action.status
      }
    case actionTypes.APP_DATA.FETCH_TAB_DATA_SUCCESS:
      return HELPER.fetchTabDataSuccess (state, action.tab, action.data.tasks, action.isPagination);
    
    case actionTypes.APP_DATA.UPDATE_COUNT:
      return {
        ...state,
        allCount: action.allCount,
        doneCount: action.doneCount,
        pendingCount: action.pendingCount
      }
    case actionTypes.APP_DATA.UPDATE_BUCKETS:
      return HELPER.updateBuckets (state, action.task);
    case actionTypes.APP_DATA.ADD_IN_BUCKETS:
      return {
        ...state,
        allCount: state.allCount + 1,
        pendingCount: state.pendingCount + 1,
        allTasks: [
          action.task,
          ...state.allTasks
        ],
        pendingTasks: [
          action.task,
          ...state.pendingTasks
        ]
      }
    case actionTypes.APP_DATA.REMOVE_FROM_BUCKET:
      return HELPER.removeFromBucket (state, action.id, action.isComplete);
    default:
      return state;
  }
};
