import update from 'immutability-helper';
import { get as _get } from 'lodash';

const initialState = {
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case 'FETCH_TASKS': {
      const result = _get(payload, 'result', []);
      return update(state, {
        tasks: {
          $set: result,
        },
      });
    }

    case 'POST_TASK': {
      const result = _get(payload, 'result');
      if (result !== undefined) {
        return update(state, {
          tasks: {
            $unshift: [result],
          },
        });
      }
      return state;
    }

    case 'DELETE_TASK': {
      const result = _get(payload, 'result');
      if (result !== undefined) {
        const deletingIndex = state.tasks.indexOf(result);
        return update(state, {
          tasks: {
            $splice: [[deletingIndex, 1]],
          },
        });
      }
      return state;
    }

    default:
      return state;
  }
}
