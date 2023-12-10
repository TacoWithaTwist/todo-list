/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Project {\n  constructor(dateStart, dateEnd, title, description, priority) {\n    this.taskList = [];\n    this.dateStart = dateStart;\n    this.dateEnd = dateEnd;\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.changePriority = function (number) {\n      switch (number) {\n        case 1:\n          this.priority = \"High Priority\";\n          break;\n        case 2:\n          this.priority = \"Medium Priority\";\n          break;\n        case 3:\n          this.priority = \"Low Priority\";\n          break;\n      }\n    };\n    this.addNewTask = function (content, isChecked) {\n      const aux = new Task(content, isChecked);\n      this.taskList.push(aux);\n    };\n  }\n}\nclass Task {\n  constructor(content, isChecked) {\n    this.content = content;\n    this.isChecked = isChecked;\n    this.markedForRemoval = false;\n    this.check = function () {\n      this.isChecked = !this.isChecked;\n    };\n    this.removeTask = function () {\n      this.markedForRemoval = true;\n    };\n  }\n}\nfunction addProject(dateStart, dateEnd, title, description, priority) {\n  const newProject = new Project(\n    dateStart,\n    dateEnd,\n    title,\n    description,\n    priority\n  );\n  return newProject;\n}\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;