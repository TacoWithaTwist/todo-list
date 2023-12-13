/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   addProject: () => (/* binding */ addProject)\n/* harmony export */ });\nclass Project {\n  constructor(dateStart, dateEnd, title, description, priority) {\n    this.taskList = [];\n    this.dateStart = dateStart;\n    this.dateEnd = dateEnd;\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.changePriority = function (number) {\n      switch (number) {\n        case 1:\n          this.priority = \"High Priority\";\n          break;\n        case 2:\n          this.priority = \"Medium Priority\";\n          break;\n        case 3:\n          this.priority = \"Low Priority\";\n          break;\n      }\n    };\n    this.addNewTask = function (taskContent, isChecked) {\n      const aux = new Task(taskContent, isChecked);\n      this.taskList.push(aux);\n    };\n  }\n}\nclass Task {\n  constructor(taskContent, isChecked) {\n    this.taskContent = taskContent;\n    this.isChecked = isChecked;\n    this.markedForRemoval = false;\n    this.check = function () {\n      this.isChecked = !this.isChecked;\n    };\n    this.removeTask = function () {\n      this.markedForRemoval = true;\n    };\n  }\n}\nfunction addProject(dateStart, dateEnd, title, description, priority) {\n  const newProject = new Project(\n    dateStart,\n    dateEnd,\n    title,\n    description,\n    priority\n  );\n  return newProject;\n}\n\n\n\n//# sourceURL=webpack://webpack/./src/logic.js?");

/***/ }),

/***/ "./src/newProjectCard.js":
/*!*******************************!*\
  !*** ./src/newProjectCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProjectCard: () => (/* binding */ newProjectCard)\n/* harmony export */ });\nfunction newProjectCard() {\n  const card = document.createElement(\"div\");\n  card.className = \"cards\";\n  card.style = \"width: 40vw; height: auto; border: solid black;\";\n}\n\n\n//# sourceURL=webpack://webpack/./src/newProjectCard.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _newProjectCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectCard.js */ \"./src/newProjectCard.js\");\n\n\nfunction pageLoad() {\n  const content = document.getElementById(\"content\");\n  content.style =\n    \"display: flex; justify-content:center;flex-direction:column; flex-wrap: nowrap; gap:2vw;\";\n  const cardContainer = document.createElement(\"div\");\n  cardContainer.id = \"cardContainer\";\n  const newProjectButton = document.createElement(\"button\");\n  newProjectButton.innerHTML = \"Add New Project\";\n  newProjectButton.addEventListener(\"click\", (0,_newProjectCard_js__WEBPACK_IMPORTED_MODULE_1__.newProjectCard)());\n\n  content.appendChild(newProjectButton);\n}\n\n\n//# sourceURL=webpack://webpack/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;