import test from 'ava';
import request from 'supertest';
import app from '../';

test('/tasks CRUD', async (t) => {
  const getRes = await request(app)
    .get('/tasks');

  t.is(getRes.status, 200);
  t.true(/json/.test(getRes.headers['content-type']));
  t.is(getRes.text, JSON.stringify({
    tasks: [],
  }));

  const postRes = await request(app)
    .post('/tasks/job1/job1descrip');

  t.is(postRes.status, 201);
  t.is(postRes.text, JSON.stringify({ message: 'Resource created' }));

  const getIdRes = await request(app)
    .get('/tasks/0');

  t.is(getIdRes.status, 200);
  t.is(getIdRes.text, JSON.stringify({
    task: {
      id: 0,
      title: 'job1',
      description: 'job1descrip',
    },
  }));

  const putRes = await request(app)
    .put('/tasks/0/job1mod/job1descmod');

  t.is(putRes.status, 200);
  t.is(putRes.text, JSON.stringify({
    id: 0,
    title: 'job1mod',
    description: 'job1descmod',
  }));

  const deleteRes = await request(app)
    .delete('/tasks/0');

  t.is(deleteRes.status, 200);
  t.is(deleteRes.text, JSON.stringify({
    message: 'Updated successfully',
  }));
});
