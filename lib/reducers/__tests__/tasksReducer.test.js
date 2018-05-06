import df from 'deep-freeze';

import * as types from '../../actions/actionTypes';
import tasksReducer from '../tasksReducer';

describe('Tasks Reducer', () => {
  it('toggle an existing task', () => {
    const stateBefore = [
      { _id: 0, title: 'Clone sheep', description: '', isComplete: false },
      { _id: 1, title: 'Pickup Falcon 9 delivery', isComplete: false }
    ];

    const action = {
      _id: 1,
      type: types.UPDATE_TASK_SUCCESS,
      updates: { isComplete: true }
    };

    const stateAfter = [
      { _id: 0, title: 'Clone sheep', description: '', isComplete: false },
      { _id: 1, title: 'Pickup Falcon 9 delivery', isComplete: true }
    ];

    expect(tasksReducer(df(stateBefore), df(action))).toEqual(stateAfter);
  });

  it('add a new task', () => {
    const stateBefore = [];

    const title = 'Write more tests';
    const description = 'Unit + integration + acceptance?';
    const isComplete = false;

    const action = {
      task: {
        title,
        description,
        isComplete,
        _id: 0
      },
      type: types.CREATE_TASK_SUCCESS
    };

    const stateAfter = [{ _id: 0, title, description, isComplete }];

    expect(tasksReducer(df(stateBefore), df(action))).toEqual(stateAfter);
  });
});
