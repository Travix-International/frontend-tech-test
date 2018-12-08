const HELPER = {
  /**
   * @description updates fetching flag for given tab.
   * @param {Object} state current state
   * @param {Number} tab current tab
   */
  startFetchingFlag (state, tab) {
    switch (tab) {
      case 0:
        return {
          ...state,
          currentTab: tab,
          fetchingAllData: true
        };
      case 1:
        return {
          ...state,
          currentTab: tab,
          fetchingPendingData: true
        };
      case 2:
        return {
          ...state,
          currentTab: tab,
          fetchingDoneData: true
        };
      default:
        return state;
    }
  },

  /**
   * @description Updates the task list of given tab.
   * @param {Object} state current state
   * @param {Number} tab current tab
   * @param {Array} tasks list of tasks
   * @param {Boolean} isPagination 
   */
  fetchTabDataSuccess (state, tab, tasks, isPagination) {
    switch (tab) {
      case 0:
        return {
          ...state,
          fetchingAllData: false,
          allTasks: isPagination ? [...state.allTasks, ...tasks] : tasks.slice ()
        }
      case 1:
        return {
          ...state,
          fetchingPendingData: false,
          pendingTasks: isPagination ? [...state.pendingTasks, ...tasks] : tasks.slice ()
        }
      case 2:
        return {
          ...state,
          fetchingDoneData: false,
          doneTasks: isPagination ? [...state.doneTasks, ...tasks] : tasks.slice ()
        }
      default:
        return state;
    }
  }
};

export default HELPER;
