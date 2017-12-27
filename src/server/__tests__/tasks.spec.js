import test from 'ava';
import mock from 'mock-require';
import sinon from 'sinon';
import { createMockResponse } from '../../__mocks__/travix-persistent-object';

const createSpiedRes = () => {
  const res = {
    status: sinon.stub().returnsThis(),
    json: sinon.stub().returnsThis(),
    end: sinon.stub().returnsThis(),
  };
  return res;
};

// since we mock travix-persistent-object
// cbs will be sync instead of async
// so we don't need to use async/await here
test('get /tasks cb', (t) => {
  mock('travix-persistent-object', createMockResponse(
    {
      tasks: [{
        id: 0,
      }],
    },
  ));
  // why we reRequire here
  // https://www.npmjs.com/package/mock-require#mockrerequirepath
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.getCb(null, spiedRes);
  t.true(spiedRes.status.calledWith(200));
  t.true(spiedRes.json.calledWith({
    result: [0],
    entities: {
      tasks: {
        0: {
          id: 0,
        },
      },
    },
  }));
});

test('get /tasks/:id cb', (t) => {
  mock('travix-persistent-object', createMockResponse(
    {
      tasks: [{
        id: 0,
        title: 'mock_title',
        description: 'mock_desc',
      }],
    },
  ));
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();

  // 200
  tasks.getWithIdCb({
    params: {
      id: 0,
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(200));
  t.true(spiedRes.json.calledWith({
    result: 0,
    entities: {
      tasks: {
        0: {
          id: 0,
          description: 'mock_desc',
          title: 'mock_title',
        },
      },
    },
  }));

  // id is undefined
  tasks.getWithIdCb({
    params: {
      id: undefined,
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(400));
  t.true(spiedRes.json.calledWith({
    message: 'Bad request.',
  }));

  // can't find id
  tasks.getWithIdCb({
    params: {
      id: 1,
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(404));
  t.true(spiedRes.json.calledWith({
    message: 'Not found.',
  }));
});

test('post /tasks cb', (t) => {
  mock('travix-persistent-object', createMockResponse(
    {
      tasks: [],
    },
  ));
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.postCb({
    body: {
      title: 'mock_title',
      description: 'mock_desc',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(201));
  const taskId = spiedRes.json.args[0][0].result;
  t.is(taskId.length, 36);
  const task = spiedRes.json.args[0][0].entities.tasks[taskId];
  t.is(task.id, taskId);
  t.is(task.title, 'mock_title');
  t.is(task.description, 'mock_desc');

  // invalid creating task
  tasks.postCb({
    body: {
      iamnotvalid: 'invalid',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(400));
  t.true(spiedRes.json.calledWith({
    message: `task.iamnotvalid is not allowed`,
  }));
});

test('patch /tasks/:id cb', (t) => {
  mock('travix-persistent-object', createMockResponse(
    {
      tasks: [{
        id: 0,
        title: 'mock_title',
        description: 'mock_desc',
      }],
    },
  ));
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.patchCb({
    params: {
      id: 0,
    },
    body: {
      title: 'mock_title_mod',
      description: 'mock_desc_mod',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(200));
  t.true(spiedRes.json.calledWith({
    result: 0,
    entities: {
      tasks: {
        0: {
          id: 0,
          title: 'mock_title_mod',
          description: 'mock_desc_mod',
        },
      },
    },
  }));

  // info not given/invalid key situation
  tasks.patchCb({
    params: {
      id: 0,
    },
    body: {
      invalidkey: 'iamnotvalid',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(200));
  t.true(spiedRes.json.calledWith({
    result: 0,
    entities: {
      tasks: {
        0: {
          id: 0,
          title: 'mock_title_mod',
          description: 'mock_desc_mod',
        },
      },
    },
  }));

  // id is undefined
  tasks.patchCb({
    params: {
      id: undefined,
      title: 'mock_title_mod',
      description: 'mock_desc_mod',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(400));
  t.true(spiedRes.json.calledWith({
    message: 'Bad request',
  }));

  // if id not found
  tasks.patchCb({
    params: {
      id: '1',
      title: 'mock_title_mod',
      description: 'mock_desc_mod',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(404));
  t.true(spiedRes.json.calledWith({
    message: 'Not found',
  }));
});

test('delete /tasks/:id cb', (t) => {
  mock('travix-persistent-object', createMockResponse(
    {
      tasks: [{
        id: 4,
        title: 'mock_title',
        description: 'mock_desc',
      }],
    },
  ));
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();

  // success
  tasks.deleteCb({
    params: {
      id: 4,
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(204));
  t.false(spiedRes.json.called);
  t.true(spiedRes.end.called);

  // id is undefined
  tasks.deleteCb({
    params: {
      id: undefined,
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(400));
  t.true(spiedRes.json.calledWith({
    message: 'Bad request',
  }));

  // id not found
  tasks.deleteCb({
    params: {
      id: '0',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(404));
  t.true(spiedRes.json.calledWith({
    message: 'Not found',
  }));
});

test('do not generate same id', (t) => {
  mock('travix-persistent-object', createMockResponse(
    {
      tasks: [{
        id: 1,
        title: 'mock_title',
        description: 'mock_desc',
      }],
    },
  ));
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.postCb({
    body: {
      title: 'mock_title_mod',
      description: 'mock_desc_mod',
    },
  }, spiedRes);
  tasks.getCb(null, spiedRes);
  const argResult = spiedRes.json.args[1][0].result;
  t.true(argResult[0] !== argResult[1]);
});
