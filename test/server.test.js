var should = require('should');
var app = require('../server');
var request = require('supertest');

describe('test back-end', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/tasks')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res){
                if(err){
                    console.log("error");
                    done(err);
                }
                else {
                    console.log(res);
                    done();
                }
            });
    });

    it('should respond with post message', function (done) {
        request(app)
            .post('/task/create/test title/test desc')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(err, res){
                if(err){
                    console.log("error");
                    done(err);
                }
                else {
                    console.log(res);
                    done();
                }
            });
    });

    it('should respond with requested task', function (done) {
        request(app)
            .get('/task/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res){
                if(err){
                    console.log("error");
                    done(err);
                }
                else {
                    console.log(res);
                    done();
                }
            });
    });

    it('should update requested task', function (done) {
        request(app)
            .put('/task/update/1/update title/update desc')
            .expect('Content-Type', /json/)
            .expect(204)
            .end(function(err, res){
                if(err){
                    console.log("error");
                    done(err);
                }
                else {
                    console.log(res);
                    done();
                }
            });
    });


});
