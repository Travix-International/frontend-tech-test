"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var app = require("express");
var cors = require("cors");
var SocketIO = require("socket.io");
var ERROR_MESSAGES = Object.freeze({
    404: 'Not found.',
    400: 'Bad request.'
});
var SUCCESS_MESSAGES = Object.freeze({
    TASK_UPDATED: 'Task Updated',
    TASK_CREATED: 'Task Created',
    TASK_DELETED: 'Task Deleted'
});
var ROUTES = Object.freeze({
    TASKLIST: '/tasks',
    TASK: '/task/:id',
    UPDATETASK: '/task/update/:id/:title/:description',
    CREATETASK: "/task/create/:title/:description",
    DELETETASK: '/task/delete/:id'
});
var PORT = 9001;
var ADDRESS = "http://localhost";
var Task = /** @class */ (function () {
    function Task() {
        var _this = this;
        this._app = app();
        this._app.use(cors());
        this._server = this._app.listen(PORT, function () {
            process.stdout.write("the server is available on " + ADDRESS + ":" + PORT + "/\n");
        });
        this._io = SocketIO(this._server);
        this._io.on('connection', function (socket) {
            console.log('Socket connetced...');
            socket.on('itemsAltered', function () {
                console.log('Items Altered...');
                _this._io.sockets.emit('itemsAltered', _this.tasksContainer.tasks);
            });
        });
        // this.tasksContainer = { tasks: new Array() };
        this.tasksContainer = { tasks: new Array(100).fill({}).map(function (e, index) { return { title: 'ahahaah' + Number(index + 1), description: 'dsdfsdfsdfsdfsdasdafsdf', id: index + 1 }; }) };
        // const tasksContainer = require('./tasks.json');
        /**
         * GET /tasks
         *
         * Return the list of tasks with status code 200.
         */
        this._app.get(ROUTES.TASKLIST, function (req, res) {
            console.log('tasklist:', _this.tasksContainer.tasks);
            return res.status(200).json(__assign({ status: 200 }, _this.tasksContainer));
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
        this._app.get(ROUTES.TASK, function (req, res) {
            var id = parseInt(req.params.id, 10);
            console.log('task:', req.params);
            if (!isNaN(id)) {
                var task_1 = _this.tasksContainer.tasks.find(function (item) { return item.id === id; });
                if (task_1 !== null) {
                    return res.status(200).json({
                        task: task_1
                    });
                }
                else {
                    return res.status(404).json({
                        status: 404,
                        message: ERROR_MESSAGES[404]
                    });
                }
            }
            else {
                return res.status(400).json({
                    status: 400,
                    message: ERROR_MESSAGES[400]
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
        this._app.put(ROUTES.UPDATETASK, function (req, res) {
            console.log('task:', req.params);
            var id = parseInt(req.params.id, 10);
            if (!isNaN(id)) {
                var task_2 = _this.tasksContainer.tasks.find(function (item) { return item.id === id; });
                if (task_2 !== null) {
                    task_2.title = req.params.title;
                    task_2.description = req.params.description;
                    return res.status(204).json({
                        status: 204,
                        message: SUCCESS_MESSAGES.TASK_UPDATED
                    });
                }
                else {
                    return res.status(404).json({
                        status: 404,
                        message: ERROR_MESSAGES[404]
                    });
                }
            }
            else {
                return res.status(400).json({
                    status: 400,
                    message: ERROR_MESSAGES[400]
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
        this._app.post(ROUTES.CREATETASK, function (req, res) {
            console.log('task:', req.params);
            var task = {
                id: _this.tasksContainer.tasks.length + 1,
                title: req.params.title,
                description: req.params.description
            };
            _this.tasksContainer.tasks = _this.tasksContainer.tasks.concat([task]);
            return res.status(201).json({
                status: 201,
                message: SUCCESS_MESSAGES.TASK_CREATED
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
        this._app["delete"](ROUTES.DELETETASK, function (req, res) {
            var failedIds = [];
            var ids = req.params.id.split(',').map(function (id) {
                // const id = parseInt(req.params.id, 10);
                if (!isNaN(id)) {
                    var task_3 = _this.tasksContainer.tasks.find(function (item) { return item.id === Number(id); });
                    if (task_3 !== null) {
                        _this.tasksContainer.tasks = _this.tasksContainer.tasks.filter(function (_task) { return _task.id !== task_3.id; });
                    }
                    else {
                        failedIds = failedIds.concat([id]);
                    }
                }
                else {
                    failedIds = failedIds.concat([id]);
                }
            });
            if (failedIds.length > 0) {
                return res.status(400).json({
                    status: 400,
                    message: ERROR_MESSAGES[400]
                });
            }
            else {
                return res.status(200).json({
                    status: 200,
                    message: SUCCESS_MESSAGES.TASK_UPDATED
                });
            }
        });
    }
    return Task;
}());
var task = new Task();
