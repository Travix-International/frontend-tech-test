(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("frint-react"), require("react"), require("frint"), require("rxjs/BehaviorSubject"), require("rxjs/Observable"));
	else if(typeof define === 'function' && define.amd)
		define(["frint-react", "react", "frint", "rxjs/BehaviorSubject", "rxjs/Observable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("frint-react"), require("react"), require("frint"), require("rxjs/BehaviorSubject"), require("rxjs/Observable")) : factory(root["FrintReact"], root["React"], root["Frint"], root["Rx"], root["Rx"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_16__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultLevels = __webpack_require__(25);

var _defaultLevels2 = _interopRequireDefault(_defaultLevels);

var _defaultKeys = __webpack_require__(26);

var _defaultKeys2 = _interopRequireDefault(_defaultKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  defaultLevels: _defaultLevels2.default,
  defaultKeys: _defaultKeys2.default
};
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTransport;

var _Transport2 = __webpack_require__(8);

var _Transport3 = _interopRequireDefault(_Transport2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createTransport() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof opts.log === 'undefined') {
    throw new Error('Must provide a `log` method.');
  }

  var name = typeof opts.name !== 'undefined' ? opts.name : 'Transport';

  var GeneratedTransport = function (_Transport) {
    _inherits(GeneratedTransport, _Transport);

    function GeneratedTransport(options) {
      _classCallCheck(this, GeneratedTransport);

      var _this = _possibleConstructorReturn(this, (GeneratedTransport.__proto__ || Object.getPrototypeOf(GeneratedTransport)).call(this, options));

      _this.name = name;

      if (typeof opts.initialize !== 'undefined') {
        opts.initialize.bind(_this)(options);
      }

      _this.log = opts.log.bind(_this);
      return _this;
    }

    return GeneratedTransport;
  }(_Transport3.default);

  return GeneratedTransport;
}
module.exports = exports['default'];

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transport = function () {
  function Transport() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Transport);

    this.options = _extends({}, opts);

    this.logger = this.options.logger;
  }

  _createClass(Transport, [{
    key: "log",
    value: function log(level, message, meta, cb) {}
  }]);

  return Transport;
}();

exports.default = Transport;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = each;
/**
 * Equivalent of `async` package's `async.each`.
 *
 * @url https://github.com/caolan/async/tree/v1.5.2#eacharr-iterator-callback
 */
function each(arr, iterator, cb) {
  var processed = 0;
  var errors = 0;

  arr.forEach(function (item) {
    iterator(item, function (itemErr) {
      processed += 1;

      if (itemErr) {
        errors += 1;
        cb(itemErr);
      }

      // check if all items processed successfully
      if (processed === arr.length && errors === 0) {
        cb(null);
      }
    });
  });
}
module.exports = exports["default"];

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _frintReact = __webpack_require__(0);

var _app = __webpack_require__(14);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app = new _app2.default();

(0, _frintReact.render)(window.app, document.getElementById('root'));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frint = __webpack_require__(2);

var _Root = __webpack_require__(15);

var _Root2 = _interopRequireDefault(_Root);

var _logger = __webpack_require__(22);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _frint.createApp)({
  name: 'TodoAppTest',
  providers: [{
    name: 'component',
    useValue: _Root2.default
  }, {
    name: 'logger',
    useFactory: function useFactory() {
      return _logger2.default;
    },
    cascade: true,
    deps: ['app']
  }]
});
module.exports = exports['default'];

/***/ }),
/* 15 */
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

var _BehaviorSubject = __webpack_require__(4);

var _Observable = __webpack_require__(16);

