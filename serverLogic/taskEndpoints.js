const tasksContainer = require('./tasks.json');
const {validateTask, sortByString, reverseIfNeeded} = require('./helpers');

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE_PER_PAGE = 5;

module.exports = function initTaskRoutes(app) {
    /**
     * GET /api/tasks
     *
     * QUERY PARAMS:
     * title: string
     * page: number,
     * sizePerPage: number,
     * sortName: string,
     * sortOrder: 'asc' | 'desc'
     *
     * Return the list of tasks with status code 200. If sizePerPage is not specified then returns 5.
     */
    app.get('/api/tasks', (req, res) => {
        let tasks = [...tasksContainer.tasks]; // don't accidentally modify "database" :D

        let sizePerPage = DEFAULT_SIZE_PER_PAGE;
        if (req.query) {

            // Filtering
            if (req.query.title && req.query.title.trim() !== '') {
                tasks = tasks.filter(task => task.title.toLowerCase().indexOf(req.query.title.toLowerCase()) > -1)
            }

            // Sorting
            if (req.query.sortName === 'title') {
                tasks.sort((a, b) => sortByString(a, b, 'title'));
            }
            if (req.query.sortName === 'description') {
                tasks.sort((a, b) => sortByString(a, b, 'description'));
            }
            tasks = reverseIfNeeded(tasks, req.query.sortOrder);

            // Pagination
            let page = parseInt(req.query.page, 10) || DEFAULT_PAGE;
            sizePerPage = parseInt(req.query.sizePerPage, 10) || DEFAULT_SIZE_PER_PAGE;
            if (!isNaN(page) && !isNaN(sizePerPage)) {
                tasks = tasks.splice((page-1)*sizePerPage, sizePerPage);
            }
        }

        return res.status(200).json({
            contextObjects: tasks,
            totalCount: tasksContainer.tasks.length, // total number in database so we know how many pages to display
            pages: tasks.length === 0 ? 1 : (Math.ceil(tasksContainer.tasks.length / sizePerPage))
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
        if (!task) {
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
}