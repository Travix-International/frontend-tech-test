import actionTypes from './../../constants/actionTypes';
import axios from 'axios';
import appConstants from '../../constants/appConstants';
import LABELS from '../../constants/labels';
import actions from '..';

// action creator: indicates create api started.
const createStart = () => ({ type: actionTypes.TASK.CREATE_TASK.CREATE_START })

/**
 * @description action creator for create success.
 * @param {Object} response from the server
 */
const createSuccess = (response) => ({
  type: actionTypes.TASK.CREATE_TASK.CREATE_SUCCESS,
  data: response.data
});

/**
 * @description action creator for create failure.
 * @param {Object} error from the server
 */
const createFailed = (error) => ({
  type: actionTypes.TASK.CREATE_TASK.CREATE_FAILED,
  error: error.data
});

const createActions = {
  createTask (task) {
    return dispatch => {
      dispatch (createStart ());

      return axios ({
        url: appConstants.API.CREATE_TASK,
        method: 'post',
        data: task,
        config: { headers: {'Content-Type': 'application/json' }}
      }).then (response => {
        if (response.status === 200 && response.data.data.status === 1) {
          dispatch (createSuccess (response.data))
          dispatch (actions.addInBuckets (response.data.data));
        } else {
          dispatch (createFailed (response.data));
        }
      }).catch (error => {
        dispatch (createFailed ({
          'data': {
            'message': LABELS.ERROR_MESSAGE['500']
          }
        }))
      })
    }
  }
}

export default createActions;