__webpack_require__(17);

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
      return _react2.default.createElement(
        'div',
        { id: 'page-background' },
        _react2.default.createElement(_frintReact.Region, {
          name: 'header',
          data: {
            hi: 'data from \'header\' region here',
            showSidebar: this.props.showSidebar
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'editor' },
            _react2.default.createElement(_frintReact.Region, {
              name: 'main',
              data: {
                hi: 'available from props of \'main\' region',
                showSidebar: this.props.showSidebar
              }
            })
          )
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

exports.default = (0, _frintReact.observe)(function (app) {
  var sidebarToggle$ = new _BehaviorSubject.BehaviorSubject(true).map(function (toggleValue) {
    return {
      showSidebar: toggleValue
    };
  });

  var actions$ = _Observable.Observable.of({
    toggle: function toggle(value) {
      sidebarToggle$.next(value);
    }
  });

  var services$ = _Observable.Observable.of({
    logger: app.get('logger')
  });

  return sidebarToggle$.merge(actions$).merge(services$).scan(function (props, emitted) {
    return _extends({}, props, emitted);
  }, {
    // start with these props
    appName: app.getName()
  });
})(Root);
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(20)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./main.less", function() {
		var newContent = require("!!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./main.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);", ""]);

// Module
exports.push([module.i, "* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  color: #202020;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#page-background {\n  background-color: #fafafa;\n}\n.content {\n  padding: 0 20px;\n  min-height: 100vh;\n  background-color: #fff;\n  border-left: 1px solid #f1f1f1;\n  border-right: 1px solid #f1f1f1;\n  max-width: 950px;\n  height: 100%;\n  margin: 0 auto;\n}\n.content .editor {\n  padding-top: 80px;\n}\n.icons {\n  height: 24px;\n  cursor: pointer;\n}\n.icons svg {\n  color: #202020;\n  border-radius: 3px;\n  padding: 2px 4px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.icons:hover svg {\n  background-color: rgba(0, 0, 0, 0.1);\n}\np {\n  margin: 0;\n}\nh1 {\n  font-size: 2em;\n  margin: 0;\n}\nh2 {\n  font-size: 1.5em;\n  margin: 0;\n}\nh3 {\n  font-size: 1.17em;\n  margin: 0;\n}\nh4 {\n  font-size: 1.12em;\n  margin: 0;\n}\nh5 {\n  font-size: 0.83em;\n  margin: 0;\n}\nh6 {\n  font-size: 0.75em;\n  margin: 0;\n}\n/**\n * Main colors\n */\n.top-bar {\n  background-color: #f7f7f7;\n  border-color: #e3e3e3;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.top-bar .top-bar-inner {\n  max-width: 950px;\n  height: 100%;\n  padding: 0 20px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n}\n.top-bar .icons {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.top-bar .icons span {\n  margin-left: 5px;\n}\n.top-bar .icons:hover svg {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.top-bar .top-bar-left {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.task {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  margin-bottom: 20px;\n  background-color: #fff;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  -webkit-box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n  -moz-box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n}\n.task .task-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: top;\n  -ms-flex-align: top;\n  align-items: top;\n  padding: 10px 20px;\n  background-color: hsl(0, 0%, 97%);\n}\n.task .task-header h4 {\n  margin-right: auto;\n}\n.task .task-body {\n  padding: 20px;\n}\n.task svg {\n  visibility: hidden;\n}\n.task:hover svg {\n  visibility: visible;\n}\n@media (max-width: 961px) {\n  .task svg {\n    visibility: visible;\n  }\n}\n.modal {\n  right: auto;\n  left: auto;\n  margin: 0 auto;\n  display: none;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 300;\n  background: rgba(102, 102, 102, 0.5);\n  overflow-y: auto;\n  transition: opacity 0.2s ease-in;\n}\n.modal-window {\n  z-index: 301;\n  border-radius: 5px;\n  position: relative;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px;\n  margin-top: 55px;\n  padding: 20px;\n  background-color: #fff;\n}\n.modal-window h4 {\n  margin-bottom: 20px;\n}\n.is-opened {\n  display: block;\n}\n@media screen and (min-width: 40em) {\n  .modal-window {\n    width: 600px;\n    max-width: 75rem;\n  }\n}\n.button {\n  background-color: #dd4b39;\n  color: #fafafa;\n  border: 1px solid transparent;\n  font-weight: bold;\n  padding: 6px 12px 7px 12px;\n  position: relative;\n  display: inline-block;\n  border-radius: 3px;\n  text-decoration: none;\n  text-align: center;\n}\n.close-button {\n  position: absolute;\n  cursor: pointer;\n  right: 1rem;\n  top: 0.5rem;\n  font-size: 2em;\n  color: #868686;\n}\n.close-button:hover,\n.close-button:focus {\n  color: #202020;\n}\n[type='button'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\ninput,\ntextarea {\n  border: solid 1px #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  padding: 0.5em;\n  width: 100%;\n  font-size: inherit;\n  margin-bottom: 10px;\n}\ntextarea {\n  resize: vertical;\n}\n.row-columns {\n  -moz-column-width: 23em;\n  -webkit-column-width: 23em;\n  column-width: 23em;\n  -moz-column-gap: 1.5em;\n  -webkit-column-gap: 1.5em;\n  column-gap: 1.5em;\n}\n.row-columns > div {\n  display: inline-block;\n  width: 100%;\n}\n", ""]);



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(21);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _travixLogger = __webpack_require__(23);

var logger = new _travixLogger.Logger({
  transports: [(0, _travixLogger.configureConsoleTransport)()]
});

exports.default = logger;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(5);

var _constants2 = _interopRequireDefault(_constants);

var _createTransport = __webpack_require__(6);

var _createTransport2 = _interopRequireDefault(_createTransport);

var _Transport = __webpack_require__(8);

var _Transport2 = _interopRequireDefault(_Transport);

var _Logger = __webpack_require__(27);

var _Logger2 = _interopRequireDefault(_Logger);

var _console = __webpack_require__(28);

var _console2 = _interopRequireDefault(_console);

var _http = __webpack_require__(29);

var _http2 = _interopRequireDefault(_http);

var _each = __webpack_require__(9);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  constants: _constants2.default,
  createTransport: _createTransport2.default,
  Transport: _Transport2.default,
  Logger: _Logger2.default,

  // configureable transports
  configureConsoleTransport: _console2.default,
  configureHttpTransport: _http2.default,

  // utils
  each: _each2.default
}; /* global module */

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Keyed by method names.
 *
 * Options:
 *   - name: Actual level name, passed to formatters and transports
 */
