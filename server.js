'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const tasksContainer = require('./tasks.json');

app.use(cors());

/**
 * GET /tasks
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

    if (!Number.isNaN(id)) {
        const task = tasksContainer.tasks.find((item) => item.id === id);

        if (task !== null) {
            return res.status(200).json({
                task,
            });
        } else {
            return res.status(404).json({
                message: 'Not found.',
            });
        }
    } else {
        return res.status(400).json({
            message: 'Bad request.',
        });
    }
});

/**
 * PUT /task/update/:id/:title/:description
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/api/task/update/:id/:title/:description', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!Number.isNaN(id)) {
        const task = tasksContainer.tasks.find(item => item.id === id);

        if (task !== null) {
            task.title = req.params.title;
            task.description = req.params.description;
            return res.status(204).json({
                message: 'Updated'
            });
        } else {
            return res.status(404).json({
                message: 'Not found',
            });
        }
    } else {
        return res.status(400).json({
            message: 'Bad request',
        });
    }
});

/**
 * POST /task/create/:title/:description
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/api/task/create/:title/:description', (req, res) => {
    const task = {
        id: tasksContainer.tasks.length+1,
        title: req.params.title,
        description: req.params.description,
    };

    tasksContainer.tasks.push(task);

    return res.status(201).json({
        message: 'Resource created',
    });
});

/**
 * DELETE /task/delete/:id
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/api/task/delete/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!Number.isNaN(id)) {
        const task = tasksContainer.tasks.find(item => item.id === id);

        if (task !== null) {
            const taskIndex = tasksContainer.tasks;
            tasksContainer.tasks.splice(taskIndex, 1);
            return res.status(200).json({
                message: 'Updated successfully',
            });
        } else {
            return es.status(404).json({
                message: 'Not found',
            });
        }
    } else {
        return res.status(400).json({
            message: 'Bad request',
        });
    }
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
