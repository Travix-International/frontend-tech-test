//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
const tasksContainer = require('../../serverLogic/tasks.json');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();

chai.use(chaiHttp);

/*
    Integration testing
 */

describe('Tasks', () => {
    beforeEach((done) => { //Before each test we reset the database
        tasksContainer.tasks.length = 0;
        tasksContainer.tasks.push(
            {
                id: 1,
                title: 'test1_title',
                description: 'test1_description'
            },
            {
                id: 2,
                title: 'test2_title',
                description: 'test2_description'
            },
            {
                id: 3,
                title: 'test3_title',
                description: 'test3_description'
            })
    });

    /*
      * Test the /GET route
      */
    describe('/GET tasks', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
                .get('/api/tasks')
                .end((err, res) => {
                    console.log(res);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        }, 10000);
    });

});