/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
    display:grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 8fr;
    height:100vh;
}

.header {
    grid-column: 1/-1;
}

.container > div {
    border: 1px solid black;
}

body {
    margin:0;
}

.container > .header {
    display:flex;
    justify-content: center;
    align-items: center;
}

.sidebar > div {
    border: 1px solid black;
}

.sidebar {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:1em;
}

.home > .header,
.projects > .header {
    font-weight:700;
    font-size: 24px;
}

.home,
.projects {
    display:grid;
    grid-template-rows: repeat(auto-fit,1fr);
    gap:1em;
}

.content > .header {
    text-align: center;
    margin:1em;
    padding:1em;
    background-color: rgb(167, 165, 165);
}

.content {
    display:flex;
    flex-direction: column;
    align-content: center;
    padding:1em;
}

.home > div:not(:first-child):hover {
    background-color: grey;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,OAAO;AACX;;AAEA;;IAEI,eAAe;IACf,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,wCAAwC;IACxC,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[".container {\n    display:grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 8fr;\n    height:100vh;\n}\n\n.header {\n    grid-column: 1/-1;\n}\n\n.container > div {\n    border: 1px solid black;\n}\n\nbody {\n    margin:0;\n}\n\n.container > .header {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebar > div {\n    border: 1px solid black;\n}\n\n.sidebar {\n    display:flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap:1em;\n}\n\n.home > .header,\n.projects > .header {\n    font-weight:700;\n    font-size: 24px;\n}\n\n.home,\n.projects {\n    display:grid;\n    grid-template-rows: repeat(auto-fit,1fr);\n    gap:1em;\n}\n\n.content > .header {\n    text-align: center;\n    margin:1em;\n    padding:1em;\n    background-color: rgb(167, 165, 165);\n}\n\n.content {\n    display:flex;\n    flex-direction: column;\n    align-content: center;\n    padding:1em;\n}\n\n.home > div:not(:first-child):hover {\n    background-color: grey;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToList: () => (/* binding */ addToList),
/* harmony export */   changeHeader: () => (/* binding */ changeHeader),
/* harmony export */   changeTabs: () => (/* binding */ changeTabs),
/* harmony export */   checkActive: () => (/* binding */ checkActive),
/* harmony export */   displayActive: () => (/* binding */ displayActive),
/* harmony export */   evaluateProject: () => (/* binding */ evaluateProject),
/* harmony export */   evaluateTask: () => (/* binding */ evaluateTask),
/* harmony export */   refreshActive: () => (/* binding */ refreshActive)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");




const projects = document.querySelector('.projects');
const referenceProject = document.querySelector('.buttonProject')
const content = document.querySelector('.content');
const referenceTask = document.querySelector('.buttonTasks');

// PROJECTS

// add new form before button
function addForm(referencePoint,form) {
    referencePoint.before(form)
}

// remove form
function removeForm(parent) {
    parent.removeChild(document.querySelector('#form'));
}

// access button inside form and add event listener to submit

function accessAdd(className) {
    let add = document.querySelector(`.${className}`);
    add.addEventListener('click',)
}

// function to add inputs to data array
function addToProjects(mainlist) {
    let projectName = document.querySelector('.projectName');
    let newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.projectObject(projectName.value);
    mainlist.push(newProject);
    console.log(mainlist);
}

// function to update names on sidebar
function updateList(parent,referencepoint,mainitems,mainlist) {
    // delete all alements and readd name of projects from array to sidebar
    for (const item of mainitems) {
        parent.removeChild(item);
    }
    for (const item of mainlist) {
        let div = document.createElement('div');
        div.classList.add('projectItem');
        div.textContent = item.name;
        referencepoint.before(div);
    }
}

function evaluateProject(mainlist) {
    if (!projects.contains(document.querySelector('#form'))) {
        // add form before the button
        addForm(referenceProject,(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.createProjectForm)());
        // access the button inside form and add event listener to submit
        let addProject = document.querySelector('.addProject');
        addProject.addEventListener('click', () => {
            // add input to database
            addToProjects(mainlist);
            // remove form
            removeForm(projects);
            // update list
            let projectItems = document.querySelectorAll('.projectItem');
            updateList(projects,referenceProject,projectItems,mainlist);
        })
        // access the cancel button inside form and delete form when pressed
        let cancelProject = document.querySelector('.cancelProject');
        cancelProject.addEventListener('click', () => {
            removeForm(projects);
        })
    }
}

// TASKS

// function to add task input values to allTask array
function addToArray(list) {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let taskDate = document.querySelector('.taskDate');
    let newTask = new _project_js__WEBPACK_IMPORTED_MODULE_0__.taskObject(taskName.value,taskDescription.value,taskDate.value);
    list.push(newTask);
}

function evaluateTask(mainlist,specificlist) {
    if (!content.contains(document.querySelector('#form'))) {
        // add form before button
        addForm(referenceTask,(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.createTaskForm)());
        // access button inside form and add event listener to submit
        let addTask = document.querySelector('.addTask');
        addTask.addEventListener('click', () => {
            // add input to database
            if (mainlist == specificlist) {
                addToArray(mainlist);
            } else {
                addToArray(mainlist);
                addToArray(specificlist);
            }
            // remove form
            removeForm(content);
            // update display
            displayActive(specificlist);

        })
        // access cancel button inside form and delete when pressed
        let cancelTask = document.querySelector('.cancelTask');
        cancelTask.addEventListener('click', () => {
            removeForm(content);
        })
    }
}

// each tab on sidebar brings different array to view

// add event listener to each tab

// all tasks views allTasks array

// today goes through allTasks array and sees which task.date == today

// next 7 days goes through allTasks array and sees which tasks have task.date < today + 7 days

// important goes through allTasks and sees which tasks have task.priority == 'important'

// pressing on individual projects on sidebar brings up projectList and iterates through project.tasks
    // add event listener to sidebar
    // if e.target.classList.contains('project') or wtv the classname was
    // return the data-name of the project, which should be name of project and find the index through projectList
    
// for each tab add dom changes like for restaurant page

// when addTask is pressed, find which tab is active and add to the array accordingly

function changeHeader(phrase) {
    let header = document.querySelector('.content > .header');
    header.textContent = phrase;
}

// if (e.target && e.target.classList.contains('hometab')) {
//     e.target.classList.add('active');
// }

function changeTabs(event,mainlist) {
    if (event.target && event.target.classList.contains('hometab') && event.target.classList.contains('active')) {
        // need to delete all previous content
        clearDisplay();
        // if event.target id is all tasks,iterate through mainlist and display each property of task
        for (const item of mainlist) {
            let div = document.createElement('div');
            div.classList.add('card');
            let name = document.createElement('div');
            name.textContent = item.name;
            let description = document.createElement('div');
            description.textContent = item.description;
            let date = document.createElement('div');
            date.textContent = item.date;
            let priority = document.createElement('div');
            priority.textContent = item.priority;
            div.append(name,description,date,priority);
            content.appendChild(div);
        }
    }
}

// when clicking addTask, look for whats active then assign a variable the array that will be accessed

function refreshActive(event) {
    let tabs = document.querySelectorAll('.hometab');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    if (event.target && event.target.classList.contains('hometab')) {
        event.target.classList.add('active');
    }
}

function addToList(listAll,specificList,taskObject) {
    let tabs = document.querySelectorAll('.hometab');
    for (const tab of tabs) {
        if (tab.classList.contains('active')) {
            listAll.push(taskObject);
            specificList.push(taskObject);
        }
    }
}

// function takes in arrays from main js file and returns the one thats needed after checking active tab

function checkActive(arrayOne,arrayTwo,arrayThree,arrayFour) {
    let tabs = document.querySelectorAll('.hometab');
    for (const tab of tabs) {
        if (tab.classList.contains('active')) {
            switch (tab.getAttribute('id')) {
                case 'allTasks':
                    return arrayOne;
                case 'today' :
                    return arrayTwo;
                case 'nextWeek':
                    return arrayThree;
                case 'important':
                    return arrayFour;
            }
        }
    }
}

function displayActive(array) {
    //  remove previous content
    // iterate through array and add as cards
    for (const item of array) {
            let div = document.createElement('div');
            div.classList.add('card');
            let name = document.createElement('div');
            name.textContent = item.name;
            let description = document.createElement('div');
            description.textContent = item.description;
            let date = document.createElement('div');
            date.textContent = item.date;
            let priority = document.createElement('div');
            priority.textContent = item.priority;
            div.append(name,description,date,priority);
            content.appendChild(div);
    }
}


// remove previous content

function clearDisplay() {
    let cards = document.querySelectorAll('.card');
    for (const card of cards) {
        content.removeChild(card);
    }
}

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm),
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm)
/* harmony export */ });
function createProjectForm() {
    let form = document.createElement('div');
    form.setAttribute('id','form');

    let name = document.createElement('input');
    name.type = 'text';
    name.classList.add('projectName');
    name.placeholder = 'Enter project name';

    let buttons = document.createElement('div');
    let add = document.createElement('button');
    add.classList.add('addProject');
    add.textContent = 'add';
    let cancel = document.createElement('button');
    cancel.classList.add('cancelProject');
    cancel.textContent = 'cancel';
    buttons.append(add,cancel);
    buttons.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1em';

    form.append(name,buttons);
    
    return form;
}

