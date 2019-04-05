const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./app');

chai.use(chaiHttp);
const { expect, request } = chai;
const port = 5000;
let server;

describe('TODO api tests', () => {
    beforeEach((done) => {
        server = app.listen(port, done);
    });

    afterEach((done) => {
        server.close(done);
    });

    describe('GET: /tasks', () => {
        it('should return a list of tasks', async () => {
            const res = await request(app)
                .get('/tasks');

            expect(res).to.have.status(200);
            expect(res.body.tasks).to.be.an('array').with.lengthOf(2);
        });
    });

    describe('GET: /tasks/:id', () => {
        it('should return the task with the given id', async () => {
            const res = await request(app)
                .get('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93');

            expect(res).to.have.status(200);
            expect(res.body.task).to.have.property('id', 'd5a01ade-5771-11e9-8647-d663bd873d93');
        });

        it('should return 404 if the request task does not exist', async () => {
            const res = await request(app)
                .get('/tasks/ed329564-5771-11e9-8647-d663bd873d93');

            expect(res).to.have.status(404);
        });
    });

    describe('POST: /tasks', () => {
        it('should create a new task, and return the newly created task', async () => {
            const oldRes = await request(app).get('/tasks');
            const oldLength = oldRes.body.tasks.length;
            const data = { title: 'new task title', description: 'a new task' };
            const res = await request(app)
                .post('/tasks')
                .send(data);

            expect(res).to.have.status(201);
            expect(res.body.task).to.have.property('title', 'new task title');
            expect(res.body.task).to.have.property('description', 'a new task');

            const newRes = await request(app).get('/tasks');
            expect(newRes.body.tasks).to.have.length(oldLength + 1);
        });

        it('should return 400 when sending an empty title', async () => {
            const data = { title: '', description: '' };
            const res = await request(app)
                .post('/tasks')
                .send(data);

            expect(res).to.have.status(400);
        });
    });

    describe('PUT: /tasks/:id', () => {
        it('should update the task title and description', async () => {
            const data = { title: 'edited title', description: 'edited description' };
            const res = await request(app)
                .put('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93')
                .send(data);

            expect(res).to.have.status(204);

            const taskRes = await request(app).get('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93');
            expect(taskRes.body.task).to.have.property('title', 'edited title');
            expect(taskRes.body.task).to.have.property('description', 'edited description');
        });

        it('should return 400 when trying to update the title to empty', async () => {
            const data = { title: '', description: '' };
            const res = await request(app)
                .put('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93')
                .set(data);

            expect(res).to.have.status(400);
        });
    });

    describe('PUT: /tasks/:id/toggle', () => {
        it('should toggle the "done" status of the task', async () => {
            const oldRes = await request(app).get('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93');
            const task = oldRes.body.task;
            await request(app).put('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93/toggle');
            const res = await request(app).get('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93');
            expect(res.body.task.done).to.equal(!task.done);
        });

        it('should return 404 if the request task does not exist', async () => {
            const res = await request(app)
                .put('/tasks/ed329564-5771-11e9-8647-d663bd873d93/toggle');

            expect(res).to.have.status(404);
        });
    });

    describe('DELETE: /tasks/:id', () => {
        it('should delete the task with id 1', async () => {
            const oldRes = await request(app).get('/tasks');
            const oldLength = oldRes.body.tasks.length;

            const res = await request(app).del('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93');
            expect(res).to.have.status(200);

            const tasksRes = await request(app).get('/tasks');
            expect(tasksRes.body.tasks).to.have.length(oldLength - 1);

            const taskRes = await request(app).get('/tasks/d5a01ade-5771-11e9-8647-d663bd873d93');
            expect(taskRes).to.have.status(404);
        });

        it('should return 404 if the request task does not exist', async () => {
            const res = await request(app)
                .del('/tasks/ed329564-5771-11e9-8647-d663bd873d93');

            expect(res).to.have.status(404);
        });
    });
});