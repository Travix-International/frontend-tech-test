//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
const tasksContainer = require('../serverLogic/tasks.json');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const expect = chai.expect;
const request = chai.request;

chai.use(chaiHttp);

/*
    Integration testing
 */

const item1 = {
    id: 1,
    title: 'test1_title',
    description: 'test1_description'
};
const item2 = {
    id: 2,
    title: 'test2_title',
    description: 'test2_description'
};
const item3 = {
    id: 3,
    title: 'test3_title',
    description: 'test3_description'
};
describe('Tasks', () => {
    beforeEach((done) => { // Before each test we reset the database
        tasksContainer.tasks.length = 0;
        tasksContainer.tasks.push(item1, item2, item3);
        done();
    });

    /*
        Searching for all tasks
     */
    describe('/GET tasks', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
                .get('/api/tasks')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.contextObjects).to.be.an('array');
                    expect(res.body.contextObjects.length).to.equal(3);
                    done();
                });
        });
        it('it should filter by title', (done) => {
            chai.request(server)
                .get('/api/tasks?title=test1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.contextObjects).to.be.an('array');
                    expect(res.body.contextObjects.length).to.equal(1);
                    expect(res.body.totalCount).to.equal(3);
                    expect(res.body.pages).to.equal(1);
                    expect(res.body.contextObjects).to.deep.equal([item1]);
                    done();
                });
        });
        it('it should sort by description in reverse', (done) => {
            chai.request(server)
                .get('/api/tasks?sortName=description&sortOrder=desc')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.contextObjects).to.be.an('array');
                    expect(res.body.contextObjects.length).to.equal(3);
                    expect(res.body.totalCount).to.equal(3);
                    expect(res.body.pages).to.equal(1);
                    expect(res.body.contextObjects).to.deep.equal([item3, item2, item1]);
                    done();
                });
        });
        it('it should paginate correctly', (done) => {
            chai.request(server)
                .get('/api/tasks?page=2&sizePerPage=2')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.contextObjects).to.be.an('array');
                    expect(res.body.totalCount).to.equal(3);
                    expect(res.body.pages).to.equal(2);
                    expect(res.body.contextObjects.length).to.equal(1);
                    expect(res.body.contextObjects).to.deep.equal([item3]);
                    done();
                });
        });
    });

    /*
        Getting specific task
     */
    describe('/GET single task', () => {
        it('it should GET one task', (done) => {
            chai.request(server)
                .get('/api/task/1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.task).to.deep.equal(item1);
                    done();
                });
        });

        it('it should return bad request', (done) => {
            chai.request(server)
                .get('/api/task/bob')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Bad request.');
                    done();
                });
        });

        it('it should not found', (done) => {
            chai.request(server)
                .get('/api/task/999')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body.message).to.equal('Not found.');
                    done();
                });
        });
    });

    /*
        Creating task
     */
    describe('/POST single task', () => {
        it('it should add one task', (done) => {
            const step1 = (step2) => chai.request(server).post('/api/task')
                .send({
                    title: 'bond',
                    description: 'james bond'
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    step2();
                });

            const step2 = () => chai.request(server)
                .get('/api/task/1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.task).to.deep.equal(item1);
                    done();
                });

            step1(step2);
        });

        it('it should fail validation', (done) => {
            const step1 = () => chai.request(server)
                .post('/api/task')
                .send({})
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Not created');
                    expect(res.body.description).to.equal('Validation failed');
                    // TODO: assert validationResult
                    done();
                });
            step1();
        });
    });

    /*
        Updating task
     */
    describe('/PUT single task', () => {
        it('it should add one task', (done) => {
            const step1 = (step2) => chai.request(server)
                .put('/api/task/1')
                .send({
                    title: 'test1_title_updated',
                    description: 'test1_description_updated'
                })
                .end((err, res) => {
                    expect(res).to.have.status(204);
                    step2();
                });

            const step2 = () => chai.request(server)
                .get('/api/task/1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.task).to.deep.equal({id: 1, title: 'test1_title_updated', description: 'test1_description_updated'});
                    done();
                });

            step1(step2);
        });

        it('it should not have body', (done) => {
            const step1 = () => chai.request(server)
                .put('/api/task/1')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });

            step1();
        });

        it('it should have invalid id', (done) => {
            const step1 = () => chai.request(server)
                .put('/api/task/george')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });

            step1();
        });

        it('it should not update because of invalid id', (done) => {
            const step1 = () => chai.request(server)
                .put('/api/task/999')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });

            step1();
        });

        it('it should not pass validation', (done) => {
            const step1 = () => chai.request(server)
                .put('/api/task/1')
                .send({})
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });

            step1();
        });
    });

    /*
        Deleting task
     */
    describe('/DELETE single task', () => {
        it('it should delete one task', (done) => {
            const step1 = (step2) => chai.request(server)
                .del('/api/task/1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    step2();
                });

            const step2 = () => chai.request(server)
                .get('/api/task/1')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });

            step1(step2);
        });
    });
});