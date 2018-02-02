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
        res.body.tasks.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE task on /api/task/:id GET');
  it('should update a SINGLE task on /api/task/update/:id/:title/:description PUT');
  it('should create a SINGLE task on /api/task/create/:title/:description POST');
  it('should delete a SINGLE task on /api/task/delete/:id DELETE');
});