exports.default = {
  debug: {
    name: 'Debug'
  },
  info: {
    name: 'Info'
  },
  warn: {
    name: 'Warning'
  },
  error: {
    name: 'Error'
  },
  exception: {
    name: 'Error',
    error: true
  }
};
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  event: 'messagetype',
  timestamp: 'timestamp',
  errorMessage: 'exceptionmessage',
  errorStack: 'exceptiondetails'
};
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(5);

var _each = __webpack_require__(9);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Logger);

    this.options = _extends({
      levels: _constants.defaultLevels,

      // array of Transport classes
      transports: [],

      // array of formatter functions
      formatters: [],

      // default meta object, which log meta will extend from
      defaultMeta: {},

      timestamp: false

    }, opts);

    this.transportInstances = this.options.transports.map(function (Transport) {
      return new Transport({
        logger: _this
      });
    });

    // generated level methods
    Object.keys(this.options.levels).forEach(function (levelMethodName) {
      var level = _this.options.levels[levelMethodName];

      var levelName = typeof level.name !== 'undefined' ? level.name : levelMethodName;

      // regular logs
      if (level.error !== true) {
        _this[levelMethodName] = function (event, message, meta, cb) {
          this.log(levelName, event, message, meta, cb);
        }.bind(_this);

        return;
      }

      var errorMessageKey = typeof _this.options.errorMessageKey !== 'undefined' ? _this.options.errorMessageKey : _constants.defaultKeys.errorMessage;

      var errorStackKey = typeof _this.options.errorStackKey !== 'undefined' ? _this.options.errorStackKey : _constants.defaultKeys.errorStack;

      // logs with error
      _this[levelMethodName] = function (event, error, message, meta, cb) {
        var _extends2;

        this.log(levelName, event, message, _extends({}, meta, (_extends2 = {}, _defineProperty(_extends2, errorMessageKey, error.message), _defineProperty(_extends2, errorStackKey, error.stack), _extends2)), cb);
      }.bind(_this);
    });
  }

  _createClass(Logger, [{
    key: 'log',
    value: function log(level, event, message) {
      var _this2 = this;

      var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var logCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      (0, _each2.default)(this.transportInstances, function (transport, asyncCallback) {
        var formatted = {
          level: level,
          event: event,
          message: message,
          meta: _extends({}, _this2.options.defaultMeta, meta)
        };

        if (_this2.options.timestamp) {
          var timestamp = new Date();
          var timestampKey = typeof _this2.options.timestamp === 'string' ? _this2.options.timestamp : _constants.defaultKeys.timestamp;

          formatted.meta[timestampKey] = timestamp;
        }

        _this2.options.formatters.forEach(function (formatter) {
          formatted = formatter(formatted.level, formatted.event, formatted.message, formatted.meta);
        });

        transport.log(formatted.level, formatted.event, formatted.message, formatted.meta, asyncCallback);
      }, function (err) {
        if (typeof logCallback === 'function') {
          logCallback(err);
        }
      });
    }
  }]);

  return Logger;
}();

