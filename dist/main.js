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
}

.projectItem:hover {
    background-color: grey;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,OAAO;AACX;;AAEA;;IAEI,eAAe;IACf,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,wCAAwC;IACxC,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[".container {\n    display:grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 8fr;\n    height:100vh;\n}\n\n.header {\n    grid-column: 1/-1;\n}\n\n.container > div {\n    border: 1px solid black;\n}\n\nbody {\n    margin:0;\n}\n\n.container > .header {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebar > div {\n    border: 1px solid black;\n}\n\n.sidebar {\n    display:flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap:1em;\n}\n\n.home > .header,\n.projects > .header {\n    font-weight:700;\n    font-size: 24px;\n}\n\n.home,\n.projects {\n    display:grid;\n    grid-template-rows: repeat(auto-fit,1fr);\n    gap:1em;\n}\n\n.content > .header {\n    text-align: center;\n    margin:1em;\n    padding:1em;\n    background-color: rgb(167, 165, 165);\n}\n\n.content {\n    display:flex;\n    flex-direction: column;\n    align-content: center;\n    padding:1em;\n}\n\n.home > div:not(:first-child):hover {\n    background-color: grey;\n}\n\n.projectItem:hover {\n    background-color: grey;\n}"],"sourceRoot":""}]);
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
function updateSidebar(referencepoint,mainitems,mainlist) {
    // delete all alements and readd name of projects from array to sidebar
    for (const item of mainitems) {
        projects.removeChild(item);
    }
    for (const item of mainlist) {
        let div = document.createElement('div');
        div.classList.add('projectItem');
        div.textContent = item.name;
        referencepoint.before(div);
    }
}

// need to add event listener to each project

