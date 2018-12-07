process.env.NODE_ENV = 'test';

const chai = require ('chai');
const chaiHttp = require ('chai-http');
const should = chai.should ();
const server = require ('./../server');

chai.use (chaiHttp);

describe ('Basic server reachability test', () => {
  it ('should render a successful connection message', (done) =>{
    chai.request (server)
        .get ('/')
        .end ((err, res) => {
          res.should.have.status (200);
          res.body.should.be.a ('object');
          done ();
        });
  });

  it ('should respond with a 404 if any other url is hit', (done) => {
    chai.request (server)
      .get ('/hello-test')
      .end ((err, res) => {
        res.should.have.status (404)
        res.body.should.be.a ('object');
        done ();
      })
  })
});
