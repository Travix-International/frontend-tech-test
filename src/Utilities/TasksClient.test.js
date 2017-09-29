/* eslint-env mocha, chai, sinon */
import { assert } from 'chai';
import sinon from 'sinon';
import TasksClient from './TasksClient';

/**
 * Mocks the fetch function and returns his stub to restore later
 */
const mockFetch = () => {
  if (typeof fetch === 'undefined') {
    global.fetch = () => {};
  }
  sinon.stub(global, 'fetch');
  return global.fetch;
}

sinon.assert.expose(assert, { prefix: '' });

suite('On the task client library', () => {
  let fetchMock = null;
  let responseMock = null;
  setup(() => {
    fetchMock = mockFetch();
    responseMock = {
      json: sinon.stub().returns({})
    }
    fetchMock.returns(Promise.resolve(
      responseMock
    ));
  });
  teardown(() => {
    fetchMock.restore();
  });
  test('getAll method calls fetch with the correct url', () => {
    TasksClient.getAll();
    assert.calledOnce(fetchMock.withArgs('/tasks'));
  });
  test('post method calls fetch with the correct url and method POST', () => {
    TasksClient.post('foo', 'bar');
    assert.calledOnce(fetchMock.withArgs('/task/create/foo/bar', { method: 'POST' }));
  });
  test('delete method calls fetch with the correct url and method DELETE', () => {
    TasksClient.delete('1');
    assert.calledOnce(fetchMock.withArgs('/task/delete/1', { method: 'DELETE' }));
  });
  test('update method calls fetch with the correct url and method DELETE', () => {
    TasksClient.update('1', 'foo', 'bar');
    assert.calledOnce(fetchMock.withArgs('/task/update/1/foo/bar', { method: 'PUT' }));
  });
});