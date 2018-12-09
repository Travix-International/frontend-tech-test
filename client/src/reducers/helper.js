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
          allTasks: this.appendAndMergeList (state.allTasks, tasks)
        }
      case 1:
        return {
          ...state,
          fetchingPendingData: false,
          pendingTasks: this.appendAndMergeList (state.pendingTasks, tasks)
        }
      case 2:
        return {
          ...state,
          fetchingDoneData: false,
          doneTasks: this.appendAndMergeList (state.doneTasks, tasks)
        }
      default:
        return state;
    }
  },

  /**
   * @description update all buckets based on status of the current task.
   * @param {Object} state current state of the application
   * @param {Object} task 
   */
  updateBuckets (state, task) {
    let allTasks = state.allTasks.map (item => {
      if (item.id === task.id) {
        item = task;
      }
      return item;
    });

    let doneTasks = [],
        pendingTasks = [];
    if (task.isCompleted) {
      doneTasks = [
        ...state.doneTasks,
        task
      ];
      pendingTasks = state.pendingTasks.filter (item => item.id !== task.id)
    } else {
      pendingTasks = [
        ...state.pendingTasks,
        task
      ];
      doneTasks = state.doneTasks.filter (item => item.id !== task.id)
    }

    return {
      ...state,
      doneTasks,
      allTasks,
      pendingTasks
    }
  },

  /**
   * @description function to append and merge two lists.
   * The items containing in the first list will be rejected from
   * the second list and then concat both list.
   * @param {Array} topList first list that remains at the top.
   * @param {Array} bottomList bottom list.
   */
  appendAndMergeList (topList, bottomList) {
    if (!topList.length) {
      return bottomList;
    }
    // create new bottom list, reject the one which appears
    // in the top list.
    bottomList = bottomList.reduce ((acc, bottomItem) => {
      if (!topList.filter (topItem => topItem.id === bottomItem.id).length) {
        acc.push (bottomItem);
      }
      return acc;
    }, []);
    return [
      ...topList,
      ...bottomList
    ]
  },

  /**
   * @description function to remove from the bucket and update the count.
   * @param {Object} state current state of the application
   * @param {String} id 
   * @param {Boolean} isComplete to choose the correct bucket
   */
  removeFromBucket (state, id, isComplete) {
    let allTasks = state.allTasks.filter (item => item.id !== id);
    let allCount = state.allCount - 1;
    if (isComplete) {
      return {
        ...state,
        allTasks,
        allCount,
        doneTasks: state.doneTasks.filter (item => item.id !== id),
        doneCount: state.doneCount -1
      }
    } else {
      return {
        ...state,
        allTasks,
        allCount,
        pendingTasks: state.pendingTasks.filter (item => item.id !== id),
        pendingCount: state.pendingCount - 1
      }
    }
  }
};

export default HELPER;