function createTaskForm() {
    let form = document.createElement('div');
    form.setAttribute('id','form');
    
    let name = document.createElement('input');
    name.type = 'text';
    name.classList.add('taskName');
    name.placeholder = 'Enter task name';

    let description = document.createElement('input');
    description.type = 'text';
    description.classList.add('taskDescription');
    description.placeholder = 'Enter description for task';

    let date = document.createElement('input');
    date.type = 'date';
    date.classList.add('taskDate');

    // let priorityLabel = document.createElement('label');
    // priorityLabel.for = 'priority';
    // priorityLabel.textContent = 'Important?';

    // need to fix this
    let priority = document.createElement('input');
    priority.type = 'checkbox';
    priority.classList.add('priority');
    priority.value = 'important';

    let buttons = document.createElement('div');
    let add = document.createElement('button');
    add.classList.add('addTask');
    add.textContent = 'add';
    let cancel = document.createElement('button');
    cancel.classList.add('cancelTask');
    cancel.textContent = 'cancel';
    buttons.append(add,cancel);
    buttons.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1em';

    form.style.cssText = 'display:grid;grid-template-rows:repeat(auto-fit,1fr);gap:1em;justify-content:center';

    form.append(name,description,date,priority,buttons);
    return form;
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectObject: () => (/* binding */ projectObject),
/* harmony export */   taskObject: () => (/* binding */ taskObject)
/* harmony export */ });
const projectObject = function(name) {
    this.name = name;
    this.tasks = [];
    // access the objects tasks by appending and deleting from this array
}

