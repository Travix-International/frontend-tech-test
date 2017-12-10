//Third Party
import express from 'express'

//Models
import TODOModel from '../model/TODOModel'

//Helper
import Saga from '../helper/Saga'
import Request from '../helper/Request'

class FolderController {

    constructor (server, clients) {

        //Cretes middleware to allow controllers to
        //apply actions to all the subscribed clients
        this.notifyClients = (notifier) => {
            for (let i = 0; i < clients.length; i++) {
                notifier(clients[i]);
            }
        }

        //GET
        server.get('/task', (request, response) => this.get_tasks(request, response));
        server.get('/task/:id', (request, response) => this.get_task_by_id(request, response));

        //PUT
        server.put('/task/:id', (request, response) => this.update_task_by_id(request, response));

        //POST
        server.post('/task', (request, response) => this.create_task(request, response));

        //DELETE
        server.delete('/task/:id', (request, response) => this.delete_task(request, response));

    }

    /* 
     *  GET - Return all tasks mapped on the server
     */
    get_tasks (request, response) {
        Saga.saga_builder(TODOModel.get_tasks, request)
            .then(
                todos => Request.success('Success.', [], todos, response, 200)
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

    /* 
     *  GET - Return a single tasks by URL specified ID
     */
    get_task_by_id (request, response) {
        Saga.saga_builder(TODOModel.get_task_by_id, request)
            .then(
                todo => Request.success('Success.', [], todo, response, 200)
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

    /* 
     *  PUT - Updates single task by URL specified ID and request body
     */
    update_task_by_id (request, response) {
        Saga.saga_builder(TODOModel.update_task_by_id, request)
            .then(
                todo => {
                    this.notifyClients(client => client.notifyUpdated(todo));
                    Request.success('Success.', [], todo, response, 200)
                }
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }


    /* 
     *  POST - create a single task by request body
     */
    create_task (request, response) {
        Saga.saga_builder(TODOModel.create_task, request)
            .then(
                todo => {
                    this.notifyClients(client => client.notifyCreated(todo));
                    Request.success('Success.', [], todo, response, 200)
                }
            )
            .catch(
                error => Request.error('An error has ocurred.', [error.stack], {}, response)
            );
    }

    /* 
     * DELETE - Delete a single tasks by URL specified ID
     */
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