describe('Task API Routes', function() {  

    // In this test it's expected a task list
    describe('GET /tasks', function() {
        it('returns a list of tasks', function(done) {
            request.get('/tasks')
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Testing the save task expecting status 201 of success
    describe('POST /tasks', function() {
        it('saves a new task', function(done) {
            var task = {
                title: 'this is a new title',
                description: 'this is a desc'
            }
            request.post(`/task/create/${task.title}/${task.description}`)
                .expect(201)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Here it'll be tested two behaviors when try to find a task by id
    describe('GET /task/:id', function() {
        // Testing how to find a task by id
        it('returns a task by id', function(done) {
            request.get('/task/0')
                .expect(200)
                .end(function(err, res) {
                    //expect(res.body.task.id).to.eql(0);
                    done(err);
                });
        });

        it('returns status 400 for bad request', function(done) {
            var task = {
                id: 'wrongid'
            }
            request.get('/task/'+task.id)
                .expect(400)
                .end(function(err, res) {
                    done(err);
                });
        });

        // Testing the status 404 for task not found
        it('returns status 404 when id is not found', function(done) {
            var task = {
                id: 10
            }
            request.get('/task/'+task.id)
                .expect(404)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Testing how to update a task expecting status 201 of success
    describe('PUT /task/:id', function() {
        it('updates a task', function(done) {
            var task = {
                id: 0,
                title: 'dummy',
                description: 'description'
            };
            request.put(`/task/update/${task.id}/${task.title}/${task.description}`)
            .expect(204)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Testing how to delete a task expecting status 201 of success
    describe('DELETE /task/:id', function() {
        it('removes a task', function(done) {
            var task = {
                id: 1
            }
            request.delete('/task/delete/' + task.id)
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });
});