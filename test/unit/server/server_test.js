const request = require('supertest');
const expect = require('chai').expect;
const server = require('../../../server');

describe('server api tests', function(){

  it('should return tasks list', function(done){
    request(server)
      .get('/task')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res){
        expect(res.body.tasks).to.be.an('array');
        done();
      });
  });

  it('should create a new todo', function(done){
    request(server)
      .post('/task/create')
      .send({
        title: 'hello',
        description: 'world'
      })
      .expect(201)
      .end(function(err, res){
        expect(res.body.message).to.be.equal('Resource created')
        done();
      });
  });

  it('should update todo when id is valid', function(done){
    request(server)
      .put('/task/update')
      .send({
        id: 1,
        title: 'hello fernando',
        description: 'world fernando',
        complete: true
      })
      .expect(200)
      .end(function(err, res){
        expect(res.body.message).to.be.equal('Task updated')
        done();
      });
  });

  it('should not update todo id is not found', function(done){
    request(server)
      .put('/task/update')
      .send({
        id: 34,
        title: 'hello',
        description: 'world'
      })
      .expect(404)
      .end(function(err, res){
        expect(res.body.message).to.be.equal('Not found')
        done();
      });
  });

  it('should not update todo when id is invalid', function(done){
    request(server)
      .put('/task/update')
      .send({
        id: null,
        title: 'hello',
        description: 'world'
      })
      .expect(400)
      .end(function(err, res){
        expect(res.body.message).to.be.equal('Bad request')
        done();
      });
  });

  it('should not delete todo when id is not found', function(done){
    request(server)
      .delete('/task/delete')
      .send({
        id: 45,
      })
      .expect(404)
      .end(function(err, res){
        expect(res.body.message).to.be.equal('Not found')
        done();
      });
  });

  it('should not delete todo when id is invalid', function(done){
    request(server)
      .delete('/task/delete')
      .send({
        id: 'a'
      })
      .expect(400)
      .end(function(err, res){
        expect(res.body.message).to.be.equal('Bad request')
        done();
      });
  });

  it('should delete todo', function(done){
    request(server)
      .delete('/task/delete')
      .send({
        id: 1,
      })
      .expect(200)
      .end(function(err, res){
        expect(res.body.message).to.be.equal('Deleted successfully')
        done();
      });
  });
});