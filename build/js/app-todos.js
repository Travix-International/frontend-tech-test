(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("react"), require("frint-store"), require("frint"), require("rxjs/Observable"), require("rxjs/operator/map"), require("rxjs/operator/merge"), require("rxjs/operator/scan"), require("lodash"), require("rxjs/operator/filter"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "react", "frint-store", "frint", "rxjs/Observable", "rxjs/operator/map", "rxjs/operator/merge", "rxjs/operator/scan", "lodash", "rxjs/operator/filter"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("react"), require("frint-store"), require("frint"), require("rxjs/Observable"), require("rxjs/operator/map"), require("rxjs/operator/merge"), require("rxjs/operator/scan"), require("lodash"), require("rxjs/operator/filter")) : factory(root["FrintReact"], root["React"], root["FrintStore"], root["Frint"], root["Rx"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["_"], root["Rx"]["Observable"]["prototype"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_56__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TODOS_ADD = exports.TODOS_ADD = 'TODOS_ADD';
var TODOS_DELETE = exports.TODOS_DELETE = 'TODOS_DELETE';
var TODOS_UPDATE = exports.TODOS_UPDATE = 'TODOS_UPDATE';
var TODOS_GET_ASYNC = exports.TODOS_GET_ASYNC = 'TODOS_GET_ASYNC';

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(47);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app.registerApp(_app2.default, {
  regions: ['main'],
  weight: 100
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(15);

var _lodash2 = _interopRequireDefault(_lodash);

var _frint = __webpack_require__(3);

var _frintStore = __webpack_require__(2);

var _frintReact = __webpack_require__(0);

var _Root = __webpack_require__(48);

var _Root2 = _interopRequireDefault(_Root);

var _reducers = __webpack_require__(52);

var _reducers2 = _interopRequireDefault(_reducers);

var _epics = __webpack_require__(54);

var _epics2 = _interopRequireDefault(_epics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'TodosApp',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'store',
    useFactory: function useFactory(_ref) {
      var app = _ref.app;

      var Store = (0, _frintStore.createStore)({
        initialState: {
          todos: {
            records: [
              // {
              //   id: _.uniqueId(),
              //   title: 'First todo',
              //   description: 'First description'
              // },
              // {
              //   id: _.uniqueId(),
              //   title: 'Second todo',
              //   description: 'Second description'
              // }
            ]
          }
        },
        reducer: _reducers2.default,
        epic: _epics2.default,
        deps: { app: app }
      });

      return new Store();
    },

    deps: ['app']
  }, {
    name: 'region',
    useClass: _frintReact.RegionService
  }]
});
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(0);

var _Observable = __webpack_require__(4);

var _map = __webpack_require__(5);

var _merge = __webpack_require__(10);

var _scan = __webpack_require__(11);

var _constants = __webpack_require__(6);

var _Item = __webpack_require__(49);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this.props.getTodosAsync();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row-columns' },
        this.props.todos.map(function (todo, index) {
          return _react2.default.createElement(_Item2.default, {
            key: 'todo-' + index,
            todo: todo
          });
        })
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

exports.default = (0, _frintReact.observe)(function (app) {
  var _context;

  // eslint-disable-line func-names
  var store = app.get('store');

  var state$ = (_context = store.getState$(), _map.map).call(_context, function (state) {
    return {
      todos: state.todos.records
    };
  });

  var actions$ = _Observable.Observable.of({
    getTodosAsync: function getTodosAsync() {
      return store.dispatch({
        type: _constants.TODOS_GET_ASYNC
      });
    }
  });

  return (_context = _merge.merge.call(state$, actions$), _scan.scan).call(_context, function (props, emitted) {
    return _extends({}, props, emitted);
  }, {
    records: []
  });
})(Root);
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(0);

var _todos = __webpack_require__(50);

var _Icons = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var todo = this.props.todo;


      return _react2.default.createElement(
        'div',
        { className: 'col' },
        _react2.default.createElement(
          'div',
          { className: 'task' },
          _react2.default.createElement(
            'div',
            { className: 'task-header' },
            _react2.default.createElement(
              'h4',
              null,
              todo.title
            ),
            _react2.default.createElement(
              'span',
              { className: 'icons', onClick: function onClick() {
                  return _this2.props.openModal(true, todo);
                } },
              _react2.default.createElement(_Icons.Edit, null)
            ),
            _react2.default.createElement(
              'span',
              { className: 'icons', onClick: function onClick() {
                  return _this2.props.removeTodo(todo.id);
                } },
              _react2.default.createElement(_Icons.Remove, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'task-body' },
            _react2.default.createElement(
              'p',
              null,
              todo.description
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = (0, _frintReact.observe)(function (app) {
  var store = app.get('store');

  return (0, _frintReact.streamProps)()
  // self
  .setDispatch({ removeTodo: _todos.removeTodo }, store)

  // other app: TodosApp
  .set(app.getAppOnceAvailable$('ModalApp'), function (modalApp) {
    return modalApp.get('store').getState$();
  }, function (modalAppState) {
    return { modal: modalAppState.modal.value };
  }).set(app.getAppOnceAvailable$('ModalApp'), function (modalApp) {
    return modalApp.get('store');
  }, function (modalAppStore) {
    return {
      openModal: function openModal(showEditMode, todo) {
        return modalAppStore.dispatch({
          type: 'OPEN_MODAL',
          showEditMode: showEditMode,
          todo: todo
        });
      }
    };
  }).get$();
})(Item);
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.removeTodo = removeTodo;
exports.updateTodo = updateTodo;

var _constants = __webpack_require__(6);

function addTodo(title, description) {
  return {
    type: _constants.TODOS_ADD,
    title: title,
    description: description
  };
}

function removeTodo(id) {
  return {
    type: _constants.TODOS_DELETE,
    id: id
  };
}

function updateTodo(id, title, description) {
  return {
    type: _constants.TODOS_UPDATE,
    id: id,
    title: title,
    description: description
  };
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Edit = exports.Edit = function Edit() {
    return React.createElement(
        "svg",
        { width: "24", height: "24", viewBox: "0 0 24 24" },
        React.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { fill: "currentColor", d: "M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z" }),
            React.createElement("path", { stroke: "currentColor", d: "M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z" })
        )
    );
};

var Remove = exports.Remove = function Remove() {
    return React.createElement(
        "svg",
        { width: "24", height: "24", viewBox: "0 0 24 24" },
        React.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("rect", { width: "14", height: "1", x: "5", y: "6", fill: "currentColor", rx: ".5" }),
            React.createElement("path", { fill: "currentColor", d: "M10 9h1v8h-1V9zm3 0h1v8h-1V9z" }),
            React.createElement("path", { stroke: "currentColor", d: "M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z" })
        )
    );
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frintStore = __webpack_require__(2);

var _todos = __webpack_require__(53);

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frintStore.combineReducers)({
  todos: _todos2.default
});
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = todos;

var _lodash = __webpack_require__(15);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  records: []
};

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.TODOS_ADD:
      return Object.assign({}, {
        records: [].concat(_toConsumableArray(state.records), [{
          id: _lodash2.default.uniqueId(),
          title: action.title,
          description: action.description
        }])
      });

    case _constants.TODOS_DELETE:
      return Object.assign({}, {
        records: state.records.filter(function (todo) {
          return todo.id != action.id;
        })
      });

    case _constants.TODOS_UPDATE:
      return Object.assign({}, {
        records: state.records.map(function (todo) {
          if (todo.id !== action.id) {
            return todo;
          }

          todo.title = action.title;
          todo.description = action.description;

          return todo;
        })
      });

    default:
      return state;
  }
}
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frintStore = __webpack_require__(2);

var _todo = __webpack_require__(55);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frintStore.combineEpics)(_todo2.default);
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fetchTodos$;

var _Observable = __webpack_require__(4);

var _filter = __webpack_require__(56);

var _map = __webpack_require__(5);

var _constants = __webpack_require__(6);

function fetchTodos$(action$) {
    var _context;

    return (_context = _filter.filter.call(action$, function (action) {
        return action.type === _constants.TODOS_GET_ASYNC;
    }), _map.map).call(_context, function (action) {
        // Observable.ajax.getJSON('http://localhost/tasks')
        //     .map(data => ({
        //         type: 'nao sei',
        //         payload: { records: data.items },
        //     }))
        //     .catch(error => [
        //         {
        //             type: 'nao sei tres',
        //             payload: { message: error.message, status: error.status },
        //             error: true,
        //         },
        //     ])
    });
}
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=app-todos.js.map