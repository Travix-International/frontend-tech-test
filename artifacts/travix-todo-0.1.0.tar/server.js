/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__(14);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = function () {
	function Request() {
		(0, _classCallCheck3.default)(this, Request);
	}

	(0, _createClass3.default)(Request, null, [{
		key: "response",
		value: function response(code, result, message, errors, data, _response) {
			_response.statusCode = code;

			_response.send((0, _stringify2.default)({
				"response": {
					code: code,
					result: result,
					message: message,
					timestamp: new Date().getTime(),
					errors: errors,
					data: data
				}
			}));
		}
	}, {
		key: "success",
		value: function success(message, errors, data, response, code) {
			response.statusCode = code;

			response.send((0, _stringify2.default)({
				"response": {
					code: code,
					result: 'success',
					message: message,
					timestamp: new Date().getTime(),
					errors: errors,
					data: data
				}
			}));
		}
	}, {
		key: "error",
		value: function error(message, errors, data, response) {
			response.statusCode = 401;

			response.send((0, _stringify2.default)({
				"response": {
					code: 401,
					result: 'error',
					message: message,
					timestamp: new Date().getTime(),
					errors: errors,
					data: data
				}
			}));
		}
	}]);
	return Request;
}();

exports.default = Request;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderModel = function () {
	function HeaderModel() {
		(0, _classCallCheck3.default)(this, HeaderModel);
	}

	(0, _createClass3.default)(HeaderModel, null, [{
		key: 'setHeaders',
		value: function setHeaders(request, response, next) {
			response.set('Access-Control-Allow-Origin', '*');
			response.set('Access-Control-Allow-Methods', 'OPTIONS,DELETE,PUT,POST,GET');
			response.set('Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type');
			response.set('Content-Type', 'application/json');
			next();
		}
	}, {
		key: 'headers',
		value: function headers(request) {
			return {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-Auth-token': request.headers['x-auth-token']
			};
		}
	}]);
	return HeaderModel;
}();

exports.default = HeaderModel;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(16);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * Saga builder is a custom class created to allow generators
 * to work a Sagas to perform multiple async operations in the
 * models with a cleaner look than the common promises pattern
 */
var Saga = function () {
    function Saga() {
        (0, _classCallCheck3.default)(this, Saga);
    }

    (0, _createClass3.default)(Saga, null, [{
        key: "saga_builder",
        value: function saga_builder(GENERATOR) {
            var args = [];

            for (var key in arguments) {
                if (key != 0) {
                    args.push(arguments[key]);
                }
            }

            //Pass arguments to generator
            var generator = GENERATOR.apply(this, args);

            var handle = function handle(result) {

                if (result.done) {
                    return _promise2.default.resolve(result.value);
                }

                return _promise2.default.resolve(result.value).then(function (res) {
                    return handle(generator.next(res));
                }, function (err) {
                    return handle(generator.throw(err));
                });
            };

            try {
                return handle(generator.next());
            } catch (ex) {
                return _promise2.default.reject(ex);
            }
        }
    }]);
    return Saga;
}();

exports.default = Saga;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(4);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _HeaderController = __webpack_require__(11);

var _HeaderController2 = _interopRequireDefault(_HeaderController);

var _AuthController = __webpack_require__(12);

var _AuthController2 = _interopRequireDefault(_AuthController);

var _TODOController = __webpack_require__(17);

var _TODOController2 = _interopRequireDefault(_TODOController);

var _SocketController = __webpack_require__(22);

var _SocketController2 = _interopRequireDefault(_SocketController);

var _commander = __webpack_require__(24);

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API = function API() {
        var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9001;
        (0, _classCallCheck3.default)(this, API);

        var server = (0, _express2.default)();

        //Configurations
        server.use(_bodyParser2.default.json());

        /* 
         * Servers all the files in the public folder
         * to allow to run a Standalone version of the
         * server with the application
         */
        server.set('views', __dirname + '/public');
        server.engine('html', __webpack_require__(25).renderFile);
        server.set('view engine', 'html');
        server.use(_express2.default.static(__dirname + '/public'));

        //List of subscribed clients
        var clients = [];

        //Websocket
        wsServer = new WebSocketServer({
                server: server
        });

        //New connection listener
        wsServer.on('connection', function (connection) {
                var socketClient = new _SocketController2.default(connection);
                socketClient.router.on('/close', function () {
                        var socketIndex = clients.indexOf(socketClient);
                        socketClient = socketClient.slice(socketClient, 1);
                });

                clients.push(socketClient);
        });

        //Middleware for modules instances
        var headerController = new _HeaderController2.default(server);
        var authController = new _AuthController2.default(server);
        var todoController = new _TODOController2.default(server, clients);

        server.listen(port);
        console.log("Server Running on", port);
};

/* 
 * Allows to run the server in a different port
 */


//API Options


//Import Controllers


_commander2.default.version('0.1.0').option('-p, --port [port]', 'Server port (default 9001)').parse(process.argv);

/* 
 * New API instance with specified configurations
 */
