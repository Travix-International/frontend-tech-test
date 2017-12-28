import update from 'immutability-helper';
import { get as _get } from 'lodash';
import logger from '../../logger';

const initialState = {
  tasks: [],
  currentEditingTaskId: null,
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

    case 'TASK_SWITCH_EDIT_MODE': {
      const id = _get(payload, 'from');
      const targetMode = _get(payload, 'targetMode');
      const currentEditingTaskId = targetMode === 'NORMAL' ? null : id;
      logger.debug('action.TASK_SWITCH_EDIT_MODE', currentEditingTaskId);
      return update(state, {
        currentEditingTaskId: {
          $set: currentEditingTaskId,
        },
      });
    }

    default:
      return state;
  }
}
