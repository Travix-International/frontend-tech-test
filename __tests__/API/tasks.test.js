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
        res.body.data.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE task on /api/task/:id GET');
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
