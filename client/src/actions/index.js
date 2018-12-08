import actionTypes from "../constants/actionTypes";
import axios from "axios";
import appConstants from "../constants/appConstants";

// action creator: indicates fetch has started.
const fetchAppDataStart = () => ({
  type: actionTypes.APP_DATA.FETCH_APP_DATA_START
});

// action creator: indicates fetch has successfully finished.
const fetchAppDataSuccess = (data) => ({
  type: actionTypes.APP_DATA.FETCH_APP_DATA_SUCCESS,
  data
});

// action creator: indicates fetch has failed to load.
const fetchAppDataFailed = (error) => ({
  type: actionTypes.APP_DATA.FETCH_APP_DATA_FAILED,
  error
});

const actions = {
  fetchAppData () {
    return dispatch => {
      dispatch (fetchAppDataStart ());
      
      const url = appConstants.API.FETCH_APP_DATA
                    .replace ('__limit__', appConstants.DEFAULTS.DATA_LIMIT)
      return axios ({
        url,
        method: 'get'
      }).then (response => {
        if (response.status === 200) {
          dispatch (fetchAppDataSuccess (response.data));
        } else {
          throw new Error ("Test");
        }
      }).catch (error => {
        dispatch (fetchAppDataFailed (error.response.data));
      });
    }
  }
}

export default actions;
