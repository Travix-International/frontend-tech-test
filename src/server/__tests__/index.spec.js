import test from 'ava';
import mock from 'mock-require';
import request from 'supertest';
import { createMockResponse } from '../../__mocks__/travix-persistent-object';

mock('travix-persistent-object', createMockResponse(
  {
    tasks: [],
  },
));
const app = require('../').default;

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
  const postResJSON = JSON.parse(postRes.text);
  const postResId = postResJSON.result;
  t.is(postResId.length, 36);
  t.is(postResJSON.entities.tasks[postResId].id, postResId);
  t.is(postResJSON.entities.tasks[postResId].title, 'mock_title');
  t.is(postResJSON.entities.tasks[postResId].description, 'mock_desc');

  const getIdRes = await request(app)
    .get(`/tasks/${postResId}`);

  t.is(getIdRes.status, 200);
  const getIdResJSON = JSON.parse(getIdRes.text);
  const getIdResId = getIdResJSON.result;
  t.is(getIdResJSON.entities.tasks[getIdResId].id, getIdResId);
  t.is(getIdResJSON.entities.tasks[getIdResId].title, 'mock_title');
  t.is(getIdResJSON.entities.tasks[getIdResId].description, 'mock_desc');

  const patchRes = await request(app)
    .patch(`/tasks/${postResId}`)
    .send({
      title: 'mock_title_mod',
      description: 'mock_desc_mod',
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  t.is(patchRes.status, 200);
  const patchResJSON = JSON.parse(patchRes.text);
  const patchResId = patchResJSON.result;
  t.is(patchResJSON.entities.tasks[patchResId].id, postResId);
  t.is(patchResJSON.entities.tasks[patchResId].title, 'mock_title_mod');
  t.is(patchResJSON.entities.tasks[patchResId].description, 'mock_desc_mod');

  const deleteRes = await request(app)
    .delete(`/tasks/${postResId}`);

  t.is(deleteRes.status, 204);
});

test('/ returns html layout', async (t) => {
  const getRes = await request(app)
    .get('/');
  t.true(/html/.test(getRes.headers['content-type']));
  t.true(/page--home/.test(getRes.text));
});
