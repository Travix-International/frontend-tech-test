process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Tasks', function() {
  it('should list ALL tasks on /tasks GET first time is EMPTY', function(done) {
	  chai.request(server)
	    .get('/tasks')
	    .end(function(err, res){
	      res.should.have.status(200);
			 	res.body.should.have.property('tasks');
				res.body.tasks.should.eql([])
	      done();
	    });
	});

  it('should add A task on /task/create/:title/:description POST', function(done) {
  	chai.request(server)
	    .post('/task/create/title/description')
	    .end(function(err, res){
	      res.should.have.status(201);
	      res.should.be.json;
	      res.body.should.be.a('object');
	      res.body.should.have.property('message');
	      res.body.message.should.be.a('string');
	      res.body.message.should.equal('Resource created');
	      done();
	    });
	});

	it('should list ALL tasks on /tasks GET after create contains DATA', function(done) {
		chai.request(server)
			.get('/tasks')
			.end(function(err, res){
				res.should.have.status(200);
				res.body.should.have.property('tasks');
				res.body.tasks.should.have.eql([{id: 0, title: 'title', description: 'description' }]);
				done();
			});
	});

	it('should delete A task on /task/delete/:id DELETE', function(done) {
		chai.request(server)
    .get('/tasks')
    .end(function(err, res){
      chai.request(server)
        .delete('/task/delete/'+res.body.tasks[0].id)
        .end(function(error, response){
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('message');
          response.body.message.should.equal('Updated successfully');
          done();
      });
    });
	});
});
