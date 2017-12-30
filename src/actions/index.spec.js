import test from 'ava';
import sinon from 'sinon';
import mock from 'mock-require';

test('postTask would dispatch POST_TASK with response of request', (t) => {
  const Mocksuperagent = require('../__mocks__/superagent').default; // eslint-disable-line global-require
  const mocksuperagent = new Mocksuperagent();
  mocksuperagent.setMockResponse({
    text: JSON.stringify({ t: 'test' }),
  });
  mock('superagent', mocksuperagent);
  const action = mock.reRequire('./').default;
  const dispatchSpy = sinon.spy();
  action.postTask()(dispatchSpy);
  const args = dispatchSpy.args[0][0];
  t.is(args.type, 'POST_TASK');
  t.deepEqual(args.payload, { t: 'test' });
});

test('postTask dispatch errorOccurred if something went wrong', (t) => {
  const Mocksuperagent = require('../__mocks__/superagent').default; // eslint-disable-line global-require
  const mocksuperagent = new Mocksuperagent();
  mocksuperagent.setToFailed({});
  mock('superagent', mocksuperagent);
  const action = mock.reRequire('./').default;
  const dispatchSpy = sinon.spy();
  const error = t.throws(() => {
    action.postTask()(dispatchSpy);
  });
  t.is(error.fromAction, 'POST_TASK');
  const args = dispatchSpy.args[0][0];
  t.is(args.type, 'ERROR_OCCURRED');
});

test('deleteTask would dispatch DELETE_TASK with given taskId', (t) => {
  const Mocksuperagent = require('../__mocks__/superagent').default; // eslint-disable-line global-require
  const mocksuperagent = new Mocksuperagent();
  mock('superagent', mocksuperagent);
  const action = mock.reRequire('./').default;
  const dispatchSpy = sinon.spy();
  action.deleteTask({ id: 'taskId' })(dispatchSpy);
  const args = dispatchSpy.args[0][0];
  t.is(args.type, 'DELETE_TASK');
  t.deepEqual(args.payload.result, 'taskId');
});

test('taskSwitchEditMode would dispatch TASK_SWITCH_EDIT_MODE', (t) => {
  const action = mock.reRequire('./').default;
  const actionRes = action.taskSwitchEditMode('taskId', 'EDIT');
  t.is(actionRes.type, 'TASK_SWITCH_EDIT_MODE');
  t.deepEqual(actionRes.payload, { targetMode: 'EDIT', from: 'taskId' });
});
