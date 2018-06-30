'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const tasksContainer = require('./tasks.json');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

/**
 * GET /api/tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/api/tasks', (req, res) => {
    const tasks = tasksContainer.tasks;
    return res.status(200).json({
        contextObjects: tasks,
        totalCount: tasks.length,
        pages: (tasks.length / 5) + 1
    });
});

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/api/task/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        return res.status(400).json({ message: 'Bad request.' });
    }

    const task = tasksContainer.tasks.find((item) => item.id === id);
    if (task === null) {
        return res.status(404).json({ message: 'Not found.' });
    }

    return res.status(200).json({ task });
});

/**
 * POST /task
 *
 * BODY:
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/api/task', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Not created', description: 'No content' });
    }

    const task = {
        id: tasksContainer.tasks.length+1,
        title: req.body.title,
        description: req.body.description,
    };

    const validationResult = validateTask(task);
    if (!validationResult.valid) {
        return res.status(400).json({ message: 'Not created', description: 'Validation failed', validationResult });
    }

    tasksContainer.tasks.push(task);
    return res.status(201).json({ message: 'Resource created' });
});

/**
 * PUT /api/task/:id
 *
 * URL PARAM:
 * id: Number
 *
 * BODY:
 *  title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/api/task/:id', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Content is empty' });
    }

    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        return res.status(400).json({ message: 'Bad request' });
    }

    const task = tasksContainer.tasks.find(item => item.id === id);
    if (task === null) {
        return res.status(404).json({ message: 'Not updated', description: `Not found with id ${id}` });
    }

    const validationResult = validateTask(req.body);
    if (!validationResult.valid) {
        return res.status(400).json({ message: 'Not updated', description: 'Validation failed', validationResult });
    }

    task.title = req.body.title;
    task.description = req.body.description;

    return res.status(204).json({ message: 'Updated' });
});

/**
 * DELETE /api/task/:id
 *
 * URL PARAM:
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/api/task/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (Number.isNaN(id)) {
        return res.status(400).json({ message: 'Bad request' });
    }

    const task = tasksContainer.tasks.find(item => item.id === id);
    if (!task) {
        return es.status(404).json({ message: 'Not deleted', description: `Not found with id ${id}` });
    }

    const taskIndex = tasksContainer.tasks;
    tasksContainer.tasks.splice(taskIndex, 1);
    return res.status(200).json({ message: 'Deleted successfully' });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(5000, () => {
    process.stdout.write('the server is available on http://localhost:5000/\n');
});

/**
 * Validates task model
 * @param task
 * @returns {valid: boolean, validationFields: Array | undefined}
 */
function validateTask(task) {
    if (!task) {
        return { valid: false }
    }

    const validationFields = [];
    if (!task.title) {
        validationFields.push({name: 'title', message: 'Title is empty'})
    }
    if (!task.description) {
        validationFields.push({name: 'description', message: 'Description is empty'})
    }

    if (validationFields.length > 0) {
        return { valid: false, validationFields }
    }

    return { valid: true }
}