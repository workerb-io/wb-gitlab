(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/actions/projects/option/pipelines/get_options.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/projects/option/pipelines/get_options.ts":
/*!**************************************************************!*\
  !*** ./src/actions/projects/option/pipelines/get_options.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar helper_1 = __webpack_require__(/*! ../../../../utils/helper */ \"./src/utils/helper.ts\");\nvar api_1 = __webpack_require__(/*! ../../../../utils/api */ \"./src/utils/api.ts\");\nfunction parseISOString(s) {\n    var b = s.split(/\\D+/);\n    return new Date(Date.UTC(Number(b[0]), Number(b[1]) - 1, Number(b[2]), Number(b[3]), Number(b[4]), Number(b[5]), Number(b[6]))).toUTCString();\n}\nexports.default = (function () {\n    if (options === null || options === void 0 ? void 0 : options.projects) {\n        var projectId = options.projects.id;\n        var response = api_1.getAllPipelines(projectId);\n        var result = helper_1.decodeApiResponse(response);\n        if (result.status >= 400) {\n            return {};\n        }\n        var pipelines = result.response.map(function (_a) {\n            var web_url = _a.web_url, id = _a.id, status = _a.status, created_at = _a.created_at;\n            return ({\n                id: id,\n                name: \"Pipeline: #\" + id,\n                html_url: web_url,\n                description: \"Created on \" + parseISOString(created_at) + \". Status: \" + status,\n            });\n        });\n        // eslint-disable-next-line consistent-return\n        return JSON.stringify({\n            add: pipelines,\n        });\n    }\n    return {};\n});\n\n\n//# sourceURL=webpack://main/./src/actions/projects/option/pipelines/get_options.ts?");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rerunPipeline = exports.deletePipeline = exports.createNewPipeline = exports.getAllPipelines = exports.deleteIssue = exports.updateIssue = exports.createNewIssue = exports.getAllIssuesList = exports.deleteMR = exports.mergeMR = exports.getAllMergeRequest = exports.createNewMR = exports.deleteMergedBranches = exports.removeBranch = exports.createNewBranch = exports.listAllBranches = exports.updateProject = exports.removeProject = exports.createNewProject = exports.getAllProjects = exports.getUserInfo = void 0;\n/* eslint-disable import/prefer-default-export */\nvar request_1 = __importDefault(__webpack_require__(/*! ./request */ \"./src/utils/request.ts\"));\nexports.getUserInfo = function () { return request_1.default.get('/user'); };\nexports.getAllProjects = function () { return request_1.default.get(\"/projects?membership=true\"); };\nexports.createNewProject = function (data) { return request_1.default.post(\"/projects\", data); };\nexports.removeProject = function (id) { return request_1.default.delete(\"/projects/\" + id); };\nexports.updateProject = function (id, data) { return request_1.default.put(\"/projects/\" + id, data); };\nexports.listAllBranches = function (projectId) { return request_1.default.get(\"/projects/\" + projectId + \"/repository/branches\"); };\nexports.createNewBranch = function (projectId, data) {\n    return request_1.default.post(\"/projects/\" + projectId + \"/repository/branches\", data);\n};\nexports.removeBranch = function (projectId, branchName) {\n    return request_1.default.delete(\"/projects/\" + projectId + \"/repository/branches/\" + branchName);\n};\nexports.deleteMergedBranches = function (projectId) {\n    return request_1.default.delete(\"/projects/\" + projectId + \"/repository/merged_branches\");\n};\nexports.createNewMR = function (projectId, data) {\n    return request_1.default.post(\"/projects/\" + projectId + \"/merge_requests\", data);\n};\nexports.getAllMergeRequest = function (projectId) {\n    return request_1.default.get(\"/projects/\" + projectId + \"/merge_requests?state=opened\");\n};\nexports.mergeMR = function (projectId, mrId) {\n    return request_1.default.put(\"/projects/\" + projectId + \"/merge_requests/\" + mrId + \"/merge\");\n};\nexports.deleteMR = function (projectId, mrId) {\n    return request_1.default.delete(\"/projects/\" + projectId + \"/merge_requests/\" + mrId);\n};\nexports.getAllIssuesList = function (projectId) { return request_1.default.get(\"/projects/\" + projectId + \"/issues\"); };\nexports.createNewIssue = function (projectId, data) {\n    return request_1.default.post(\"/projects/\" + projectId + \"/issues\", data);\n};\nexports.updateIssue = function (projectId, issueId, data) {\n    return request_1.default.put(\"/projects/\" + projectId + \"/issues/\" + issueId, data);\n};\nexports.deleteIssue = function (projectId, issueId) {\n    return request_1.default.delete(\"/projects/\" + projectId + \"/issues/\" + issueId);\n};\nexports.getAllPipelines = function (projectId) { return request_1.default.get(\"/projects/\" + projectId + \"/pipelines\"); };\nexports.createNewPipeline = function (projectId, data) {\n    return request_1.default.post(\"/projects/\" + projectId + \"/pipeline\", data);\n};\nexports.deletePipeline = function (project, pipelineId) {\n    return request_1.default.delete(\"/projects/\" + project + \"/pipelines/\" + pipelineId);\n};\nexports.rerunPipeline = function (projectId, pipelineId) {\n    return request_1.default.post(\"/projects/\" + projectId + \"/pipelines/\" + pipelineId + \"/retry\");\n};\n\n\n//# sourceURL=webpack://main/./src/utils/api.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.store = exports.token = exports.uri = void 0;\n/* eslint-disable import/prefer-default-export */\nexports.uri = \"https://gitlab.com/api/v4\";\nexports.token = VARS.GITLAB_PERSONAL_TOKEN;\nvar storageSetter = {\n    setData: function (key, data) {\n        localStorage.setItem(key, JSON.stringify(data));\n    },\n    getData: function (key) {\n        return JSON.parse(localStorage.getItem(key));\n    },\n};\nexports.store = storageSetter;\n\n\n//# sourceURL=webpack://main/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.handleErrors = exports.decodeApiResponse = exports.api = void 0;\n/* eslint-disable default-case */\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\nfunction api(endpoint) {\n    return \"\" + constants_1.uri + endpoint;\n}\nexports.api = api;\nfunction decodeApiResponse(apiResponse) {\n    var result = apiResponse;\n    if (!result.response) {\n        return {\n            response: {},\n            status: result.status,\n        };\n    }\n    return {\n        response: JSON.parse(result.response),\n        status: result.status,\n    };\n}\nexports.decodeApiResponse = decodeApiResponse;\nexports.handleErrors = function (status, response) {\n    switch (status) {\n        case 401:\n        case 500:\n        case 403:\n        case 404:\n        case 400:\n            notify(response, \"error\", 3000);\n    }\n};\n\n\n//# sourceURL=webpack://main/./src/utils/helper.ts?");

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\nvar helper_1 = __webpack_require__(/*! ./helper */ \"./src/utils/helper.ts\");\nvar commonHeaders = {\n    \"Private-Token\": \"\" + constants_1.token,\n    \"content-type\": \"application/json\",\n};\nvar Request = /** @class */ (function () {\n    function Request() {\n        this.api = helper_1.api;\n    }\n    Request.prototype.get = function (uri, headers) {\n        if (headers === void 0) { headers = {}; }\n        return httpGet(this.api(uri), __assign(__assign({}, commonHeaders), headers));\n    };\n    Request.prototype.delete = function (uri, data, headers) {\n        if (data === void 0) { data = {}; }\n        if (headers === void 0) { headers = {}; }\n        return httpDelete(this.api(uri), JSON.stringify(data), __assign(__assign({}, commonHeaders), headers));\n    };\n    Request.prototype.put = function (uri, data, headers) {\n        if (data === void 0) { data = {}; }\n        if (headers === void 0) { headers = {}; }\n        return httpPut(this.api(uri), JSON.stringify(data), __assign(__assign({}, commonHeaders), headers));\n    };\n    Request.prototype.post = function (uri, data, headers) {\n        if (data === void 0) { data = {}; }\n        if (headers === void 0) { headers = {}; }\n        return httpPost(this.api(uri), JSON.stringify(data), __assign(__assign({}, commonHeaders), headers));\n    };\n    return Request;\n}());\nvar request = new Request();\nexports.default = request;\n\n\n//# sourceURL=webpack://main/./src/utils/request.ts?");

/***/ })

/******/ });
});