var APIInstance = new API(_commander2.default.port);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _HeaderModel = __webpack_require__(5);

var _HeaderModel2 = _interopRequireDefault(_HeaderModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderController = function HeaderController(server) {
	(0, _classCallCheck3.default)(this, HeaderController);


	// Set Request headers for OPTIONS
	server.all('*', _HeaderModel2.default.setHeaders);
};

exports.default = HeaderController;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AuthModel = __webpack_require__(13);

var _AuthModel2 = _interopRequireDefault(_AuthModel);

var _Request = __webpack_require__(2);

var _Request2 = _interopRequireDefault(_Request);

var _Saga = __webpack_require__(7);

var _Saga2 = _interopRequireDefault(_Saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Helpers
var AuthController = function () {
    function AuthController(server) {
        (0, _classCallCheck3.default)(this, AuthController);


        //Set ContentType and Allowed Headers
        server.all('*', _AuthModel2.default.header_token_present);
        server.all('*', this.header_token_valid);
    }

    /* 
     *  header_token_valid Interceptor for all routes
     */


    (0, _createClass3.default)(AuthController, [{
        key: 'header_token_valid',
        value: function header_token_valid(request, response, next) {
            _Saga2.default.saga_builder(_AuthModel2.default.header_token_valid, request).then(next).catch(function (error) {
                return _Request2.default.error('No access allowed.', [error.stack], {}, response);
            });
        }
    }]);
    return AuthController;
}(); //Models


exports.default = AuthController;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Request = __webpack_require__(2);

var _Request2 = _interopRequireDefault(_Request);

var _HeaderModel = __webpack_require__(5);

var _HeaderModel2 = _interopRequireDefault(_HeaderModel);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthModel = function () {
    function AuthModel() {
        (0, _classCallCheck3.default)(this, AuthModel);
    }

    (0, _createClass3.default)(AuthModel, null, [{
        key: 'header_token_present',


        /* 
            * If authorizationi need, the validation will ocurr in 
            * this two methods
            */
        value: function header_token_present(request, response, next) {
            //TODO Check If auth token present
            next();
        }
    }, {
        key: 'header_token_valid',
        value: /*#__PURE__*/_regenerator2.default.mark(function header_token_valid(request) {
            return _regenerator2.default.wrap(function header_token_valid$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, header_token_valid, this);
        })
    }]);
    return AuthModel;
}();

//Helpers
//Model


exports.default = AuthModel;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _TODOModel = __webpack_require__(18);

var _TODOModel2 = _interopRequireDefault(_TODOModel);

var _Saga = __webpack_require__(7);

var _Saga2 = _interopRequireDefault(_Saga);

var _Request = __webpack_require__(2);

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Helper
//Third Party
var FolderController = function () {
    function FolderController(server, clients) {
        (0, _classCallCheck3.default)(this, FolderController);


        //Cretes middleware to allow controllers to
        //apply actions to all the subscribed clients
        this.notifyClients = function (notifier) {
            for (var i = 0; i < clients.length; i++) {
                notifier(clients[i]);
            }
        };

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

    /* 
     *  GET - Return all tasks mapped on the server
     */


    (0, _createClass3.default)(FolderController, [{
        key: 'get_tasks',
        value: function get_tasks(request, response) {
            _Saga2.default.saga_builder(_TODOModel2.default.get_tasks, request).then(function (todos) {
                return _Request2.default.success('Success.', [], todos, response, 200);
            }).catch(function (error) {
                return _Request2.default.error('An error has ocurred.', [error.stack], {}, response);
            });
        }

        /* 
         *  GET - Return a single tasks by URL specified ID
         */

    }, {
        key: 'get_task_by_id',
        value: function get_task_by_id(request, response) {
            _Saga2.default.saga_builder(_TODOModel2.default.get_task_by_id, request).then(function (todo) {
                return _Request2.default.success('Success.', [], todo, response, 200);
            }).catch(function (error) {
                return _Request2.default.error('An error has ocurred.', [error.stack], {}, response);
            });
        }

        /* 
         *  PUT - Updates single task by URL specified ID and request body
         */

    }, {
        key: 'update_task_by_id',
        value: function update_task_by_id(request, response) {
            var _this = this;

            _Saga2.default.saga_builder(_TODOModel2.default.update_task_by_id, request).then(function (todo) {
                _this.notifyClients(function (client) {
                    return client.notifyUpdated(todos);
                });
                _Request2.default.success('Success.', [], todo, response, 200);
            }).catch(function (error) {
                return _Request2.default.error('An error has ocurred.', [error.stack], {}, response);
            });
        }

        /* 
         *  POST - create a single task by request body
         */

    }, {
        key: 'create_task',
        value: function create_task(request, response) {
            var _this2 = this;

            _Saga2.default.saga_builder(_TODOModel2.default.create_task, request).then(function (todo) {
                _this2.notifyClients(function (client) {
                    return client.notifyCreated(todos);
                });
                _Request2.default.success('Success.', [], todo, response, 200);
            }).catch(function (error) {
                return _Request2.default.error('An error has ocurred.', [error.stack], {}, response);
            });
        }

        /* 
         * DELETE - Delete a single tasks by URL specified ID
         */

    }, {
        key: 'delete_task',
        value: function delete_task(request, response) {
            _Saga2.default.saga_builder(_TODOModel2.default.delete_task, request).then(function (todo) {
                return _Request2.default.success('Success.', [], {}, response, 200);
            }).catch(function (error) {
                return _Request2.default.error('An error has ocurred.', [error.stack], {}, response);
            });
        }
    }]);
    return FolderController;
}();

//Models


exports.default = FolderController;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(19);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _assign = __webpack_require__(21);

var _assign2 = _interopRequireDefault(_assign);

var _fs = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODOS
var todos = {};

//Read TODOS from db
//Core Modules
if ((0, _fs.existsSync)(__dirname + '/tasks.json')) {
    var todos_json = JSON.parse((0, _fs.readFileSync)(__dirname + '/tasks.json', 'utf8'));
    for (var i = 0; i < todos_json.tasks.length; i++) {
        todos[i] = (0, _assign2.default)({}, {
            tags: [],
            _id: i,
            title: '',
            description: '',
            completed: false
        }, todos_json.tasks[i]);
    }
} else {
    console.log(' - tasks.json not found. Server started with empty tasks list.');
}

var TODOModel = function () {
    function TODOModel() {
        (0, _classCallCheck3.default)(this, TODOModel);
    }

    (0, _createClass3.default)(TODOModel, null, [{
        key: 'get_tasks',


        /* 
         * Return all todos
         */
        value: /*#__PURE__*/_regenerator2.default.mark(function get_tasks(request) {
            return _regenerator2.default.wrap(function get_tasks$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt('return', todos);

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, get_tasks, this);
        })

        /* 
         * Return todo by id
         */

    }, {
        key: 'get_task_by_id',
        value: /*#__PURE__*/_regenerator2.default.mark(function get_task_by_id(request) {
            return _regenerator2.default.wrap(function get_task_by_id$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return db.select('todo', {
                                '_id': ObjectId(request.params.id)
                            });

                        case 2:
                            return _context2.abrupt('return', _context2.sent);

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, get_task_by_id, this);
        })

        /* 
         * Update a single todo a return the new object
         */

    }, {
        key: 'update_task_by_id',
        value: /*#__PURE__*/_regenerator2.default.mark(function update_task_by_id(request) {
            return _regenerator2.default.wrap(function update_task_by_id$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            todos[request.body._id] = request.body;

                            return _context3.abrupt('return', (0, _defineProperty3.default)({}, '' + request.body._id, request.body));

                        case 2:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, update_task_by_id, this);
        })

        /* 
         * Creates a new todo, assigns all missing required attributes,
         * creates a custom id and return the newly created object
         */

    }, {
        key: 'create_task',
        value: /*#__PURE__*/_regenerator2.default.mark(function create_task(request) {
            var _id;

            return _regenerator2.default.wrap(function create_task$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _id = (0, _keys2.default)(todos).length;


                            todos[_id] = (0, _assign2.default)({}, {
                                _id: _id,
                                description: '',
                                title: '',
                                tags: [],
                                completed: false
                            }, request.body);

                            return _context4.abrupt('return', (0, _defineProperty3.default)({}, '' + _id, todos[_id]));

                        case 3:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, create_task, this);
        })

        /* 
         * Delete todo by id
         */

    }, {
        key: 'delete_task',
        value: /*#__PURE__*/_regenerator2.default.mark(function delete_task(request) {
            return _regenerator2.default.wrap(function delete_task$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            delete todos[request.params.id];

                            return _context5.abrupt('return', true);

                        case 2:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, delete_task, this);
        })
    }]);
    return TODOModel;
}();

exports.default = TODOModel;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _webSocketRouter = __webpack_require__(23);

var _webSocketRouter2 = _interopRequireDefault(_webSocketRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocketController = function () {
	function SocketController() {
		(0, _classCallCheck3.default)(this, SocketController);

		this.router = new _webSocketRouter2.default(connection, this);
	}

	(0, _createClass3.default)(SocketController, [{
		key: 'notifyDeleted',
		value: function notifyDeleted(TODO) {
			new this.router.message().route('/task').data(TODO).action(webSocketRouterInstance.action.DELETE).send();
		}
	}, {
		key: 'notifyCreated',
		value: function notifyCreated(TODO) {
			new this.router.message().route('/task').data(TODO).action(webSocketRouterInstance.action.CREATE).send();
		}
	}, {
		key: 'notifyUpdated',
		value: function notifyUpdated(TODO) {
			new this.router.message().route('/task').data(TODO).action(webSocketRouterInstance.action.UPDATE).send();
		}
	}]);
	return SocketController;
}(); // https://www.npmjs.com/package/web-socket-router


exports.default = SocketController;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("web-socket-router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("commander");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ })
/******/ ]);