import {
  FETCH_STATS_SUCCESS
} from 'constants/ActionTypes'

const INIT_STATE = {
  tasksPerStatus : {
      done:0,
      todo: 0,
      starred: 0
  },
  stats: null
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_STATS_SUCCESS: {
      return {
        ...state,
        stats:  action.payload,
        tasksPerStatus: action.payload.tasksPerStatus
      }
    }
    default:
        return state;
  }
}