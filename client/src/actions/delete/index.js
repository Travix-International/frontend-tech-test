import actionTypes from './../../constants/actionTypes';
import axios from 'axios';
import appConstants from './../../constants/appConstants';

/**
 * @description action creator: indicates delete has started.
 * @param {String} id of the task to be deleted.
 */
const deleteStart = (id) => ({
  type: actionTypes.TASK.DELETE_TASK.DELETE_START,
  id
});

/**
 * @description action creator: indicates delete has completed successfully.
 * @param {Object} data of the task to be deleted.
 */
const deleteSuccess = (data) => ({
  type: actionTypes.TASK.DELETE_TASK.DELETE_SUCCESS,
  data
});

/**
 * @description action creator: indicates delete has failed.
 * @param {Object} error
 */
const deleteFailed = (error) => ({
  type: actionTypes.TASK.DELETE_TASK.DELETE_SUCCESS,
  error
});

const deleteActions = {
  deleteTask (id, isComplete) {
    return (dispatch, getState) => {
      const currentState = getState ();
      const userid = currentState.appData.userid;
      dispatch (deleteStart (id));

      return axios ({
        url: appConstants.API.DELETE_TASK.replace (':id', id),
        method: 'delete',
        headers: {
          'user': userid
        }
      }).then (response => {
        const data = response.data;
        if (response.status === 200) {
          dispatch (deleteSuccess (data));
          dispatch ({
            type: actionTypes.APP_DATA.REMOVE_FROM_BUCKET,
            id: id,
            isComplete: isComplete
          });
        }
      }).catch (error => {
        dispatch (deleteFailed (error.response));
      });
    }
  }
};

export default deleteActions;


