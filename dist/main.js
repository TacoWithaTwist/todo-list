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

/***/ "./src/dialogLoad.js":
/*!***************************!*\
  !*** ./src/dialogLoad.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadModal: () => (/* binding */ loadModal)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _reload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reload */ \"./src/reload.js\");\n\n\n\nfunction loadModal() {\n  const projectDialog = document.createElement(\"dialog\");\n  projectDialog.id = \"dialog\";\n  document.body.appendChild(projectDialog);\n  projectDialog.showModal();\n  const form = document.createElement(\"form\");\n  const label1 = document.createElement(\"label\");\n  label1.innerHTML = \"Project Title:\";\n  const input1 = document.createElement(\"input\");\n  input1.type = \"text\";\n  input1.id = \"title\";\n  const label2 = document.createElement(\"label\");\n  label2.innerHTML = \"Start Date:\";\n  const input2 = document.createElement(\"input\");\n  input2.type = \"date\";\n  input2.id = \"startDate\";\n  const label3 = document.createElement(\"label\");\n  label3.innerHTML = \"Deadline:\";\n  const input3 = document.createElement(\"input\");\n  input3.type = \"date\";\n  input3.id = \"endDate\";\n  const label4 = document.createElement(\"label\");\n  label4.innerHTML = \"Project Description:\";\n  const input4 = document.createElement(\"input\");\n  input4.id = \"description\";\n  const urgency = document.createElement(\"select\");\n  const important = document.createElement(\"option\");\n  important.value = \"High Priority\";\n  important.text = \"Very Important\";\n  const mediumImportance = document.createElement(\"option\");\n  mediumImportance.value = \"Medium Priority\";\n  mediumImportance.text = \"Moderately Important\";\n  const nonImportant = document.createElement(\"option\");\n  nonImportant.value = \"Low Priority\";\n  nonImportant.text = \"Below Important\";\n  const modalButton = document.createElement(\"button\");\n  modalButton.type = \"submit\";\n  modalButton.innerHTML = \"Add new Project\";\n  const div1 = document.createElement(\"div\");\n  div1.className = \"dialogElements\";\n  const div2 = document.createElement(\"div\");\n  div2.className = \"dialogElements\";\n  const div3 = document.createElement(\"div\");\n  div3.className = \"dialogElements\";\n  const div4 = document.createElement(\"div\");\n  div4.className = \"dialogElements\";\n  const div5 = document.createElement(\"div\");\n  div5.className = \"dialogElements\";\n  div1.appendChild(label1);\n  div1.appendChild(input1);\n  div2.appendChild(label2);\n  div2.appendChild(input2);\n  div3.appendChild(label3);\n  div3.appendChild(input3);\n  div4.appendChild(label4);\n  div4.appendChild(input4);\n  div5.appendChild(modalButton);\n  form.appendChild(div1);\n  form.appendChild(div2);\n  form.appendChild(div3);\n  form.appendChild(div4);\n  form.appendChild(div5);\n  projectDialog.appendChild(form);\n  modalButton.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    while (\n      input1 === null ||\n      input2 === null ||\n      input3 === null ||\n      input4 === null\n    ) {\n      projectDialog.style = \"border : solid red;\";\n      alert(\"you must enter correct inputs please\");\n    }\n    const newProject = new _logic__WEBPACK_IMPORTED_MODULE_0__.Project(\n      input2.value,\n      input3.value,\n      input1.value,\n      input4.value,\n      urgency.value\n    );\n    const cardContainer = document.getElementById(\"cardContainer\");\n    const card = document.createElement(\"div\");\n    div1.className = \"dialogElements\";\n    card.className = \"cards\";\n    card.style =\n      \"max-width: 30svw;min-width:20svw; min-height: 40svh;max-height:50svh; border: solid black; border-radius:5px;text-align:center; position:relative;\";\n    const title = document.createElement(\"h3\");\n    title.innerHTML = newProject.title;\n    const dateStart = document.createElement(\"span\");\n    dateStart.style =\n      \"position:absolute; top:-15%; left:0; border-top:solid 2px;\";\n    dateStart.innerHTML = newProject.dateStart;\n    const dateEnd = document.createElement(\"span\");\n    dateEnd.style =\n      \"position:absolute; bottom:-15%; right:0; border-bottom:solid 2px;\";\n    dateEnd.innerHTML = newProject.endDate;\n    const description = document.createElement(\"p\");\n    description.innerHTML = \"this is description for project\";\n    card.appendChild(title);\n    card.appendChild(dateStart);\n    card.appendChild(dateEnd);\n    card.appendChild(description);\n    cardContainer.appendChild(card);\n    projectDialog.close();\n  });\n}\n\n\n//# sourceURL=webpack://webpack/./src/dialogLoad.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Project {\n  constructor(dateStart, dateEnd, title, description, priority) {\n    this.taskList = [];\n    this.dateStart = dateStart;\n    this.dateEnd = dateEnd;\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.changePriority = function (number) {\n      switch (number) {\n        case 1:\n          this.priority = \"High Priority\";\n          break;\n        case 2:\n          this.priority = \"Medium Priority\";\n          break;\n        case 3:\n          this.priority = \"Low Priority\";\n          break;\n      }\n    };\n    this.addNewTask = function (taskContent, isChecked) {\n      const aux = new Task(taskContent, isChecked);\n      this.taskList.push(aux);\n    };\n  }\n}\nclass Task {\n  constructor(taskContent, isChecked) {\n    this.taskContent = taskContent;\n    this.isChecked = isChecked;\n    this.markedForRemoval = false;\n    this.check = function () {\n      this.isChecked = !this.isChecked;\n    };\n    this.removeTask = function () {\n      this.markedForRemoval = true;\n    };\n  }\n}\n\n\n\n//# sourceURL=webpack://webpack/./src/logic.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _dialogLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogLoad.js */ \"./src/dialogLoad.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\n\nfunction pageLoad() {\n  document.body.style = \"height:100svh; width:100svw;\";\n  const content = document.getElementById(\"content\");\n  content.style =\n    \"display: flex; justify-content:center;flex-direction:column; gap:10vh;\";\n  const cardContainer = document.createElement(\"div\");\n  cardContainer.style =\n    \"flex:1; display: flex; justify-content:center; gap: 15vh; flex-wrap: wrap;\";\n  cardContainer.id = \"cardContainer\";\n  const newProjectButton = document.createElement(\"button\");\n  newProjectButton.innerHTML = \"Add New Project\";\n  content.appendChild(newProjectButton);\n  content.appendChild(cardContainer);\n  newProjectButton.addEventListener(\"click\", function newProjectCard() {\n    (0,_dialogLoad_js__WEBPACK_IMPORTED_MODULE_0__.loadModal)();\n  });\n}\n\n\n//# sourceURL=webpack://webpack/./src/pageLoad.js?");

/***/ }),

/***/ "./src/reload.js":
/*!***********************!*\
  !*** ./src/reload.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reload: () => (/* binding */ reload)\n/* harmony export */ });\nfunction reload() {\n  const dialog = document.getElementById(\"dialog\");\n  const things = document.getElementsByClassName(\"dialogElements\");\n  while (things.length > 0) {\n    dialog.remove(things[0]);\n  }\n}\n\n\n//# sourceURL=webpack://webpack/./src/reload.js?");

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