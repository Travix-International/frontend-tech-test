const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const bodyParser = require('body-parser');

const fileName = 'tasks';
const tasksContainer = require(`./${fileName}.json`);

const structureTaskData = ({ id, title, date, description, done }) => {
	const task = { id, title, date, description, done };
	Object.keys(task).forEach(property => {
		if (task[property] === undefined) {
			delete task[property];
		}
	});
	return task;
};
// socket.io server
io.on('connection', socket => {
	// socket.io server
	socket.on('taskStatusChanged', data => {
		const taskIndex = tasksContainer.tasks.findIndex(item => item.id === data.id);
		socket.broadcast.emit('taskStatusChanged', {
			message: 'updated_successfully',
			task: { ...tasksContainer.tasks[taskIndex], done: data.done, title: data.title, date: data.date, description: data.description },
			taskIndex,
		});
	});
});

nextApp.prepare().then(() => {
	/* API calls configuration starts */
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	// all tasks
	app.get('/tasks/:lastId/:count', (req, res) => {
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
	app.get('/task/:id', (req, res) => {
		const id = req.params.id;
		if (id.split('-').length === 5) {
			const task = tasksContainer.tasks.find((item) => item.id === id);
			const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
			return res.status(task ? 200 : 404).json(task ? { task, taskIndex } : { message: 'bad_task_id' });
		}
		return res.status(400).json({
			message: 'Bad request.',
		});
	});

	// update single task
	app.put('/task/update/:id', (req, res) => {
		const id = req.params.id;
		if (id.split('-').length === 5) {
			const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
			if (taskIndex || taskIndex === 0) {
				const taskToUpdate = tasksContainer.tasks[taskIndex];
				const updateData = structureTaskData((req.body.task || req.body));
				tasksContainer.tasks[taskIndex] = { ...taskToUpdate, ...updateData };
				const json = JSON.stringify(tasksContainer);
				fs.writeFile(`./${fileName}.json`, json, 'utf8', error => {
					if (error) {
						return error;
					}
				});
				const resObj = {
					message: 'updated_successfully',
					taskIndex,
					task: tasksContainer.tasks[taskIndex]
				};
				return res.status(200).json(resObj);
			}
			return res.status(404).json({
				message: 'bad_task_id',
			});
		}
		return res.status(400).json({
			message: 'wrong_id_provided',
		});
	});

	// create single task
	app.post('/task/create/:title/:date/:description', (req, res) => {
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
		fs.writeFile(`./${fileName}.json`, json, 'utf8', error => {
			if (error) {
				return error;
			}
		});
		return res.status(201).json({
			message: 'new_task_created',
		});
	});

	// delete single task
	app.delete('/task/delete/:id', (req, res) => {
		const id = req.params.id;
		if (id.split('-').length === 5) {
			const taskIndex = tasksContainer.tasks.findIndex(item => item.id === id);
			if (taskIndex || taskIndex === 0) {
				tasksContainer.tasks.splice(taskIndex, 1);
				const json = JSON.stringify(tasksContainer);
				fs.writeFile(`./${fileName}.json`, json, 'utf8', error => {
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
	app.get('/', (req, res) => nextApp.render(req, res, '/', req.params));

	app.get('/todo/:route', (req, res) => nextApp.render(req, res, '/todo', Object.assign({ route: req.params.route }, req.query)));
	app.get('/todo/:route/:id', (req, res) => nextApp.render(req, res, '/todo', Object.assign({
		route: req.params.route,
		id: req.params.id
	}, req.query)));

	/* Routing configuration ends */
	app.get('*', (req, res) => nextHandler(req, res));

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
