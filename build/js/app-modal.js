(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/BehaviorSubject"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "react", "frint", "frint-store", "rxjs/BehaviorSubject"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/BehaviorSubject")) : factory(root["FrintReact"], root["React"], root["Frint"], root["FrintStore"], root["Rx"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_MODAL = exports.OPEN_MODAL = "OPEN_MODAL";
var CLOSE_MODAL = exports.CLOSE_MODAL = "CLOSE_MODAL";

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(41);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app.registerApp(_app2.default, {
  regions: ['main'],
  weight: 50
});

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frint = __webpack_require__(2);

var _frintStore = __webpack_require__(3);

var _frintReact = __webpack_require__(0);

var _Root = __webpack_require__(42);

var _Root2 = _interopRequireDefault(_Root);

var _reducers = __webpack_require__(44);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'ModalApp',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'store',
    useFactory: function useFactory(_ref) {
      var app = _ref.app;

      var Store = (0, _frintStore.createStore)({
        initialState: {
          modal: {
            value: false
          }
        },
        reducer: _reducers2.default,
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _frintReact = __webpack_require__(0);

var _BehaviorSubject = __webpack_require__(4);

var _modal = __webpack_require__(43);

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'modal modal-overlay ' + (this.props.modal ? 'is-opened' : '') },
        _react2.default.createElement(
          'div',
          { className: 'modal-window' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            !this.props.showEditMode && _react2.default.createElement(
              'h4',
              null,
              'Add new task'
            ),
            this.props.showEditMode && _react2.default.createElement(
              'h4',
              null,
              'Edit new task'
            ),
            _react2.default.createElement(
              'label',
              null,
              'Title'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              id: 'todoInput',
              value: this.props.titleValue,
              onChange: function onChange(e) {
                return _this2.props.changeTitleInput(e.target.value);
              }
            }),
            _react2.default.createElement(
              'label',
              null,
              'Description'
            ),
            _react2.default.createElement('textarea', {
              type: 'text',
              rows: '6',
              value: this.props.descriptionValue,
              onChange: function onChange(e) {
                return _this2.props.changeDescriptionInput(e.target.value);
              }
            }),
            !this.props.showEditMode && _react2.default.createElement(
              'a',
              {
                className: 'button',
                onClick: function onClick() {
                  _this2.props.addTodo(_this2.props.titleValue, _this2.props.descriptionValue);
                  _this2.props.closeModal();
                }
              },
              'Add Todo'
            ),
            this.props.showEditMode && _react2.default.createElement(
              'a',
              {
                className: 'button',
                onClick: function onClick() {
                  _this2.props.updateTodo(_this2.props.todo.id, _this2.props.titleValue, _this2.props.descriptionValue);
                  _this2.props.closeModal();
                }
              },
              'Edit Todo'
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'close-button',
                'aria-label': 'Close modal',
                type: 'button',
                onClick: function onClick() {
                  return _this2.props.closeModal();
                }
              },
              _react2.default.createElement(
                'span',
                { 'aria-hidden': 'true' },
                '\xD7'
              )
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

exports.default = (0, _frintReact.observe)(function (app) {
  // eslint-disable-line func-names
  var showEditMode$ = new _BehaviorSubject.BehaviorSubject(false);
  var formTitleInput$ = new _BehaviorSubject.BehaviorSubject('');
  var formDescriptionInput$ = new _BehaviorSubject.BehaviorSubject('');

  var clearInputs = function clearInputs() {
    formTitleInput$.next('');
    formDescriptionInput$.next('');
    showEditMode$.next(false);
  };

  return (0, _frintReact.streamProps)()
  //Self
  .set(app.get('store').getState$(), function (state) {
    return {
      modal: state.modal.value,
      showEditMode: state.modal.showEditMode,
      todo: state.modal.todo
    };
  }).set(app.get('region').getProps$(), function (regionProps) {
    return { regionProps: regionProps };
  }).set(formTitleInput$, function (titleValue) {
    return { titleValue: titleValue };
  }).set(formDescriptionInput$, function (descriptionValue) {
    return { descriptionValue: descriptionValue };
  }).set(showEditMode$, function (showEditMode) {
    return { showEditMode: showEditMode };
  }).set({
    changeTitleInput: function changeTitleInput(value) {
      formTitleInput$.next(value);
    },
    changeDescriptionInput: function changeDescriptionInput(value) {
      formDescriptionInput$.next(value);
    }
  }).setDispatch({
    openModal: _modal.openModal,
    closeModal: _modal.closeModal
  }, app.get('store')).set({
    logger: app.get('logger')
  })

  // other app: TodosApp
  .set(app.getAppOnceAvailable$('TodosApp'), function (todosApp) {
    return todosApp.get('store').getState$();
  }, function (todosAppState) {
    return { todos: todosAppState.todos.value };
  }).set(app.getAppOnceAvailable$('TodosApp'), function (todosApp) {
    return todosApp.get('store');
  }, function (todosAppStore) {
    return {
      addTodo: function addTodo(title, description) {
        return todosAppStore.dispatch({
          type: 'TODOS_ADD',
          title: title,
          description: description
        });
      },
      updateTodo: function updateTodo(id, title, description) {
        return todosAppStore.dispatch({
          type: 'TODOS_UPDATE',
          id: id,
          title: title,
          description: description
        });
      }
    };
  }).get$(); // composed Observable
})(Root);
module.exports = exports['default'];

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModal = openModal;
exports.closeModal = closeModal;

var _constants = __webpack_require__(10);

function openModal(showEditMode) {
  return {
    type: _constants.OPEN_MODAL,
    showEditMode: showEditMode,
    todo: todo
  };
}

function closeModal() {
  return {
    type: _constants.CLOSE_MODAL
  };
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frintStore = __webpack_require__(3);

var _modal = __webpack_require__(45);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frintStore.combineReducers)({
  modal: _modal2.default
});
module.exports = exports['default'];

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modal;

var _constants = __webpack_require__(10);

var INITIAL_STATE = {
  value: false
};

function modal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.OPEN_MODAL:
      return Object.assign({}, {
        value: true,
        showEditMode: action.showEditMode,
        todo: action.todo
      });

    case _constants.CLOSE_MODAL:
      return Object.assign({}, {
        value: false
      });

    default:
      return state;
  }
}
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=app-modal.js.map