'use strict';
//TODO: inject fake tasks list.
const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Server tests', () => {
  describe('Root "/" route', () => {
    it('should not allow GET "/" and return not found (404)', (done) => {
      chai.request(server.app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('Tasks handlers', () => {
    describe("GET", () => {
      it('should return the full list of tasks (GET /tasks) with status ok (200)', (done) => {
        server.tasksContainer = undefined;
        chai.request(server.app)
          .get('/tasks')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('tasks').a('array').length(73);
            done();
          });
      });
      it('should return a specific task from the list (GET /tasks/:taskId) with status ok (200)', (done) => {
        chai.request(server.app)
          .get('/tasks/1')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('task').property('id').to.equal(1);
            done();
          });
      });
      it('should return not found (404) if task id not in the list', (done) => {
        chai.request(server.app)
          .get('/tasks/999')
          .end((err, res) => {
            res.should.have.status(404);
            done();
          });
      });
      it('should return bad request (400) if task id invalid', (done) => {
        chai.request(server.app)
          .get('/tasks/a')
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });

    describe('POST', () => {
      it('should create a new task and return created (201) status', (done) => {
        const taskToCreate = {
          title: 'test',
          describe: 'test'
        };
        chai.request(server.app)
          .post(`/tasks/${taskToCreate.title}/${taskToCreate.describe}`)
          .end((err, res) => {
            res.should.have.status(201);
            done();
          });
      });
      it('should return not found (404) status if not all params received', (done) => {
        const taskToCreate = {
          title: 'test',
          describe: 'test'
        };
        chai.request(server.app)
          .post(`/tasks/${taskToCreate.title}/`)
          .end((err, res) => {
            res.should.have.status(404);
            done();
          });
      });
    });

    describe('PUT', () => {
      it('should modify a task and returns no content (204) status', (done) => {
        const taskToModify = {
          id: 1,
          title: 'test',
          description: 'test'
        };
        chai.request(server.app)
          .put(`/tasks/${taskToModify.id}/${taskToModify.title}/${taskToModify.description}`)
          .end((err, res) => {
            res.should.have.status(204);
            done();
          });
      });
      it('should return bad request (400) status receiving an invalid id', (done) => {
        const taskToModify = {
          id: 'test',
          title: 'test',
          description: 'test'
        };
        chai.request(server.app)
          .put(`/tasks/${taskToModify.id}/${taskToModify.title}/${taskToModify.description}`)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
      it('should return created (201) status and create a new task if id is not in the list', (done) => {
        const taskToModify = {
          id: 999,
          title: 'test',
          description: 'test'
        };
        chai.request(server.app)
          .put(`/tasks/${taskToModify.id}/${taskToModify.title}/${taskToModify.description}`)
          .end((err, res) => {
            res.should.have.status(201);
            done();
          });
      });
    });

    describe('DELETE', () => {
      it('should remove an element from the list and return ok (200) status', (done) => {
        chai.request(server.app)
          .delete('/tasks/1')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').to.equal('Task with id 1 deleted successfully');
            done();
          });
      });
      xit('should return an accepted (202) status if the task to delete is not in the list', (done) => {
        chai.request(server.app)
          .delete('/tasks/999')
          .end((err, res) => {
            res.should.have.status(202);
            done();
          });
      });
      it('should return a bad request (400) status if the id is invalid', (done) => {
        chai.request(server.app)
          .delete('/tasks/a')
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });
  });
});
