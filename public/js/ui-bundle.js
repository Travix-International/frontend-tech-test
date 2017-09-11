var TravixUIKit =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autoComplete_autoComplete__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autoComplete_autoComplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__autoComplete_autoComplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autoComplete_autoCompleteItem__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autoComplete_autoCompleteItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__autoComplete_autoCompleteItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__badge_badge__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__badge_badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__badge_badge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__button_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__calendar_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_carousel__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__carousel_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkbox_checkbox__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkbox_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__checkbox_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collapse_collapse__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collapse_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__collapse_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collapse_collapseItem__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collapse_collapseItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__collapse_collapseItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datePicker_datePicker__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datePicker_datePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__datePicker_datePicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dropDown_dropDown__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dropDown_dropDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__dropDown_dropDown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__global_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__googleMap_googleMap__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__googleMap_googleMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__googleMap_googleMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__input_input__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__input_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__input_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_list__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__list_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__messageBox_messageBox__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__messageBox_messageBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__messageBox_messageBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_modal__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__modal_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__overlayTrigger_overlayTrigger__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__overlayTrigger_overlayTrigger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__overlayTrigger_overlayTrigger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__price_price__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__price_price___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__price_price__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__radioButton_radioButton__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__radioButton_radioButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__radioButton_radioButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__rating_rating__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__rating_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__rating_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__slidingPanel_slidingPanel__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__slidingPanel_slidingPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__slidingPanel_slidingPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__spinner_spinner__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__spinner_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__spinner_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__toggleButton_toggleButton__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__toggleButton_toggleButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__toggleButton_toggleButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tooltip_tooltip__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tooltip_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__tooltip_tooltip__);


























