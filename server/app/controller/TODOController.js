//Third Party
import express from 'express'

//Models
import TODOModel from '../model/TODOModel'

//Helper
import Saga from '../helper/Saga'
import Request from '../helper/Request'

class FolderController {

    constructor (server) {

        //GET
        server.get('/task', this.get_tasks);
        server.get('/task/:id', this.get_task_by_id);

        //PUT
        server.put('/task/:id', this.update_task_by_id);

        //POST
        server.post('/task', this.create_task);

        //DELETE
        server.delete('/task/:id', this.delete_task);

    }

    get_tasks (request, response) {
        Saga.saga_builder(TODOModel.get_tasks, request)
            .then(
                todos => Request.success('Success.', [], todos, response, 200)
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

    get_task_by_id (request, response) {
        Saga.saga_builder(TODOModel.get_task_by_id, request)
            .then(
                todo => Request.success('Success.', [], todo, response, 200)
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

    update_task_by_id (request, response) {
        Saga.saga_builder(TODOModel.update_task_by_id, request)
            .then(
                todo => Request.success('Success.', [], todo, response, 200)
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

    create_task (request, response) {
        Saga.saga_builder(TODOModel.create_task, request)
            .then(
                todo => Request.success('Success.', [], todo, response, 200)
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

    delete_task (request, response) {
        Saga.saga_builder(TODOModel.delete_task, request)
            .then(
                todo => Request.success('Success.', [], {}, response, 200)
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

}

export default FolderController