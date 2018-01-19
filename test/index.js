const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const db = require('../server/data');
const should = chai.should();

chai.use(chaiHttp);

describe('Tasks', () => {
  describe('GET /task', () => {
    it('should get a task', (done) => {
      chai.request(server)
        .get('/task/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        });
    });

    it('should return 404 if task is not found', (done) => {
      chai.request(server)
        .get('/task/5')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it('should return 400 if the ID is nos a number', (done) => {
      chai.request(server)
        .get('/task/invalid')
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('GET /tasks', () => {
    it('should get all tasks', (done) => {
      chai.request(server)
        .get('/tasks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        });
    });
  });

  describe('POST /task', () => {
    afterEach(() => {
      db.tasks = db.tasks.filter(t => t.title !== 'Test 4');
    });

    it('should add a task', (done) => {
      chai.request(server)
        .post('/task')
        .send({ title: 'Test 4', description: 'Description 4', ignoredField: 5 })
        .end((err, res) => {
          res.should.have.status(201);
          db.tasks[3].should.have.property('title', 'Test 4');
          done();
        });
    });

    it('should fail if task is not complete', (done) => {
      chai.request(server)
        .post('/task')
        .send({ description: 'Description 4', ignoredField: 5 })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('PUT /task', () => {
    it('should modify title', (done) => {
      chai.request(server)
        .put('/task/3')
        .send({ title: 'Test X' })
        .end((err, res) => {
          res.should.have.status(204);
          db.tasks[2].should.have.property('title', 'Test X');
          db.tasks[2].should.have.property('description', 'Test description 3');
          done();
        });
    });

    it('should modify description', (done) => {
      chai.request(server)
        .put('/task/2')
        .send({ description: 'Description X' })
        .end((err, res) => {
          res.should.have.status(204);
          db.tasks[1].should.have.property('title', 'Test 2');
          db.tasks[1].should.have.property('description', 'Description X');
          done();
        });
    });

  it('should mark task as completed', (done) => {
    chai.request(server)
      .put('/task/2')
      .send({ completed: 1 })
      .end((err, res) => {
        res.should.have.status(204);
        db.tasks[1].should.have.property('completed', true);
        done();
      });
    });

    it('should mark task as not completed', (done) => {
      chai.request(server)
        .put('/task/3')
        .send({ completed: 0 })
        .end((err, res) => {
          res.should.have.status(204);
          db.tasks[2].should.have.property('completed', false);
          done();
        });
      });
  });

  describe('DELETE /task', () => {
    it('should delete a task', (done) => {
      chai.request(server)
        .del('/task/3')
        .end((err, res) => {
          res.should.have.status(200);
          db.tasks.length.should.equals(2);
          done();
        });
    });
  });
});
