import axios from 'axios';

import { FETCH_TASKS } from './types';

const API_URL = 'http://localhost:9001';

export function fetchTasks() {
  return (dispatch) => {
    axios.get(`${API_URL}/tasks`)
      .then(({ data }) => {
        dispatch({
          type: FETCH_TASKS,
          payload: data.tasks,
        });
      })
      .catch(() => {
        console.log('error');
      })
  };
}