const taskObject = function(name,description,date,priority) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    // create this.priority and use radio buttons with choice normal/important
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



// add project button appends to an empty array/object

// each array item is an object consisting of array of task objects

// add event listener to button to add projects

// functions in index.js will only do stuff related to array/objects

// imported functions will deal with dom manipulation

// create arrays for all tasks, important tasks, and tasks ordered by date

// for each tab add dom changes like for restaurant page

const projectList = [];
const allTasks = [];
const todayTasks = [];
const nextWeekTasks = [];
const importantTasks = [];

const addProject = document.querySelector('.buttonProject');
const addTask = document.querySelector('.buttonTasks');
const tabAllTasks = document.querySelector('#allTasks');
const tabToday = document.querySelector('#today');
const tabNextWeek = document.querySelector('#nextWeek');
const tabImportant = document.querySelector('#important');

let activeArray = allTasks;

addTask.addEventListener('click', () => {
    // add task to array
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.evaluateTask)(allTasks,activeArray);
    // display array based on which tab is active

});

addProject.addEventListener('click', () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.evaluateProject)(projectList);
});

tabAllTasks.addEventListener('click', (e) => {
    // function
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeHeader)('All Tasks');
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshActive)(e);
    activeArray = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.checkActive)(allTasks,todayTasks,nextWeekTasks,importantTasks);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTabs)(e,activeArray);
})

tabToday.addEventListener('click', (e) => {
    // function
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeHeader)('Today');
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshActive)(e);
    activeArray = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.checkActive)(allTasks,todayTasks,nextWeekTasks,importantTasks);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTabs)(e,activeArray);
})

tabNextWeek.addEventListener('click', (e) => {
    // function
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeHeader)('Next 7 Days');
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshActive)(e);
    activeArray = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.checkActive)(allTasks,todayTasks,nextWeekTasks,importantTasks);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTabs)(e,activeArray);    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTabs)(e,activeArray);
})

