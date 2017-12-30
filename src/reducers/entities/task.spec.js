import test from 'ava';

import reducer from './task';

test('POST_TASK', (t) => {
  const initState = {};
  const expectState = {
    taskId: {
      id: 'taskId',
      text: 'test-text',
    },
  };
  const action = {
    type: 'POST_TASK',
    payload: {
      result: 'taskId',
      entities: {
        tasks: expectState,
      },
    },
  };
  t.deepEqual(reducer(initState, action), expectState);

  // return original state if no response
  const wrongAction = {
    type: 'POST_TASK',
    payload: {
      result: 'anotherTaskId',
      entities: {
        tasks: {
          taskId: {
            id: 'taskId',
          },
        },
      },
    },
  };
  t.is(reducer(initState, wrongAction), initState);
});
