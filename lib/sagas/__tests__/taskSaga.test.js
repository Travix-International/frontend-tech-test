import { call, put } from 'redux-saga/effects';

import * as TaskApi from '../../api/taskApi';
import * as taskSagas from '../taskSaga';
import * as tasksSeed from '../../__seed__/tasks';
import * as types from '../../actions/actionTypes';

describe('Task Saga', () => {
  describe('createTaskAsync', () => {
    const task = tasksSeed[0];
    const iterator = taskSagas.createTaskAsync({ task });

    it('POST the new task via the Task API', () => {
      expect(iterator.next().value).toEqual(call(TaskApi.create, task));
    });

    it('should dispatch an action to update store with newly created task', () => {
      expect(iterator.next(task).value).toEqual(
        put({ task, type: types.CREATE_TASK_SUCCESS })
      );
    });
  });
});