/* harmony default export */ __webpack_exports__["default"] = ({
  AutoComplete: __WEBPACK_IMPORTED_MODULE_0__autoComplete_autoComplete__["default"],
  AutoCompleteItem: __WEBPACK_IMPORTED_MODULE_1__autoComplete_autoCompleteItem__["default"],
  Badge: __WEBPACK_IMPORTED_MODULE_2__badge_badge__["default"],
  Button: __WEBPACK_IMPORTED_MODULE_3__button_button__["default"],
  Calendar: __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__["default"],
  Carousel: __WEBPACK_IMPORTED_MODULE_5__carousel_carousel__["default"],
  Checkbox: __WEBPACK_IMPORTED_MODULE_6__checkbox_checkbox__["default"],
  Collapse: __WEBPACK_IMPORTED_MODULE_7__collapse_collapse__["default"],
  CollapseItem: __WEBPACK_IMPORTED_MODULE_8__collapse_collapseItem__["default"],
  DatePicker: __WEBPACK_IMPORTED_MODULE_9__datePicker_datePicker__["default"],
  DropDown: __WEBPACK_IMPORTED_MODULE_10__dropDown_dropDown__["default"],
  Global: __WEBPACK_IMPORTED_MODULE_11__global_global__["default"],
  GoogleMap: __WEBPACK_IMPORTED_MODULE_12__googleMap_googleMap__["default"],
  Input: __WEBPACK_IMPORTED_MODULE_13__input_input__["default"],
  List: __WEBPACK_IMPORTED_MODULE_14__list_list__["default"],
  MessageBox: __WEBPACK_IMPORTED_MODULE_15__messageBox_messageBox__["default"],
  Modal: __WEBPACK_IMPORTED_MODULE_16__modal_modal__["default"],
  OverlayTrigger: __WEBPACK_IMPORTED_MODULE_17__overlayTrigger_overlayTrigger__["default"],
  Price: __WEBPACK_IMPORTED_MODULE_18__price_price__["default"],
  RadioButton: __WEBPACK_IMPORTED_MODULE_19__radioButton_radioButton__["default"],
  Rating: __WEBPACK_IMPORTED_MODULE_20__rating_rating__["default"],
  SlidingPanel: __WEBPACK_IMPORTED_MODULE_21__slidingPanel_slidingPanel__["default"],
  Spinner: __WEBPACK_IMPORTED_MODULE_22__spinner_spinner__["default"],
  ToggleButton: __WEBPACK_IMPORTED_MODULE_23__toggleButton_toggleButton__["default"],
  Tooltip: __WEBPACK_IMPORTED_MODULE_24__tooltip_tooltip__["default"],
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/autoComplete/autoComplete.js Unexpected token (38:20)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   handleInputChange = (e) => {\n|     e.stopPropagation();\n|     const value = e.target.value;");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/autoComplete/autoCompleteItem.js Unexpected token (10:18)\nYou may need an appropriate loader to handle this file type.\n|  */\n| class AutoCompleteItem extends Component {\n|   handleItemClick = (e) => {\n|     const { onClick } = this.props;\n| ");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/badge/badge.js Unexpected token (9:74)\nYou may need an appropriate loader to handle this file type.\n|  * Badge component\n|  */\n| const Badge = ({ arrow, border, children, mods, position, title, visible, ...otherProps }) => {\n|   if (!children && !title) {\n|     return <noscript />;");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/button/button.js Unexpected token (35:13)\nYou may need an appropriate loader to handle this file type.\n|     if (!href) {\n|       console.warn('Missing href'); // eslint-disable-line no-console\n|       return <noscript />;\n|     }\n| ");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/calendar/calendar.js Unexpected token (112:22)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   handleItemMouseDown = (e) => {\n|     if (typeof this.props.onMouseDown === 'function') {\n|       this.props.onMouseDown(e);");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/carousel/carousel.js Unexpected token (89:6)\nYou may need an appropriate loader to handle this file type.\n|   renderNavigation() {\n|     return (\n|       <div>\n|         <div className=\"ui-carousel-navigation\">\n|           <a onClick={this.handleClickPrev}>{this.props.prevButton}</a>");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/checkbox/checkbox.js Unexpected token (24:4)\nYou may need an appropriate loader to handle this file type.\n| \n|   return (\n|     <label\n|       {...dataAttributes}\n|       className={className}");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/collapse/collapse.js Unexpected token (38:18)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   handleItemClick = (e, key) => {\n|     const { isAccordion } = this.props;\n|     let { activeKey } = this.state;");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/collapse/collapseItem.js Unexpected token (10:18)\nYou may need an appropriate loader to handle this file type.\n|  */\n| class CollapseItem extends Component {\n|   handleItemClick = (e) => {\n|     const { onClick, id } = this.props;\n| ");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/datePicker/datePicker.js Unexpected token (20:15)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   initInputRef = (elem) => {\n|     this.input = elem;\n|   }");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/dropDown/dropDown.js Unexpected token (53:8)\nYou may need an appropriate loader to handle this file type.\n| \n|       return (\n|         <Option\n|           className={optionClass}\n|           instancePrefix={instancePrefix}");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/global/global.js Unexpected token (26:6)\nYou may need an appropriate loader to handle this file type.\n|   componentDidUpdate() {\n|     unstable_renderSubtreeIntoContainer(this, (\n|       <div className={this.props.className}>\n|         {this.props.children}\n|       </div>");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/googleMap/googleMap.js Unexpected token (114:20)\nYou may need an appropriate loader to handle this file type.\n|    * @param {Number} index - index of marker from marker array\n|    */\n|   handleMarkerClick = (index) => {\n|     if (typeof this.props.onMarkerClick === 'function') {\n|       this.props.onMarkerClick(index);");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/input/input.js Unexpected token (18:18)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   handleInputBlur = (e) => {\n|     this.setState({ isFocused: false });\n|     if (typeof this.props.onBlur === 'function') {");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/list/list.js Unexpected token (22:4)\nYou may need an appropriate loader to handle this file type.\n| \n|   const itemsBlock = items.map((item, index) => (\n|     <li className=\"ui-list__item\" key={index}>\n|       {item}\n|     </li>");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/messageBox/messageBox.js Unexpected token (9:4)\nYou may need an appropriate loader to handle this file type.\n| \n|   const logo = icon && (\n|     <div className=\"ui-messageBox__content-icon\">\n|       {icon}\n|     </div>");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/modal/modal.js Unexpected token (64:14)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   handleClose = (e) => {\n|     this.close(e);\n|   };");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/overlayTrigger/overlayTrigger.js Unexpected token (13:12)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   linkChild = (ref) => {\n|     this.elem = ref;\n|   }");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/price/price.js Unexpected token (69:6)\nYou may need an appropriate loader to handle this file type.\n|   const textBlock = additionalText\n|     ? (\n|       <div className={`${rootClass}__additional-text-block`}>\n|         {additionalText}\n|       </div>");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/radioButton/radioButton.js Unexpected token (30:4)\nYou may need an appropriate loader to handle this file type.\n| \n|   return (\n|     <div className={className} {...restProps}>\n|       <input\n|         checked={checked}");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/rating/rating.js Unexpected token (17:4)\nYou may need an appropriate loader to handle this file type.\n| \n|   return (\n|     <div className=\"ui-rating\" {...restProps}>\n|       {stars.map(v => <b key={v}>★</b>)}\n|       <div className=\"ui-rating-value\" style={{ width: `${value}%` }}>");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/slidingPanel/slidingPanel.js Unexpected token (18:19)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   static propTypes = {\n|     children: PropTypes.oneOfType([\n|       PropTypes.arrayOf(PropTypes.node),");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/spinner/spinner.js Unexpected token (19:4)\nYou may need an appropriate loader to handle this file type.\n|   /* eslint-disable max-len */\n|   return (\n|     <div className={className}>\n|       <svg\n|         styles=\"enable-background:new 0 0 80 80;\"");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/toggleButton/toggleButton.js Unexpected token (12:8)\nYou may need an appropriate loader to handle this file type.\n|    * Initialize default state\n|    */\n|   state = {\n|     activeItem: 0,\n|   }");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/kdogan/workspace/projects/git-projects/frontend-tech-test/node_modules/travix-ui-kit/components/tooltip/tooltip.js Unexpected token (6:12)\nYou may need an appropriate loader to handle this file type.\n| \n| export default class Tooltip extends Component {\n|   linkChild = (ref) => {\n|     this.container = ref;\n|   }");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);