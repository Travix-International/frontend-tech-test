const request = require('supertest');
const tasksContainer = require('../tasks.json');

const app = require('../server.js');

describe('Server integration tests', () => {
  afterAll(() => {
    app.close();
  });

  it('Get tasks', (done) => {
    request(app)
      .get('/tasks')
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
          tasks: tasksContainer.tasks
        });
        done();
      });
  });

  it('Add task', (done) => {
    request(app)
      .post('/tasks')
      .send({ title: 'test', description: ''})
      .end((err, res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe('Resource created');
        expect(res.body.task).toEqual({
          id: expect.anything(),
          title: 'test',
          description: '',
          isDone: false,
          tags: [],
          subtasks: []
        });
        done();
      });
  });

  it('Update task', (done) => {
    const agent = request(app);

    agent
      .post('/tasks')
      .send({ title: 'test', description: ''})
      .end((err, res) => {
        agent
          .put(`/tasks/${res.body.task.id}`)
          .send({
            title: '2',
            description: '2',
            isDone: true,
            subtasks: [],
            tags: []
          })
          .end((err, res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual({
              task: {
                id: res.body.task.id,
                title: '2',
                description: '2',
                isDone: true,
                subtasks: [],
                tags: []
              }
            });
            done();
          });
      });

  });

  it('Delete task', (done) => {
    const agent = request(app);

    agent
      .post('/tasks')
      .send({ title: 'test', description: ''})
      .end((err, res) => {
        agent
          .delete(`/tasks/${res.body.task.id}`)
          .end((err, res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body.message).toBe('Updated successfully');
            expect(res.body.id).toBe(res.body.id);
            done();
          });
      });
  });
});