exports.default = Logger;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureConsoleTransport;

var _createTransport = __webpack_require__(6);

var _createTransport2 = _interopRequireDefault(_createTransport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Usage:
 *
 * ```js
 * const logger = new Logger(
 *   transports: [
 *     configureConsoleTransport({
 *       console: window.console // optional
 *     })
 *   ]
 * );
 * ```
 */
function configureConsoleTransport() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var filter = typeof options.filter !== 'undefined' ? options.filter : function () {
    return true;
  };

  var format = typeof options.format !== 'undefined' ? options.format : null;

  var name = typeof options.name !== 'undefined' ? options.name : 'ConsoleTransport';

  var useConsole = typeof options.console !== 'undefined' ? options.console : console; // eslint-disable-line

  return (0, _createTransport2.default)({
    name: name,

    log: function log(level, event, message, meta, cb) {
      if (!filter(level, event, message, meta)) {
        // skipping
        return cb(null);
      }

      if (format) {
        useConsole.log(format(level, event, message, meta));
      } else {
        useConsole.log('[' + level + ']', event, message, meta);
      }

      cb(null);
    }
  });
}
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global fetch */


exports.default = configureHttpTransport;

__webpack_require__(30);

var _constants = __webpack_require__(5);

var _createTransport = __webpack_require__(6);

var _createTransport2 = _interopRequireDefault(_createTransport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Usage:
 *
 * ```js
 * const logger = new Logger(
 *   transports: [
 *     configureHttpTransport({
 *       url: 'https://mylogs.example.com/some/path'
 *       method: 'POST',
 *       headers: {
 *         'Accept': 'application/json',
 *         'Content-Type': 'application/json'
 *       },
 *       credentials: 'same-origin',
 *       mode: 'cors',
 *       cache: 'default',
 *       redirect: 'follow',
 *       formatBody(level, event, message, meta) {
 *         return JSON.stringify({
 *           level,
 *           message,
 *           ...meta
 *         });
 *       }
 *     })
 *   ]
 * );
 * ```
 */

function makeFetchOptions(options) {
  var fetchOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  // fetch API options
  ['method', 'headers', 'credentials', 'mode', 'cache', 'redirect', 'referrer', 'referrerPolicy', 'integrity'].forEach(function (optionKey) {
    if (typeof options[optionKey] !== 'undefined') {
      fetchOptions[optionKey] = options[optionKey];
    }
  });

  return fetchOptions;
}

function configureHttpTransport() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof options.url === 'undefined') {
    throw new Error('Must provide `url`.');
  }

  var fetchOptions = makeFetchOptions(options);

  if (['GET', 'HEAD'].indexOf(fetchOptions.method.toUpperCase()) > -1) {
    throw new Error('Method does not accept `body`.');
  }

  var filter = typeof options.filter !== 'undefined' ? options.filter : function () {
    return true;
  };

  var name = typeof options.name !== 'undefined' ? options.name : 'HttpTransport';

  var eventKey = typeof options.eventKey !== 'undefined' ? options.eventKey : _constants.defaultKeys.event;

  var formatBody = typeof options.formatBody !== 'undefined' ? options.formatBody : function (level, event, message, meta) {
    var _extends2;

    return JSON.stringify(_extends((_extends2 = {
      level: level
    }, _defineProperty(_extends2, eventKey, event), _defineProperty(_extends2, 'message', message), _extends2), meta));
  };

  return (0, _createTransport2.default)({
    name: name,

    log: function log(level, event, message, meta, cb) {
      if (!filter(level, event, message, meta)) {
        // skipping
        return cb(null);
      }

      fetch(options.url, _extends({}, fetchOptions, {
        body: formatBody(level, event, message, meta)
      })).then(function (response) {
        return cb(null, response);
      }).catch(cb);
    }
  });
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(31);
module.exports = self.fetch.bind(self);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Headers"] = Headers;
/* harmony export (immutable) */ __webpack_exports__["Request"] = Request;
/* harmony export (immutable) */ __webpack_exports__["Response"] = Response;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (immutable) */ __webpack_exports__["fetch"] = fetch;
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=core.js.map