tabImportant.addEventListener('click', (e) => {
    // function
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeHeader)('Important');
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.refreshActive)(e);
    activeArray = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.checkActive)(allTasks,todayTasks,nextWeekTasks,importantTasks);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTabs)(e,activeArray);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBVTtBQUNoQztBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDhCQUE4Qix5REFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6T087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsOEJBQThCOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhCQUE4Qjs7QUFFeEUsdUNBQXVDLHdDQUF3QyxRQUFROztBQUV2RjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1Rjs7QUFFNUc7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksa0RBQVk7QUFDaEI7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBLElBQUkscURBQWU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxrREFBWTtBQUNoQixJQUFJLG1EQUFhO0FBQ2pCLGtCQUFrQixpREFBVztBQUM3QixJQUFJLGdEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxtREFBWTtBQUNoQixJQUFJLG1EQUFhO0FBQ2pCLGtCQUFrQixpREFBVztBQUM3QixJQUFJLGdEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxtREFBWTtBQUNoQixJQUFJLG1EQUFhO0FBQ2pCLGtCQUFrQixpREFBVztBQUM3QixJQUFJLGdEQUFVLG9CQUFvQixnREFBVTtBQUM1QyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLElBQUksbURBQWE7QUFDakIsa0JBQWtCLGlEQUFXO0FBQzdCLElBQUksZ0RBQVU7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XG4gICAgaGVpZ2h0OjEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbn1cblxuLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjowO1xufVxuXG4uY29udGFpbmVyID4gLmhlYWRlciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyID4gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6MWVtO1xufVxuXG4uaG9tZSA+IC5oZWFkZXIsXG4ucHJvamVjdHMgPiAuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDo3MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaG9tZSxcbi5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XG4gICAgZ2FwOjFlbTtcbn1cblxuLmNvbnRlbnQgPiAuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOjFlbTtcbiAgICBwYWRkaW5nOjFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjUsIDE2NSk7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzoxZW07XG59XG5cbi5ob21lID4gZGl2Om5vdCg6Zmlyc3QtY2hpbGQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLE9BQU87QUFDWDs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbi5jb250YWluZXIgPiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjowO1xcbn1cXG5cXG4uY29udGFpbmVyID4gLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDoxZW07XFxufVxcblxcbi5ob21lID4gLmhlYWRlcixcXG4ucHJvamVjdHMgPiAuaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5ob21lLFxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG4gICAgZ2FwOjFlbTtcXG59XFxuXFxuLmNvbnRlbnQgPiAuaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46MWVtO1xcbiAgICBwYWRkaW5nOjFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMTY1LCAxNjUpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOjFlbTtcXG59XFxuXFxuLmhvbWUgPiBkaXY6bm90KDpmaXJzdC1jaGlsZCk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdE9iamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyB0YXNrT2JqZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RGb3JtLCBjcmVhdGVUYXNrRm9ybSB9IGZyb20gJy4vZm9ybXMuanMnO1xuXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuY29uc3QgcmVmZXJlbmNlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25Qcm9qZWN0JylcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgcmVmZXJlbmNlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25UYXNrcycpO1xuXG4vLyBQUk9KRUNUU1xuXG4vLyBhZGQgbmV3IGZvcm0gYmVmb3JlIGJ1dHRvblxuZnVuY3Rpb24gYWRkRm9ybShyZWZlcmVuY2VQb2ludCxmb3JtKSB7XG4gICAgcmVmZXJlbmNlUG9pbnQuYmVmb3JlKGZvcm0pXG59XG5cbi8vIHJlbW92ZSBmb3JtXG5mdW5jdGlvbiByZW1vdmVGb3JtKHBhcmVudCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpKTtcbn1cblxuLy8gYWNjZXNzIGJ1dHRvbiBpbnNpZGUgZm9ybSBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdFxuXG5mdW5jdGlvbiBhY2Nlc3NBZGQoY2xhc3NOYW1lKSB7XG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLClcbn1cblxuLy8gZnVuY3Rpb24gdG8gYWRkIGlucHV0cyB0byBkYXRhIGFycmF5XG5mdW5jdGlvbiBhZGRUb1Byb2plY3RzKG1haW5saXN0KSB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lJyk7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdE9iamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgbWFpbmxpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhtYWlubGlzdCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSBuYW1lcyBvbiBzaWRlYmFyXG5mdW5jdGlvbiB1cGRhdGVMaXN0KHBhcmVudCxyZWZlcmVuY2Vwb2ludCxtYWluaXRlbXMsbWFpbmxpc3QpIHtcbiAgICAvLyBkZWxldGUgYWxsIGFsZW1lbnRzIGFuZCByZWFkZCBuYW1lIG9mIHByb2plY3RzIGZyb20gYXJyYXkgdG8gc2lkZWJhclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBtYWluaXRlbXMpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbWFpbmxpc3QpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICByZWZlcmVuY2Vwb2ludC5iZWZvcmUoZGl2KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZVByb2plY3QobWFpbmxpc3QpIHtcbiAgICBpZiAoIXByb2plY3RzLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykpKSB7XG4gICAgICAgIC8vIGFkZCBmb3JtIGJlZm9yZSB0aGUgYnV0dG9uXG4gICAgICAgIGFkZEZvcm0ocmVmZXJlbmNlUHJvamVjdCxjcmVhdGVQcm9qZWN0Rm9ybSgpKTtcbiAgICAgICAgLy8gYWNjZXNzIHRoZSBidXR0b24gaW5zaWRlIGZvcm0gYW5kIGFkZCBldmVudCBsaXN0ZW5lciB0byBzdWJtaXRcbiAgICAgICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gYWRkIGlucHV0IHRvIGRhdGFiYXNlXG4gICAgICAgICAgICBhZGRUb1Byb2plY3RzKG1haW5saXN0KTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtXG4gICAgICAgICAgICByZW1vdmVGb3JtKHByb2plY3RzKTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBsaXN0XG4gICAgICAgICAgICBsZXQgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtJyk7XG4gICAgICAgICAgICB1cGRhdGVMaXN0KHByb2plY3RzLHJlZmVyZW5jZVByb2plY3QscHJvamVjdEl0ZW1zLG1haW5saXN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gYWNjZXNzIHRoZSBjYW5jZWwgYnV0dG9uIGluc2lkZSBmb3JtIGFuZCBkZWxldGUgZm9ybSB3aGVuIHByZXNzZWRcbiAgICAgICAgbGV0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsUHJvamVjdCcpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRm9ybShwcm9qZWN0cyk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBUQVNLU1xuXG4vLyBmdW5jdGlvbiB0byBhZGQgdGFzayBpbnB1dCB2YWx1ZXMgdG8gYWxsVGFzayBhcnJheVxuZnVuY3Rpb24gYWRkVG9BcnJheShsaXN0KSB7XG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tOYW1lJyk7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGVzY3JpcHRpb24nKTtcbiAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0RhdGUnKTtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyB0YXNrT2JqZWN0KHRhc2tOYW1lLnZhbHVlLHRhc2tEZXNjcmlwdGlvbi52YWx1ZSx0YXNrRGF0ZS52YWx1ZSk7XG4gICAgbGlzdC5wdXNoKG5ld1Rhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGVUYXNrKG1haW5saXN0LHNwZWNpZmljbGlzdCkge1xuICAgIGlmICghY29udGVudC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpKSkge1xuICAgICAgICAvLyBhZGQgZm9ybSBiZWZvcmUgYnV0dG9uXG4gICAgICAgIGFkZEZvcm0ocmVmZXJlbmNlVGFzayxjcmVhdGVUYXNrRm9ybSgpKTtcbiAgICAgICAgLy8gYWNjZXNzIGJ1dHRvbiBpbnNpZGUgZm9ybSBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdFxuICAgICAgICBsZXQgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBhZGQgaW5wdXQgdG8gZGF0YWJhc2VcbiAgICAgICAgICAgIGlmIChtYWlubGlzdCA9PSBzcGVjaWZpY2xpc3QpIHtcbiAgICAgICAgICAgICAgICBhZGRUb0FycmF5KG1haW5saXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkVG9BcnJheShtYWlubGlzdCk7XG4gICAgICAgICAgICAgICAgYWRkVG9BcnJheShzcGVjaWZpY2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1cbiAgICAgICAgICAgIHJlbW92ZUZvcm0oY29udGVudCk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgZGlzcGxheVxuICAgICAgICAgICAgZGlzcGxheUFjdGl2ZShzcGVjaWZpY2xpc3QpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGFjY2VzcyBjYW5jZWwgYnV0dG9uIGluc2lkZSBmb3JtIGFuZCBkZWxldGUgd2hlbiBwcmVzc2VkXG4gICAgICAgIGxldCBjYW5jZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbFRhc2snKTtcbiAgICAgICAgY2FuY2VsVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUZvcm0oY29udGVudCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBlYWNoIHRhYiBvbiBzaWRlYmFyIGJyaW5ncyBkaWZmZXJlbnQgYXJyYXkgdG8gdmlld1xuXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCB0YWJcblxuLy8gYWxsIHRhc2tzIHZpZXdzIGFsbFRhc2tzIGFycmF5XG5cbi8vIHRvZGF5IGdvZXMgdGhyb3VnaCBhbGxUYXNrcyBhcnJheSBhbmQgc2VlcyB3aGljaCB0YXNrLmRhdGUgPT0gdG9kYXlcblxuLy8gbmV4dCA3IGRheXMgZ29lcyB0aHJvdWdoIGFsbFRhc2tzIGFycmF5IGFuZCBzZWVzIHdoaWNoIHRhc2tzIGhhdmUgdGFzay5kYXRlIDwgdG9kYXkgKyA3IGRheXNcblxuLy8gaW1wb3J0YW50IGdvZXMgdGhyb3VnaCBhbGxUYXNrcyBhbmQgc2VlcyB3aGljaCB0YXNrcyBoYXZlIHRhc2sucHJpb3JpdHkgPT0gJ2ltcG9ydGFudCdcblxuLy8gcHJlc3Npbmcgb24gaW5kaXZpZHVhbCBwcm9qZWN0cyBvbiBzaWRlYmFyIGJyaW5ncyB1cCBwcm9qZWN0TGlzdCBhbmQgaXRlcmF0ZXMgdGhyb3VnaCBwcm9qZWN0LnRhc2tzXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNpZGViYXJcbiAgICAvLyBpZiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSBvciB3dHYgdGhlIGNsYXNzbmFtZSB3YXNcbiAgICAvLyByZXR1cm4gdGhlIGRhdGEtbmFtZSBvZiB0aGUgcHJvamVjdCwgd2hpY2ggc2hvdWxkIGJlIG5hbWUgb2YgcHJvamVjdCBhbmQgZmluZCB0aGUgaW5kZXggdGhyb3VnaCBwcm9qZWN0TGlzdFxuICAgIFxuLy8gZm9yIGVhY2ggdGFiIGFkZCBkb20gY2hhbmdlcyBsaWtlIGZvciByZXN0YXVyYW50IHBhZ2VcblxuLy8gd2hlbiBhZGRUYXNrIGlzIHByZXNzZWQsIGZpbmQgd2hpY2ggdGFiIGlzIGFjdGl2ZSBhbmQgYWRkIHRvIHRoZSBhcnJheSBhY2NvcmRpbmdseVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSGVhZGVyKHBocmFzZSkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IC5oZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwaHJhc2U7XG59XG5cbi8vIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWV0YWInKSkge1xuLy8gICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFicyhldmVudCxtYWlubGlzdCkge1xuICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZXRhYicpICYmIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIC8vIG5lZWQgdG8gZGVsZXRlIGFsbCBwcmV2aW91cyBjb250ZW50XG4gICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICAvLyBpZiBldmVudC50YXJnZXQgaWQgaXMgYWxsIHRhc2tzLGl0ZXJhdGUgdGhyb3VnaCBtYWlubGlzdCBhbmQgZGlzcGxheSBlYWNoIHByb3BlcnR5IG9mIHRhc2tcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG1haW5saXN0KSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKG5hbWUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHdoZW4gY2xpY2tpbmcgYWRkVGFzaywgbG9vayBmb3Igd2hhdHMgYWN0aXZlIHRoZW4gYXNzaWduIGEgdmFyaWFibGUgdGhlIGFycmF5IHRoYXQgd2lsbCBiZSBhY2Nlc3NlZFxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEFjdGl2ZShldmVudCkge1xuICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWV0YWInKTtcbiAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21ldGFiJykpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvTGlzdChsaXN0QWxsLHNwZWNpZmljTGlzdCx0YXNrT2JqZWN0KSB7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZXRhYicpO1xuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBsaXN0QWxsLnB1c2godGFza09iamVjdCk7XG4gICAgICAgICAgICBzcGVjaWZpY0xpc3QucHVzaCh0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdGFrZXMgaW4gYXJyYXlzIGZyb20gbWFpbiBqcyBmaWxlIGFuZCByZXR1cm5zIHRoZSBvbmUgdGhhdHMgbmVlZGVkIGFmdGVyIGNoZWNraW5nIGFjdGl2ZSB0YWJcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQWN0aXZlKGFycmF5T25lLGFycmF5VHdvLGFycmF5VGhyZWUsYXJyYXlGb3VyKSB7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZXRhYicpO1xuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRhYi5nZXRBdHRyaWJ1dGUoJ2lkJykpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhbGxUYXNrcyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9uZTtcbiAgICAgICAgICAgICAgICBjYXNlICd0b2RheScgOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUd287XG4gICAgICAgICAgICAgICAgY2FzZSAnbmV4dFdlZWsnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUaHJlZTtcbiAgICAgICAgICAgICAgICBjYXNlICdpbXBvcnRhbnQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlGb3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFjdGl2ZShhcnJheSkge1xuICAgIC8vICByZW1vdmUgcHJldmlvdXMgY29udGVudFxuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhcnJheSBhbmQgYWRkIGFzIGNhcmRzXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycmF5KSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKG5hbWUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxufVxuXG5cbi8vIHJlbW92ZSBwcmV2aW91cyBjb250ZW50XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgIGZvciAoY29uc3QgY2FyZCBvZiBjYXJkcykge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNhcmQpO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtJyk7XG5cbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZS50eXBlID0gJ3RleHQnO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgICBuYW1lLnBsYWNlaG9sZGVyID0gJ0VudGVyIHByb2plY3QgbmFtZSc7XG5cbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICAgIGFkZC50ZXh0Q29udGVudCA9ICdhZGQnO1xuICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsUHJvamVjdCcpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuICAgIGJ1dHRvbnMuYXBwZW5kKGFkZCxjYW5jZWwpO1xuICAgIGJ1dHRvbnMuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z2FwOjFlbSc7XG5cbiAgICBmb3JtLmFwcGVuZChuYW1lLGJ1dHRvbnMpO1xuICAgIFxuICAgIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtJyk7XG4gICAgXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJyk7XG4gICAgbmFtZS5wbGFjZWhvbGRlciA9ICdFbnRlciB0YXNrIG5hbWUnO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gJ0VudGVyIGRlc2NyaXB0aW9uIGZvciB0YXNrJztcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZScpO1xuXG4gICAgLy8gbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIC8vIHByaW9yaXR5TGFiZWwuZm9yID0gJ3ByaW9yaXR5JztcbiAgICAvLyBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudD8nO1xuXG4gICAgLy8gbmVlZCB0byBmaXggdGhpc1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb3JpdHkudHlwZSA9ICdjaGVja2JveCc7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9ICdpbXBvcnRhbnQnO1xuXG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICBhZGQudGV4dENvbnRlbnQgPSAnYWRkJztcbiAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbFRhc2snKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICBidXR0b25zLmFwcGVuZChhZGQsY2FuY2VsKTtcbiAgICBidXR0b25zLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDoxZW0nO1xuXG4gICAgZm9ybS5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KGF1dG8tZml0LDFmcik7Z2FwOjFlbTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyJztcblxuICAgIGZvcm0uYXBwZW5kKG5hbWUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSxidXR0b25zKTtcbiAgICByZXR1cm4gZm9ybTtcbn0iLCJleHBvcnQgY29uc3QgcHJvamVjdE9iamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAvLyBhY2Nlc3MgdGhlIG9iamVjdHMgdGFza3MgYnkgYXBwZW5kaW5nIGFuZCBkZWxldGluZyBmcm9tIHRoaXMgYXJyYXlcbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tPYmplY3QgPSBmdW5jdGlvbihuYW1lLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyBjcmVhdGUgdGhpcy5wcmlvcml0eSBhbmQgdXNlIHJhZGlvIGJ1dHRvbnMgd2l0aCBjaG9pY2Ugbm9ybWFsL2ltcG9ydGFudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZXZhbHVhdGVQcm9qZWN0LCBldmFsdWF0ZVRhc2ssIGNoYW5nZUhlYWRlciwgcmVmcmVzaEFjdGl2ZSwgY2hlY2tBY3RpdmUsIGNoYW5nZVRhYnMgfSBmcm9tICcuL2RvbSc7XG5cbi8vIGFkZCBwcm9qZWN0IGJ1dHRvbiBhcHBlbmRzIHRvIGFuIGVtcHR5IGFycmF5L29iamVjdFxuXG4vLyBlYWNoIGFycmF5IGl0ZW0gaXMgYW4gb2JqZWN0IGNvbnNpc3Rpbmcgb2YgYXJyYXkgb2YgdGFzayBvYmplY3RzXG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBidXR0b24gdG8gYWRkIHByb2plY3RzXG5cbi8vIGZ1bmN0aW9ucyBpbiBpbmRleC5qcyB3aWxsIG9ubHkgZG8gc3R1ZmYgcmVsYXRlZCB0byBhcnJheS9vYmplY3RzXG5cbi8vIGltcG9ydGVkIGZ1bmN0aW9ucyB3aWxsIGRlYWwgd2l0aCBkb20gbWFuaXB1bGF0aW9uXG5cbi8vIGNyZWF0ZSBhcnJheXMgZm9yIGFsbCB0YXNrcywgaW1wb3J0YW50IHRhc2tzLCBhbmQgdGFza3Mgb3JkZXJlZCBieSBkYXRlXG5cbi8vIGZvciBlYWNoIHRhYiBhZGQgZG9tIGNoYW5nZXMgbGlrZSBmb3IgcmVzdGF1cmFudCBwYWdlXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5jb25zdCBhbGxUYXNrcyA9IFtdO1xuY29uc3QgdG9kYXlUYXNrcyA9IFtdO1xuY29uc3QgbmV4dFdlZWtUYXNrcyA9IFtdO1xuY29uc3QgaW1wb3J0YW50VGFza3MgPSBbXTtcblxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25Qcm9qZWN0Jyk7XG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvblRhc2tzJyk7XG5jb25zdCB0YWJBbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxUYXNrcycpO1xuY29uc3QgdGFiVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbmNvbnN0IHRhYk5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHRXZWVrJyk7XG5jb25zdCB0YWJJbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1wb3J0YW50Jyk7XG5cbmxldCBhY3RpdmVBcnJheSA9IGFsbFRhc2tzO1xuXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGFkZCB0YXNrIHRvIGFycmF5XG4gICAgZXZhbHVhdGVUYXNrKGFsbFRhc2tzLGFjdGl2ZUFycmF5KTtcbiAgICAvLyBkaXNwbGF5IGFycmF5IGJhc2VkIG9uIHdoaWNoIHRhYiBpcyBhY3RpdmVcblxufSk7XG5cbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZXZhbHVhdGVQcm9qZWN0KHByb2plY3RMaXN0KTtcbn0pO1xuXG50YWJBbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gZnVuY3Rpb25cbiAgICBjaGFuZ2VIZWFkZXIoJ0FsbCBUYXNrcycpO1xuICAgIHJlZnJlc2hBY3RpdmUoZSk7XG4gICAgYWN0aXZlQXJyYXkgPSBjaGVja0FjdGl2ZShhbGxUYXNrcyx0b2RheVRhc2tzLG5leHRXZWVrVGFza3MsaW1wb3J0YW50VGFza3MpO1xuICAgIGNoYW5nZVRhYnMoZSxhY3RpdmVBcnJheSk7XG59KVxuXG50YWJUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gZnVuY3Rpb25cbiAgICBjaGFuZ2VIZWFkZXIoJ1RvZGF5Jyk7XG4gICAgcmVmcmVzaEFjdGl2ZShlKTtcbiAgICBhY3RpdmVBcnJheSA9IGNoZWNrQWN0aXZlKGFsbFRhc2tzLHRvZGF5VGFza3MsbmV4dFdlZWtUYXNrcyxpbXBvcnRhbnRUYXNrcyk7XG4gICAgY2hhbmdlVGFicyhlLGFjdGl2ZUFycmF5KTtcbn0pXG5cbnRhYk5leHRXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBmdW5jdGlvblxuICAgIGNoYW5nZUhlYWRlcignTmV4dCA3IERheXMnKTtcbiAgICByZWZyZXNoQWN0aXZlKGUpO1xuICAgIGFjdGl2ZUFycmF5ID0gY2hlY2tBY3RpdmUoYWxsVGFza3MsdG9kYXlUYXNrcyxuZXh0V2Vla1Rhc2tzLGltcG9ydGFudFRhc2tzKTtcbiAgICBjaGFuZ2VUYWJzKGUsYWN0aXZlQXJyYXkpOyAgICBjaGFuZ2VUYWJzKGUsYWN0aXZlQXJyYXkpO1xufSlcblxudGFiSW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBmdW5jdGlvblxuICAgIGNoYW5nZUhlYWRlcignSW1wb3J0YW50Jyk7XG4gICAgcmVmcmVzaEFjdGl2ZShlKTtcbiAgICBhY3RpdmVBcnJheSA9IGNoZWNrQWN0aXZlKGFsbFRhc2tzLHRvZGF5VGFza3MsbmV4dFdlZWtUYXNrcyxpbXBvcnRhbnRUYXNrcyk7XG4gICAgY2hhbmdlVGFicyhlLGFjdGl2ZUFycmF5KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9