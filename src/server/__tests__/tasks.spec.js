import test from 'ava';
import mock from 'mock-require';
import sinon from 'sinon';


const createSpiedRes = () => {
  const res = {
    status: sinon.stub().returnsThis(),
    json: sinon.stub().returnsThis(),
    end: sinon.stub().returnsThis(),
  };
  return res;
};

test('get /tasks cb', (t) => {
  mock('../../../tasks.json', {
    tasks: [{
      id: 0,
    }],
  });
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
    body: {
      title: 'mock_title',
      description: 'mock_desc',
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(201));
  t.true(spiedRes.json.calledWith({
    result: 0,
    entities: {
      tasks: {
        0: {
          id: 0,
          title: 'mock_title',
          description: 'mock_desc',
        },
      },
    },
  }));

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
  mock('../../../tasks.json', {
    tasks: [{
      id: 0,
      title: 'mock_title',
      description: 'mock_desc',
    }],
  });
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

  // info not given situation
  tasks.patchCb({
    params: {
      id: 0,
    },
    body: {},
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

  // id isNaN
  tasks.patchCb({
    params: {
      id: 'isNaN',
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
  mock('../../../tasks.json', {
    tasks: [{
      id: 0,
      title: 'mock_title',
      description: 'mock_desc',
    }],
  });
  const tasks = mock.reRequire('../tasks');
  const spiedRes = createSpiedRes();

  // success
  tasks.deleteCb({
    params: {
      id: 0,
    },
  }, spiedRes);
  t.true(spiedRes.status.calledWith(204));
  t.false(spiedRes.json.called);
  t.true(spiedRes.end.called);

  // id isNaN
  tasks.deleteCb({
    params: {
      id: 'isNaN',
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
