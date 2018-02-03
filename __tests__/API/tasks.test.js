const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Tasks', () => {
  it('should list ALL tasks on api/tasks GET', (done) => {
    chai
      .request(server)
      .get('/api/tasks')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.meta.message.should.equal('SUCCESS');
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('title');
        res.body.data[0].should.have.property('description');
        res.body.data[0].should.have.property('status');
        done();
      });
  });
  it('should list a SINGLE task on /api/task/:id GET', (done) => {
    chai
      .request(server)
      .get('/api/task/0')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.meta.message.should.equal('SUCCESS');
        res.body.data.should.be.a('object');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('description');
        res.body.data.should.have.property('status');
        done();
      });
  });
  it('should return 404 if todo is not found on /api/task/:id GET', (done) => {
    chai
      .request(server)
      .get('/api/task/-1')
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.json;
        res.body.meta.message.should.equal('RESOURCE_NOT_FOUND');
        res.body.data.should.be.a('object');
        res.body.data.should.not.have.property('id');
        res.body.data.should.not.have.property('title');
        res.body.data.should.not.have.property('description');
        res.body.data.should.not.have.property('status');
        done();
      });
  });
  it('should return bad request for NaN values on :id on /api/task/:id GET', (done) => {
    chai
      .request(server)
      .get('/api/task/random_string')
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.json;
        res.body.meta.message.should.equal('BAD_REQUEST');
        res.body.data.should.be.a('object');
        res.body.data.should.not.have.property('id');
        res.body.data.should.not.have.property('title');
        res.body.data.should.not.have.property('description');
        res.body.data.should.not.have.property('status');
        done();
      });
  });
  it('should update a SINGLE task on /api/task/update/:id/:title/:description PUT');
  it('should create a SINGLE task on /api/task/create/:title/:description POST', (done) => {
    const title = 'Test title';
    const description = 'Test description';

    chai
      .request(server)
      .post(`/api/task/create/${title}/${description}`)
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.data.should.be.a('object');
        res.body.meta.message.should.equal('RESOURCE_CREATED');
        res.body.data.should.be.a('object');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('description');
        res.body.data.should.have.property('status');
        res.body.data.title.should.equal(title);
        res.body.data.description.should.equal(description);
        res.body.data.status.should.equal('ACTIVE');
        done();
      });
  });
  it('should delete a SINGLE task on /api/task/delete/:id DELETE');
});
