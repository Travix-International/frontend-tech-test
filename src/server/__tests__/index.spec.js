import test from 'ava';
import request from 'supertest';
import app from '../';

test('/tasks CRUD', async (t) => {
  const getRes = await request(app)
    .get('/tasks');

  t.is(getRes.status, 200);
  t.true(/json/.test(getRes.headers['content-type']));
  t.deepEqual(JSON.parse(getRes.text), {
    result: [],
    entities: {},
  });

  const postRes = await request(app)
    .post('/tasks')
    .send({
      'title': 'mock_title',
      description: 'mock_desc',
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  t.is(postRes.status, 201);
  t.deepEqual(JSON.parse(postRes.text), {
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
  });

  const getIdRes = await request(app)
    .get('/tasks/0');

  t.is(getIdRes.status, 200);
  t.deepEqual(JSON.parse(getIdRes.text), {
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
  });

  const patchRes = await request(app)
    .patch('/tasks/0')
    .send({
      title: 'mock_title_mod',
      description: 'mock_desc_mod',
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  t.is(patchRes.status, 200);
  t.deepEqual(JSON.parse(patchRes.text), {
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
  });

  const deleteRes = await request(app)
    .delete('/tasks/0');

  t.is(deleteRes.status, 204);
});
