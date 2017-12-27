import update from 'immutability-helper';
import { get as _get, isEqual as _isEqual } from 'lodash';
import logger from '../../logger';

const initialState = {};

export default function reducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case 'FETCH_TASKS': {
      const taskEntities = _get(payload, 'entities.tasks', {});

      // don't update if there are the same
      if (!_isEqual(taskEntities, state)) {
        return update(state, {
          $merge: payload.entities.tasks,
        });
      }
      return state;
    }

    case 'POST_TASK': {
      const taskEntities = _get(payload, 'entities.tasks', {});
      const response = taskEntities[payload.result];
      logger.debug(response);
      if (response) {
        return update(state, {
          $merge: {
            [payload.result]: response,
          },
        });
      }
      return state;
    }

    default:
      return state;
  }
}
