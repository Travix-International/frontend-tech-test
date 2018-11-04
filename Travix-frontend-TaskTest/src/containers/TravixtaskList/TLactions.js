import axios from 'axios';
import {
  FETCHFULFILLED,
  FETCHREJECTED,
  FETCHPENDING,
} from './TLconstants';
import { SERVER_URL } from '../../Globalconstants';

export const fetchTravixTasksList = (currentPage, tasksPerPage, filterBy) => {
  const request = axios.get(
    `${SERVER_URL}?pn=${currentPage}&tpp=${tasksPerPage}&search=${filterBy}`
  );
  return dispatch => {
    dispatch({ type: FETCHPENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: FETCHFULFILLED, payload: data });
        return data;
      })
      .catch(error => {
        dispatch({
          type: FETCHREJECTED,
          payload: error.message,
        });
      });
  };
};
