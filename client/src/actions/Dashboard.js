import {
    FETCH_STATS,
    FETCH_STATS_SUCCESS
  } from 'constants/ActionTypes'

  export const fetchStats = () => {
    return {
      type: FETCH_STATS
    };
  };
  export const fetchStatsSuccess = (stats) => {
    return {
      type: FETCH_STATS_SUCCESS,
      payload: stats
    };
  };