import request from 'supertest';

import { populateTasks } from '../__seed__/server';
import Task from '../server/app/models/Task';

jest.mock('../server/config/sockets');
const app = require('../server');

describe('Tasks API', () => {
  beforeEach(populateTasks);

  describe('GET /api/tasks', () => {
    it('get all tasks', (done) => {
      request(app)
        .get('/api/tasks')
        .expect(200)
        .expect((res) => {
          expect(res.body.length).toBe(3);
        })
        .end(done);
    });
  });

  describe('POST /api/tasks', () => {
    it('create a new task', (done) => {
      const task = {
        title: 'A fresh new task!',
        description: 'Just baked, still warm'
      };

      request(app)
        .post('/api/tasks')
        .send(task)
        .expect(201)
        .expect((res) => {
          expect(res.body.title).toBe(task.title);
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          /* eslint-disable promise/no-callback-in-promise, promise/no-promise-in-callback */
          Task.find({ title: task.title })
            .then((_task) => {
              expect(_task.length).toBe(1);
              return done();
            })
            .catch(e => done(e));
        });
    });
  });
});
