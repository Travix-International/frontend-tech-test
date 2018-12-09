import actionTypes from "../../constants/actionTypes";
import axios from "axios";
import appConstants from "../../constants/appConstants";
import actions from "..";

/**
 * @description action creator: indicates update has started.
 * @param {String} id of the task to be updated
 */
const updateStart = id => ({
  type: actionTypes.TASK.UPDATE_TASK.UPDATE_START,
  id
});

/**
 * @description action creator: indicates update has succeeded.
 * @param {Object} task updated task
 */
const updateSuccess = data => ({
  type: actionTypes.TASK.UPDATE_TASK.UPDATE_SUCCESS,
  task: data.task
});

/**
 * @description action creator: indicates update has failed.
 * @param {String} id of the task which was being updated
 */
const updateFailed = (id, error, status) => ({
  type: actionTypes.TASK.UPDATE_TASK.UPDATE_FAILED,
  id,
  error,
  status
});

const updateActions = {
  /**
   * @description function to make the api call and dispatch relevant actions.
   * @param {String} id of thet ask to be updated
   * @param {Object} task 
   */
  updateTask (id, task) {
    return (dispatch, getState) => {
      const currentState = getState ();
      const userid = currentState.appData.userid;

      dispatch (updateStart (id));
      return axios ({
        url: appConstants.API.UPDATE_TASK.replace (':id', id),
        method: 'put',
        data: task,
        headers: {
          'Content-Type': 'application/json',
          'user': userid
        }
      }).then (resp => {
        if (resp.status === 200) {
          const data = resp.data.data;
          dispatch (updateSuccess (data));
          dispatch (actions.updateCount ({
            doneCount: data.doneCount,
            allCount: data.allCount,
            pendingCount: data.pendingCount
          }));
          dispatch (actions.updateBuckets ({
            task: data.task
          }));
        }
      }).catch (error => {
        dispatch (updateFailed (id, error.response.data, error.response.status));
      });
    }
  },

  /**
   * @description action creator: sets the task to be updated.
   * @param {Object} task
   */
  editThisTask (task) {
    return {
      type: actionTypes.TASK.UPDATE_TASK.EDIT_THIS_TASK,
      task
    }
  },

  /**
   * @description dispatches action to cancel the current edit.
   */
  cancelEdit () {
    return {
      type: actionTypes.TASK.UPDATE_TASK.CANCEL_EDIT
    }
  }
};

export default updateActions;
