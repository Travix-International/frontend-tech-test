const request = require('supertest');
const app = require('../../server.js');
const taskContainer = require('../../tasks.json');

describe('Server API', function() {
    it('Test Fetch Tasks in Draft State', function(done) {
        request(app)
            .get('/tasks?type=DRAFT')
            .end((err, res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual({1: {
                    id: 1,
                    title: 't1',
                    description: 'd1'
                }});
                done();
        });
    });
    it('Test Fetch Tasks in In Progress State', function(done) {
        request(app)
            .get('/tasks?type=IN_PROGRESS')
            .end((err, res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual({});
                done();
        });
    });
    it('Test Fetch Tasks in Completed State', function(done) {
        request(app)
            .get('/tasks?type=COMPLETED')
            .end((err, res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual({
                    2: {
                        id: 2,
                        title: "completed",
                        description: "completed"
                    }
                  });
                done();
        });
    });
    it('Test Create Tasks', function(done) {
        request(app)
            .post('/task/create/t1/d1?type=DRAFT')
            .end((err, res) => {
                expect(res.statusCode).toBe(201);
                expect(res.body).toEqual({
                    message: 'Resource created'
                  });
                request(app)
                  .get('/tasks?type=DRAFT')
                  .end((err, res) => {
                      expect(res.statusCode).toBe(200);
                      expect(res.body).toEqual({1: {
                          id: 1,
                          title: 't1',
                          description: 'd1'
                      }, 
                      1563733800000: {
                            id: 1563733800000,
                            title: 't1',
                            description: 'd1'
                      }});
                      done();
              });
        });
    });
    it('Test Update Tasks', function(done) {
        request(app)
            .put('/task/update/1/t1Updated?type=DRAFT')
            .end((err, res) => {
                expect(res.statusCode).toBe(204);
                request(app)
                  .get('/tasks?type=DRAFT')
                  .end((err, res) => {
                      expect(res.statusCode).toBe(200);
                      expect(res.body).toEqual({1: {
                            id: 1,
                            title: 't1Updated',
                            description: 'd1'
                        }, 
                        1563733800000: {
                            id: 1563733800000,
                            title: 't1',
                            description: 'd1'
                        }});
                      done();
              });
        });
    });
    it('Test Delete Tasks', function(done) {
        request(app)
            .delete('/task/delete/1?type=DRAFT')
            .end((err, res) => {
                expect(res.statusCode).toBe(200);
                request(app)
                  .get('/tasks?type=DRAFT')
                  .end((err, res) => {
                      expect(res.statusCode).toBe(200);
                      expect(res.body).toEqual({
                        1563733800000: {
                            id: 1563733800000,
                            title: 't1',
                            description: 'd1'
                        }});
                      done();
              });
        });
    });
});