const next = require('next');

const express = require('express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const tasksContainer = require('./tasks.json');

app.prepare().then(() => {
	const server = express();
	/* API calls configuration starts */
	// all tasks
	server.get('/tasks', (req, res) => res.status(200).json(tasksContainer));

	// view single task
	server.get('/task/:id', (req, res) => {
		const id = parseInt(req.params.id, 10);
		if (!Number.isNaN(id)) {
			const task = tasksContainer.tasks.find((item) => item.id === id);
			return res.status(task ? 200 : 404).json(task ? { task } : { message: 'Not found.' });
		}
		return res.status(400).json({
			message: 'Bad request.',
		});
	});

	// update single task
	server.put('/task/update/:id/:title/:description', (req, res) => {
		const id = parseInt(req.params.id, 10);
		if (!Number.isNaN(id)) {
			const task = tasksContainer.tasks.find(item => item.id === id);
			if (task) {
				Object.keys(req.params).forEach(property => {
					task[property] = req.params[property];
				});
				return res.status(204);
			}
			return res.status(404).json({
				message: 'Not found',
			});
		}
		return res.status(400).json({
			message: 'Bad request',
		});
	});

	// create single task
	server.post('/task/create/:title/:description', (req, res) => {
		const task = {
			id: tasksContainer.tasks.length,
			title: req.params.title,
			description: req.params.description,
		};
		tasksContainer.tasks.push(task);
		return res.status(201).json({
			message: 'Resource created',
		});
	});

	// delete single task
	server.delete('/task/delete/:id', (req, res) => {
		const id = parseInt(req.params.id, 10);
		if (!Number.isNaN(id)) {
			const task = tasksContainer.tasks.find(item => item.id === id);
			if (task) {
				const taskIndex = tasksContainer.tasks;
				tasksContainer.tasks.splice(taskIndex, 1);
				return res.status(200).json({
					message: 'Updated successfully',
				});
			}
			return res.status(404).json({
				message: 'Not found',
			});
		}
		return res.status(400).json({
			message: 'Bad request',
		});
	});
	/* API calls configuration ends */

	/* Routing configuration starts */
	server.get('/', (req, res) => app.render(req, res, '/', req.params));

	server.get('/blogger/:route', (req, res) => app.render(req, res, '/blogger', Object.assign({ route: req.params.route }, req.query)));
	server.get('/blogger/:route/:id', (req, res) => app.render(req, res, '/blogger', Object.assign({
		route: req.params.route,
		id: req.params.id
	}, req.query)));

	server.get('*', (req, res) => handle(req, res));
	/* Routing configuration ends */

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
