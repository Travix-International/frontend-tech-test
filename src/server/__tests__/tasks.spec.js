import test from 'ava';
import mock from 'mock-require';
import sinon from 'sinon';


const createSpiedRes = () => {
  const res = {
    status: sinon.stub().returnsThis(),
    json: sinon.stub().returnsThis(),
  };
  return res;
};

test('get /tasks cb', (t) => {
  mock('../../../tasks.json', {
    tasks: [],
  });
  // why we reRequire here
  // https://www.npmjs.com/package/mock-require#mockrerequirepath
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.getCb(null, spiedRes);
  t.true(spiedRes.status.calledWith(200));
  t.true(spiedRes.json.calledWith({ tasks: [] }));
});

test('get /tasks/:id cb', (t) => {
  mock('../../../tasks.json', {
    tasks: [{
      id: 0,
      title: 'mock_title',
      description: 'mock_desc',
    }],
  });
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
    task: {
      id: 0,
      description: 'mock_desc',
      title: 'mock_title',
    },
  }));

  // id isNaN
  tasks.getWithIdCb({
    params: {
      id: 'NaN',
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
  mock('../../../tasks.json', {
    tasks: [],
  });
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.postCb({
    params: {
      title: 'mock_title',
      description: 'mock_desc',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(201));
  t.true(spiedRes.json.calledWith({ message: 'Resource created' }));
});

test('put /tasks/:id cb', (t) => {
  mock('../../../tasks.json', {
    tasks: [{
      id: 0,
      title: 'mock_title',
      description: 'mock_desc',
    }],
  });
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.putCb({
    params: {
      id: 0,
      title: 'mock_title_mod',
      description: 'mock_desc_mod',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(200));
  t.true(spiedRes.json.calledWith({
    id: 0,
    title: 'mock_title_mod',
    description: 'mock_desc_mod',
  }));
});

test('delete /tasks/:id cb', (t) => {
  mock('../../../tasks.json', {
    tasks: [{
      id: 0,
      title: 'mock_title',
      description: 'mock_desc',
    }],
  });
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();
  tasks.deleteCb({
    params: {
      id: 0,
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(200));
  t.true(spiedRes.json.calledWith({
    message: 'Updated successfully',
  }));
});
