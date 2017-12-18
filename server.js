const next = require('next');

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const tasksContainer = require('./tasks.json');

app.prepare().then(() => {
	const server = express();
	/* API calls configuration starts */
	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());
	// all tasks
	server.get('/tasks/:lastId/:count', (req, res) => {
		const lastId = req.params.lastId;
		const count = parseInt(req.params.count, 10);
		if (lastId !== 0) {
			const indexOfLastId = tasksContainer.tasks.findIndex((element) => element.id === lastId);
			const dataToReturn = tasksContainer.tasks.slice(indexOfLastId + 1, indexOfLastId + count + 1);
			if (dataToReturn.length > 0) {
				return res.status(200).json({ tasks: dataToReturn });
			}
			return res.status(203).json({ tasks: [], error: 'no_more_tasks_to_show' });
		}
		const dataToReturn = tasksContainer.tasks.slice(0, count);
		return res.status(200).json({
			tasks: dataToReturn
		});
	});

	// view single task
	server.get('/task/:id', (req, res) => {
		const id = req.params.id;
		if (id.split('-').length === 5) {
			const task = tasksContainer.tasks.find((item) => item.id === id);
			return res.status(task ? 200 : 404).json(task ? { task } : { message: 'no_item_found' });
		}
		return res.status(400).json({
			message: 'Bad request.',
		});
	});

	// update single task
	server.put('/task/update/:id', (req, res) => {
		const id = req.params.id;
		if (id.split('-').length === 5) {
			const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
			if (taskIndex || taskIndex === 0) {
				const taskToUpdate = tasksContainer.tasks[taskIndex];
				const type = req.body.cameFrom;
				const updateData = req.body;
				delete updateData.cameFrom;
				tasksContainer.tasks[taskIndex] = { ...taskToUpdate, ...updateData };
				const json = JSON.stringify(tasksContainer);
				fs.writeFile('tasks.json', json, 'utf8', error => {
					if (error) {
						return error;
					}
				});
				return res.status(200).json({
					message: 'updated_successfully',
					taskIndex,
					task: tasksContainer.tasks[taskIndex],
					type
				});
			}
			return res.status(404).json({
				message: 'no_item_found',
			});
		}
		return res.status(400).json({
			message: 'wrong_id_provided',
		});
	});

	// create single task
	server.post('/task/create/:title/:date/:description', (req, res) => {
		const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		const GUID = (`${S4() + S4()}-${S4()}-4${S4().substr(0, 3)}-${S4()}-${S4() + S4() + S4()}`).toLowerCase();
		const task = {
			id: GUID,
			title: req.params.title,
			date: req.params.date,
			description: req.params.description,
		};
		tasksContainer.tasks.push(task);
		const json = JSON.stringify(tasksContainer);
		fs.writeFile('tasks.json', json, 'utf8', error => {
			if (error) {
				return error;
			}
		});
		return res.status(201).json({
			message: 'Resource created',
		});
	});

	// delete single task
	server.delete('/task/delete/:id', (req, res) => {
		const id = req.params.id;
		if (id.split('-').length === 5) {
			const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
			if (taskIndex || taskIndex === 0) {
				tasksContainer.tasks.splice(taskIndex, 1);
				const json = JSON.stringify(tasksContainer);
				fs.writeFile('tasks.json', json, 'utf8', error => {
					if (error) {
						return error;
					}
				});
				return res.status(200).json({
					message: 'deleted_successfully',
					taskIndex,
					id
				});
			}
			return res.status(404).json({
				message: 'no_item_found',
			});
		}
		return res.status(400).json({
			message: 'wrong_id_provided',
		});
	});
	/* API calls configuration ends */

	/* Routing configuration starts */
	server.get('/', (req, res) => app.render(req, res, '/', req.params));

	server.get('/todo/:route', (req, res) => app.render(req, res, '/todo', Object.assign({ route: req.params.route }, req.query)));
	server.get('/todo/:route/:id', (req, res) => app.render(req, res, '/todo', Object.assign({
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
