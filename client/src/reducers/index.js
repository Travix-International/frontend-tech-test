import actionTypes from "../constants/actionTypes";

// initial state of the application
export const initialState = {
  fetchingAllData: false
};


/**
 * @description reducer function
 * @param {Object} state current state of the application
 * @param {Object} action action received by the store.
 * @returns {Object} next state of the application.
 */
export const appData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_DATA.FETCH_APP_DATA_START:
      return {
        ...state,
        fetchingAllData: true
      };
    case actionTypes.APP_DATA.FETCH_APP_DATA_SUCCESS:
      return {
        ...state,
        fetchingAllData: false,
        allCount: action.data.allCount,
        allTasks: action.data.tasks,
        doneCount: action.data.doneCount,
        pendingCount: action.data.pendingCount
      };
    default:
      return state;
  }
};
