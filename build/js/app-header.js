(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/operator/map"), require("rxjs/operator/concatMap"), require("rxjs/operator/merge"), require("rxjs/operator/scan"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "react", "frint", "frint-store", "rxjs/operator/map", "rxjs/operator/concatMap", "rxjs/operator/merge", "rxjs/operator/scan", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("react"), require("frint"), require("frint-store"), require("rxjs/operator/map"), require("rxjs/operator/concatMap"), require("rxjs/operator/merge"), require("rxjs/operator/scan"), require("prop-types")) : factory(root["FrintReact"], root["React"], root["Frint"], root["FrintStore"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["PropTypes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(33);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app.registerApp(_app2.default, {
  regions: ['header']
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frint = __webpack_require__(2);

var _frintReact = __webpack_require__(0);

var _frintStore = __webpack_require__(3);

var _Root = __webpack_require__(34);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'HeaderApp',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'store',
    useFactory: function useFactory(_ref) {
      var app = _ref.app;

      var Store = (0, _frintStore.createStore)({
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
/* 34 */
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

var _concatMap = __webpack_require__(35);

var _map = __webpack_require__(7);

var _merge = __webpack_require__(36);

var _scan = __webpack_require__(37);

var _propTypes = __webpack_require__(38);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icons = __webpack_require__(39);

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
        { className: 'top-bar' },
        _react2.default.createElement(
          'div',
          { className: 'top-bar-inner' },
          _react2.default.createElement(
            'div',
            { className: 'top-bar-left' },
            _react2.default.createElement(
              'h1',
              null,
              'todo'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'top-bar-right' },
            _react2.default.createElement(
              'span',
              {
                className: 'icons',
                onClick: function onClick() {
                  return _this2.props.openModal(false);
                }
              },
              _react2.default.createElement(_Icons.Add, null),
              _react2.default.createElement(
                'span',
                null,
                'add task'
              )
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

Root.propTypes = {
  color: _propTypes2.default.string,
  modal: _propTypes2.default.bool,
  openModal: _propTypes2.default.func,
  closeModal: _propTypes2.default.func,
  changeColor: _propTypes2.default.func,
  changeColorAsync: _propTypes2.default.func,
  regionProps: _propTypes2.default.object
};
exports.default = (0, _frintReact.observe)(function (app) {
  var _context;

  // eslint-disable-line func-names
  // self
  var store = app.get('store');
  var region = app.get('region');

  var state$ = store.getState$();

  var regionProps$ = (_context = region.getProps$(), _map.map).call(_context, function (regionProps) {
    return {
      regionProps: regionProps
    };
  });

  // other app: ModalApp
  var modalApp$ = app.getAppOnceAvailable$('ModalApp');
  var modalAppState$ = (_context = _concatMap.concatMap.call(modalApp$, function (modalApp) {
    return modalApp.get('store').getState$();
  }), _map.map).call(_context, function (modelState) {
    return {
      modal: modelState.modal.value
    };
  });

  var modalAppActions$ = _map.map.call(modalApp$, function (modalApp) {
    var modalStore = modalApp.get('store');
    return {
      openModal: function openModal(showEditMode) {
        return modalStore.dispatch({ type: 'OPEN_MODAL', showEditMode: showEditMode });
      }
    };
  });

  // combine them all into props
  return (_context = (_context = (_context = _merge.merge.call(state$, regionProps$), _merge.merge).call(_context, modalAppState$), _merge.merge).call(_context, modalAppActions$), _scan.scan).call(_context, function (props, emitted) {
    return _extends({}, props, emitted);
  }, {
    // default props to start with
    modal: false
  });
})(Root);
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Add = exports.Add = function Add() {
    return React.createElement(
        "svg",
        { width: "24", height: "24", viewBox: "0 0 24 24" },
        React.createElement(
            "g",
            { fill: "none", fillRule: "evenodd", transform: "translate(4 3)" },
            React.createElement(
                "mask",
                { id: "jd4FBg", fill: "#fff" },
                React.createElement("path", {
                    d: "M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z" })
            ),
            React.createElement(
                "g",
                { mask: "url(#jd4FBg)" },
                React.createElement("path", { fill: "currentColor", d: "M-4-3h24v24H-4z" })
            )
        )
    );
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=app-header.js.map