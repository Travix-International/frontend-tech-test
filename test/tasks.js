process.env.NODE_ENV = 'test';

const chai = require ('chai');
const chaiHttp = require ('chai-http');
const expect = chai.expect;
const server = require ('../server');
const mockData = require ('../local-db/mock-data');

chai.use (chaiHttp);

describe ('Task module', () => {
  it ('should render a successful connection test message', (done) => {
    chai.request (server)
      .get ('/task/test-api')
      .end ((err, res) => {
        expect (res.status).to.equal (200);
        expect (res.body).to.have.property ('message');
        expect (res.body).to.not.be.undefined;
        expect (res.body.message).to.not.be.undefined;
        done ();
      });
  });

  it ('should return 404 for any other task api', (done) => {
    chai.request (server)
      .get ('/task/bad-request')
      .end ((err, res) => {
        expect (res.status).to.equal (500);
        done ();
      });
  });

  it ('should return 404 if limit and page is not given as query parameters', (done) => {
    // neither page nor limit given
    chai.request (server)
      .get ('/task/get-all-tasks')
      .end ((err, res) => {
        expect (res.status).to.equal (404);
        done ();
      });
  });

  it ('should return 404 if limit is not given as query parameters', (done) => {
    // neither page nor limit given
    chai.request (server)
      .get ('/task/get-all-tasks?page=5')
      .end ((err, res) => {
        expect (res.status).to.equal (404);
        done ();
      });
  });

  it ('should return 404 if page is not given as query parameters', (done) => {
    // neither page nor limit given
    chai.request (server)
      .get ('/task/get-all-tasks?limit=10')
      .end ((err, res) => {
        expect (res.status).to.equal (404);
        done ();
      });
  });

  it ('should return list of all tasks', (done) => {
    // neither page nor limit given
    chai.request (server)
      .get ('/task/get-all-tasks?limit=10&page=1')
      .end ((err, res) => {
        expect (res.status).to.equal (200);
        expect (res.body.data).to.be.not.undefined;
        done ();
      });
  });

  it ('should create a task and return the newly task created.', (done) => {
    chai.request (server)
      .post ('/task/create-task')
      .set ('content-type', 'application/json')
      .send (mockData.createRequest)
      .end ((err, res) => {
        expect (res.status).to.equal (200);
        expect (res.body.data).to.not.be.undefined;
        expect (res.body.data.status).to.not.be.undefined;
        done ();
      });
  });
});