import actionTypes from "../constants/actionTypes";
import appConstants from '../constants/appConstants';
import HELPER from './helper';

// initial state of the application
export const initialState = {
  currentTab: appConstants.DEFAULTS.TAB,
  fetchingAllData: false,
  allCount: 0,
  doneCount: 0,
  pendingCount: 0,
  allTasks: [],
  doneTasks: [],
  pendingTasks: []
};


/**
 * @description reducer function
 * @param {Object} state current state of the application
 * @param {Object} action action received by the store.
 * @returns {Object} next state of the application.
 */
export const appData = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.APP_DATA.FETCH_TAB_DATA_SUCCESS:
      return HELPER.fetchTabDataSuccess (state, action.tab, action.data.tasks, action.isPagination);
    default:
      return state;
  }
};