function addProjectListener(domArray,mainlist) {
    for (const item of domArray) {
        item.addEventListener('click', (event) => {
            changeHeader(item.textContent);
            refreshActive(event)
        })
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
            updateSidebar(referenceProject,projectItems,mainlist);
            projectItems = document.querySelectorAll('.projectItem');
            addProjectListener(projectItems,mainlist);
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
    let projectItems = document.querySelectorAll('.projectItem');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    for (const item of projectItems) {
        item.classList.remove('active');
    }
    if (event.target && (event.target.classList.contains('hometab') || event.target.classList.contains('projectItem'))) {
        event.target.classList.add('active');
        console.log(event.target)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0EsaUNBQWlDLDREQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFVO0FBQ2hDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsOEJBQThCLHlEQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzUE87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsOEJBQThCOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhCQUE4Qjs7QUFFeEUsdUNBQXVDLHdDQUF3QyxRQUFROztBQUV2RjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1Rjs7QUFFNUc7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksa0RBQVk7QUFDaEI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSxxREFBZTtBQUNuQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGtEQUFZO0FBQ2hCLElBQUksbURBQWE7QUFDakIsa0JBQWtCLGlEQUFXO0FBQzdCLElBQUksZ0RBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLElBQUksbURBQWE7QUFDakIsa0JBQWtCLGlEQUFXO0FBQzdCLElBQUksZ0RBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLElBQUksbURBQWE7QUFDakIsa0JBQWtCLGlEQUFXO0FBQzdCLElBQUksZ0RBQVUsb0JBQW9CLGdEQUFVO0FBQzVDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBYTtBQUNqQixrQkFBa0IsaURBQVc7QUFDN0IsSUFBSSxnREFBVTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xufVxuXG4uY29udGFpbmVyID4gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOjA7XG59XG5cbi5jb250YWluZXIgPiAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZGViYXIgPiBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc2lkZWJhciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDoxZW07XG59XG5cbi5ob21lID4gLmhlYWRlcixcbi5wcm9qZWN0cyA+IC5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5ob21lLFxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcbiAgICBnYXA6MWVtO1xufVxuXG4uY29udGVudCA+IC5oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46MWVtO1xuICAgIHBhZGRpbmc6MWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDE2NSwgMTY1KTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOjFlbTtcbn1cblxuLmhvbWUgPiBkaXY6bm90KDpmaXJzdC1jaGlsZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5wcm9qZWN0SXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixPQUFPO0FBQ1g7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4uY29udGFpbmVyID4gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46MDtcXG59XFxuXFxuLmNvbnRhaW5lciA+IC5oZWFkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6MWVtO1xcbn1cXG5cXG4uaG9tZSA+IC5oZWFkZXIsXFxuLnByb2plY3RzID4gLmhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaG9tZSxcXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XFxuICAgIGdhcDoxZW07XFxufVxcblxcbi5jb250ZW50ID4gLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOjFlbTtcXG4gICAgcGFkZGluZzoxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDE2NSwgMTY1KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzoxZW07XFxufVxcblxcbi5ob21lID4gZGl2Om5vdCg6Zmlyc3QtY2hpbGQpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnByb2plY3RJdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RPYmplY3QsIHRhc2tPYmplY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZvcm0sIGNyZWF0ZVRhc2tGb3JtIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCByZWZlcmVuY2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvblByb2plY3QnKVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCByZWZlcmVuY2VUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvblRhc2tzJyk7XG5cbi8vIFBST0pFQ1RTXG5cbi8vIGFkZCBuZXcgZm9ybSBiZWZvcmUgYnV0dG9uXG5mdW5jdGlvbiBhZGRGb3JtKHJlZmVyZW5jZVBvaW50LGZvcm0pIHtcbiAgICByZWZlcmVuY2VQb2ludC5iZWZvcmUoZm9ybSlcbn1cblxuLy8gcmVtb3ZlIGZvcm1cbmZ1bmN0aW9uIHJlbW92ZUZvcm0ocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykpO1xufVxuXG4vLyBhY2Nlc3MgYnV0dG9uIGluc2lkZSBmb3JtIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc3VibWl0XG5cbmZ1bmN0aW9uIGFjY2Vzc0FkZChjbGFzc05hbWUpIHtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKVxufVxuXG4vLyBmdW5jdGlvbiB0byBhZGQgaW5wdXRzIHRvIGRhdGEgYXJyYXlcbmZ1bmN0aW9uIGFkZFRvUHJvamVjdHMobWFpbmxpc3QpIHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE5hbWUnKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0T2JqZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICBtYWlubGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKG1haW5saXN0KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gdXBkYXRlIG5hbWVzIG9uIHNpZGViYXJcbmZ1bmN0aW9uIHVwZGF0ZVNpZGViYXIocmVmZXJlbmNlcG9pbnQsbWFpbml0ZW1zLG1haW5saXN0KSB7XG4gICAgLy8gZGVsZXRlIGFsbCBhbGVtZW50cyBhbmQgcmVhZGQgbmFtZSBvZiBwcm9qZWN0cyBmcm9tIGFycmF5IHRvIHNpZGViYXJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbWFpbml0ZW1zKSB7XG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbWFpbmxpc3QpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICByZWZlcmVuY2Vwb2ludC5iZWZvcmUoZGl2KTtcbiAgICB9XG59XG5cbi8vIG5lZWQgdG8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdFxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TGlzdGVuZXIoZG9tQXJyYXksbWFpbmxpc3QpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZG9tQXJyYXkpIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlSGVhZGVyKGl0ZW0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgcmVmcmVzaEFjdGl2ZShldmVudClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlUHJvamVjdChtYWlubGlzdCkge1xuICAgIGlmICghcHJvamVjdHMuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKSkpIHtcbiAgICAgICAgLy8gYWRkIGZvcm0gYmVmb3JlIHRoZSBidXR0b25cbiAgICAgICAgYWRkRm9ybShyZWZlcmVuY2VQcm9qZWN0LGNyZWF0ZVByb2plY3RGb3JtKCkpO1xuICAgICAgICAvLyBhY2Nlc3MgdGhlIGJ1dHRvbiBpbnNpZGUgZm9ybSBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdFxuICAgICAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Jyk7XG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBhZGQgaW5wdXQgdG8gZGF0YWJhc2VcbiAgICAgICAgICAgIGFkZFRvUHJvamVjdHMobWFpbmxpc3QpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1cbiAgICAgICAgICAgIHJlbW92ZUZvcm0ocHJvamVjdHMpO1xuICAgICAgICAgICAgLy8gdXBkYXRlIGxpc3RcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdEl0ZW0nKTtcbiAgICAgICAgICAgIHVwZGF0ZVNpZGViYXIocmVmZXJlbmNlUHJvamVjdCxwcm9qZWN0SXRlbXMsbWFpbmxpc3QpO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0TGlzdGVuZXIocHJvamVjdEl0ZW1zLG1haW5saXN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gYWNjZXNzIHRoZSBjYW5jZWwgYnV0dG9uIGluc2lkZSBmb3JtIGFuZCBkZWxldGUgZm9ybSB3aGVuIHByZXNzZWRcbiAgICAgICAgbGV0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsUHJvamVjdCcpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRm9ybShwcm9qZWN0cyk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBUQVNLU1xuXG4vLyBmdW5jdGlvbiB0byBhZGQgdGFzayBpbnB1dCB2YWx1ZXMgdG8gYWxsVGFzayBhcnJheVxuZnVuY3Rpb24gYWRkVG9BcnJheShsaXN0KSB7XG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tOYW1lJyk7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGVzY3JpcHRpb24nKTtcbiAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0RhdGUnKTtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyB0YXNrT2JqZWN0KHRhc2tOYW1lLnZhbHVlLHRhc2tEZXNjcmlwdGlvbi52YWx1ZSx0YXNrRGF0ZS52YWx1ZSk7XG4gICAgbGlzdC5wdXNoKG5ld1Rhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGVUYXNrKG1haW5saXN0LHNwZWNpZmljbGlzdCkge1xuICAgIGlmICghY29udGVudC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpKSkge1xuICAgICAgICAvLyBhZGQgZm9ybSBiZWZvcmUgYnV0dG9uXG4gICAgICAgIGFkZEZvcm0ocmVmZXJlbmNlVGFzayxjcmVhdGVUYXNrRm9ybSgpKTtcbiAgICAgICAgLy8gYWNjZXNzIGJ1dHRvbiBpbnNpZGUgZm9ybSBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdFxuICAgICAgICBsZXQgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBhZGQgaW5wdXQgdG8gZGF0YWJhc2VcbiAgICAgICAgICAgIGlmIChtYWlubGlzdCA9PSBzcGVjaWZpY2xpc3QpIHtcbiAgICAgICAgICAgICAgICBhZGRUb0FycmF5KG1haW5saXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkVG9BcnJheShtYWlubGlzdCk7XG4gICAgICAgICAgICAgICAgYWRkVG9BcnJheShzcGVjaWZpY2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1cbiAgICAgICAgICAgIHJlbW92ZUZvcm0oY29udGVudCk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgZGlzcGxheVxuICAgICAgICAgICAgZGlzcGxheUFjdGl2ZShzcGVjaWZpY2xpc3QpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGFjY2VzcyBjYW5jZWwgYnV0dG9uIGluc2lkZSBmb3JtIGFuZCBkZWxldGUgd2hlbiBwcmVzc2VkXG4gICAgICAgIGxldCBjYW5jZWxUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbFRhc2snKTtcbiAgICAgICAgY2FuY2VsVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUZvcm0oY29udGVudCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBlYWNoIHRhYiBvbiBzaWRlYmFyIGJyaW5ncyBkaWZmZXJlbnQgYXJyYXkgdG8gdmlld1xuXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCB0YWJcblxuLy8gYWxsIHRhc2tzIHZpZXdzIGFsbFRhc2tzIGFycmF5XG5cbi8vIHRvZGF5IGdvZXMgdGhyb3VnaCBhbGxUYXNrcyBhcnJheSBhbmQgc2VlcyB3aGljaCB0YXNrLmRhdGUgPT0gdG9kYXlcblxuLy8gbmV4dCA3IGRheXMgZ29lcyB0aHJvdWdoIGFsbFRhc2tzIGFycmF5IGFuZCBzZWVzIHdoaWNoIHRhc2tzIGhhdmUgdGFzay5kYXRlIDwgdG9kYXkgKyA3IGRheXNcblxuLy8gaW1wb3J0YW50IGdvZXMgdGhyb3VnaCBhbGxUYXNrcyBhbmQgc2VlcyB3aGljaCB0YXNrcyBoYXZlIHRhc2sucHJpb3JpdHkgPT0gJ2ltcG9ydGFudCdcblxuLy8gcHJlc3Npbmcgb24gaW5kaXZpZHVhbCBwcm9qZWN0cyBvbiBzaWRlYmFyIGJyaW5ncyB1cCBwcm9qZWN0TGlzdCBhbmQgaXRlcmF0ZXMgdGhyb3VnaCBwcm9qZWN0LnRhc2tzXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNpZGViYXJcbiAgICAvLyBpZiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSBvciB3dHYgdGhlIGNsYXNzbmFtZSB3YXNcbiAgICAvLyByZXR1cm4gdGhlIGRhdGEtbmFtZSBvZiB0aGUgcHJvamVjdCwgd2hpY2ggc2hvdWxkIGJlIG5hbWUgb2YgcHJvamVjdCBhbmQgZmluZCB0aGUgaW5kZXggdGhyb3VnaCBwcm9qZWN0TGlzdFxuICAgIFxuLy8gZm9yIGVhY2ggdGFiIGFkZCBkb20gY2hhbmdlcyBsaWtlIGZvciByZXN0YXVyYW50IHBhZ2VcblxuLy8gd2hlbiBhZGRUYXNrIGlzIHByZXNzZWQsIGZpbmQgd2hpY2ggdGFiIGlzIGFjdGl2ZSBhbmQgYWRkIHRvIHRoZSBhcnJheSBhY2NvcmRpbmdseVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSGVhZGVyKHBocmFzZSkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IC5oZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwaHJhc2U7XG59XG5cbi8vIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWV0YWInKSkge1xuLy8gICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFicyhldmVudCxtYWlubGlzdCkge1xuICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZXRhYicpICYmIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIC8vIG5lZWQgdG8gZGVsZXRlIGFsbCBwcmV2aW91cyBjb250ZW50XG4gICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICAvLyBpZiBldmVudC50YXJnZXQgaWQgaXMgYWxsIHRhc2tzLGl0ZXJhdGUgdGhyb3VnaCBtYWlubGlzdCBhbmQgZGlzcGxheSBlYWNoIHByb3BlcnR5IG9mIHRhc2tcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG1haW5saXN0KSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKG5hbWUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHdoZW4gY2xpY2tpbmcgYWRkVGFzaywgbG9vayBmb3Igd2hhdHMgYWN0aXZlIHRoZW4gYXNzaWduIGEgdmFyaWFibGUgdGhlIGFycmF5IHRoYXQgd2lsbCBiZSBhY2Nlc3NlZFxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEFjdGl2ZShldmVudCkge1xuICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWV0YWInKTtcbiAgICBsZXQgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtJyk7XG4gICAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9qZWN0SXRlbXMpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZXRhYicpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RJdGVtJykpKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvTGlzdChsaXN0QWxsLHNwZWNpZmljTGlzdCx0YXNrT2JqZWN0KSB7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZXRhYicpO1xuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBsaXN0QWxsLnB1c2godGFza09iamVjdCk7XG4gICAgICAgICAgICBzcGVjaWZpY0xpc3QucHVzaCh0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdGFrZXMgaW4gYXJyYXlzIGZyb20gbWFpbiBqcyBmaWxlIGFuZCByZXR1cm5zIHRoZSBvbmUgdGhhdHMgbmVlZGVkIGFmdGVyIGNoZWNraW5nIGFjdGl2ZSB0YWJcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQWN0aXZlKGFycmF5T25lLGFycmF5VHdvLGFycmF5VGhyZWUsYXJyYXlGb3VyKSB7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZXRhYicpO1xuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRhYi5nZXRBdHRyaWJ1dGUoJ2lkJykpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhbGxUYXNrcyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9uZTtcbiAgICAgICAgICAgICAgICBjYXNlICd0b2RheScgOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUd287XG4gICAgICAgICAgICAgICAgY2FzZSAnbmV4dFdlZWsnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUaHJlZTtcbiAgICAgICAgICAgICAgICBjYXNlICdpbXBvcnRhbnQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlGb3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFjdGl2ZShhcnJheSkge1xuICAgIC8vICByZW1vdmUgcHJldmlvdXMgY29udGVudFxuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhcnJheSBhbmQgYWRkIGFzIGNhcmRzXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycmF5KSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKG5hbWUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxufVxuXG5cbi8vIHJlbW92ZSBwcmV2aW91cyBjb250ZW50XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgIGZvciAoY29uc3QgY2FyZCBvZiBjYXJkcykge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNhcmQpO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtJyk7XG5cbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZS50eXBlID0gJ3RleHQnO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgICBuYW1lLnBsYWNlaG9sZGVyID0gJ0VudGVyIHByb2plY3QgbmFtZSc7XG5cbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICAgIGFkZC50ZXh0Q29udGVudCA9ICdhZGQnO1xuICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsUHJvamVjdCcpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuICAgIGJ1dHRvbnMuYXBwZW5kKGFkZCxjYW5jZWwpO1xuICAgIGJ1dHRvbnMuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z2FwOjFlbSc7XG5cbiAgICBmb3JtLmFwcGVuZChuYW1lLGJ1dHRvbnMpO1xuICAgIFxuICAgIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtJyk7XG4gICAgXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJyk7XG4gICAgbmFtZS5wbGFjZWhvbGRlciA9ICdFbnRlciB0YXNrIG5hbWUnO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gJ0VudGVyIGRlc2NyaXB0aW9uIGZvciB0YXNrJztcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZScpO1xuXG4gICAgLy8gbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIC8vIHByaW9yaXR5TGFiZWwuZm9yID0gJ3ByaW9yaXR5JztcbiAgICAvLyBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudD8nO1xuXG4gICAgLy8gbmVlZCB0byBmaXggdGhpc1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb3JpdHkudHlwZSA9ICdjaGVja2JveCc7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9ICdpbXBvcnRhbnQnO1xuXG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICBhZGQudGV4dENvbnRlbnQgPSAnYWRkJztcbiAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbFRhc2snKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICBidXR0b25zLmFwcGVuZChhZGQsY2FuY2VsKTtcbiAgICBidXR0b25zLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDoxZW0nO1xuXG4gICAgZm9ybS5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KGF1dG8tZml0LDFmcik7Z2FwOjFlbTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyJztcblxuICAgIGZvcm0uYXBwZW5kKG5hbWUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSxidXR0b25zKTtcbiAgICByZXR1cm4gZm9ybTtcbn0iLCJleHBvcnQgY29uc3QgcHJvamVjdE9iamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAvLyBhY2Nlc3MgdGhlIG9iamVjdHMgdGFza3MgYnkgYXBwZW5kaW5nIGFuZCBkZWxldGluZyBmcm9tIHRoaXMgYXJyYXlcbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tPYmplY3QgPSBmdW5jdGlvbihuYW1lLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyBjcmVhdGUgdGhpcy5wcmlvcml0eSBhbmQgdXNlIHJhZGlvIGJ1dHRvbnMgd2l0aCBjaG9pY2Ugbm9ybWFsL2ltcG9ydGFudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZXZhbHVhdGVQcm9qZWN0LCBldmFsdWF0ZVRhc2ssIGNoYW5nZUhlYWRlciwgcmVmcmVzaEFjdGl2ZSwgY2hlY2tBY3RpdmUsIGNoYW5nZVRhYnMgfSBmcm9tICcuL2RvbSc7XG5cbi8vIGFkZCBwcm9qZWN0IGJ1dHRvbiBhcHBlbmRzIHRvIGFuIGVtcHR5IGFycmF5L29iamVjdFxuXG4vLyBlYWNoIGFycmF5IGl0ZW0gaXMgYW4gb2JqZWN0IGNvbnNpc3Rpbmcgb2YgYXJyYXkgb2YgdGFzayBvYmplY3RzXG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBidXR0b24gdG8gYWRkIHByb2plY3RzXG5cbi8vIGZ1bmN0aW9ucyBpbiBpbmRleC5qcyB3aWxsIG9ubHkgZG8gc3R1ZmYgcmVsYXRlZCB0byBhcnJheS9vYmplY3RzXG5cbi8vIGltcG9ydGVkIGZ1bmN0aW9ucyB3aWxsIGRlYWwgd2l0aCBkb20gbWFuaXB1bGF0aW9uXG5cbi8vIGNyZWF0ZSBhcnJheXMgZm9yIGFsbCB0YXNrcywgaW1wb3J0YW50IHRhc2tzLCBhbmQgdGFza3Mgb3JkZXJlZCBieSBkYXRlXG5cbi8vIGZvciBlYWNoIHRhYiBhZGQgZG9tIGNoYW5nZXMgbGlrZSBmb3IgcmVzdGF1cmFudCBwYWdlXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5jb25zdCBhbGxUYXNrcyA9IFtdO1xuY29uc3QgdG9kYXlUYXNrcyA9IFtdO1xuY29uc3QgbmV4dFdlZWtUYXNrcyA9IFtdO1xuY29uc3QgaW1wb3J0YW50VGFza3MgPSBbXTtcblxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25Qcm9qZWN0Jyk7XG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvblRhc2tzJyk7XG5jb25zdCB0YWJBbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxUYXNrcycpO1xuY29uc3QgdGFiVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbmNvbnN0IHRhYk5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHRXZWVrJyk7XG5jb25zdCB0YWJJbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1wb3J0YW50Jyk7XG5cbmxldCBhY3RpdmVBcnJheSA9IGFsbFRhc2tzO1xuXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGFkZCB0YXNrIHRvIGFycmF5XG4gICAgZXZhbHVhdGVUYXNrKGFsbFRhc2tzLGFjdGl2ZUFycmF5KTtcbiAgICAvLyBkaXNwbGF5IGFycmF5IGJhc2VkIG9uIHdoaWNoIHRhYiBpcyBhY3RpdmVcbn0pO1xuXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGV2YWx1YXRlUHJvamVjdChwcm9qZWN0TGlzdCk7XG59KTtcblxudGFiQWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGZ1bmN0aW9uXG4gICAgY2hhbmdlSGVhZGVyKCdBbGwgVGFza3MnKTtcbiAgICByZWZyZXNoQWN0aXZlKGUpO1xuICAgIGFjdGl2ZUFycmF5ID0gY2hlY2tBY3RpdmUoYWxsVGFza3MsdG9kYXlUYXNrcyxuZXh0V2Vla1Rhc2tzLGltcG9ydGFudFRhc2tzKTtcbiAgICBjaGFuZ2VUYWJzKGUsYWN0aXZlQXJyYXkpO1xufSlcblxudGFiVG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGZ1bmN0aW9uXG4gICAgY2hhbmdlSGVhZGVyKCdUb2RheScpO1xuICAgIHJlZnJlc2hBY3RpdmUoZSk7XG4gICAgYWN0aXZlQXJyYXkgPSBjaGVja0FjdGl2ZShhbGxUYXNrcyx0b2RheVRhc2tzLG5leHRXZWVrVGFza3MsaW1wb3J0YW50VGFza3MpO1xuICAgIGNoYW5nZVRhYnMoZSxhY3RpdmVBcnJheSk7XG59KVxuXG50YWJOZXh0V2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gZnVuY3Rpb25cbiAgICBjaGFuZ2VIZWFkZXIoJ05leHQgNyBEYXlzJyk7XG4gICAgcmVmcmVzaEFjdGl2ZShlKTtcbiAgICBhY3RpdmVBcnJheSA9IGNoZWNrQWN0aXZlKGFsbFRhc2tzLHRvZGF5VGFza3MsbmV4dFdlZWtUYXNrcyxpbXBvcnRhbnRUYXNrcyk7XG4gICAgY2hhbmdlVGFicyhlLGFjdGl2ZUFycmF5KTsgICAgY2hhbmdlVGFicyhlLGFjdGl2ZUFycmF5KTtcbn0pXG5cbnRhYkltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gZnVuY3Rpb25cbiAgICBjaGFuZ2VIZWFkZXIoJ0ltcG9ydGFudCcpO1xuICAgIHJlZnJlc2hBY3RpdmUoZSk7XG4gICAgYWN0aXZlQXJyYXkgPSBjaGVja0FjdGl2ZShhbGxUYXNrcyx0b2RheVRhc2tzLG5leHRXZWVrVGFza3MsaW1wb3J0YW50VGFza3MpO1xuICAgIGNoYW5nZVRhYnMoZSxhY3RpdmVBcnJheSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==