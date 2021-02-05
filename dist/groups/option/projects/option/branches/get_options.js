!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return n={},o.m=r=[function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.PIPELINES=t.MERGE_REQUESTS=t.ISSUES=t.BRANCHES=t.PROJECTS=t.GROUPS=t.TYPE_USER=t.TYPE_GROUP=t.token=t.uri=void 0,t.uri="https://gitlab.com/api/v4",t.token=VARS.GITLAB_PERSONAL_TOKEN,t.TYPE_GROUP="GROUP",t.TYPE_USER="USER",t.GROUPS="groups",t.PROJECTS="projects",t.BRANCHES="branches",t.ISSUES="issues",t.MERGE_REQUESTS="merge_requests",t.PIPELINES="pipelines";var n={setData:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getData:function(e){return JSON.parse(localStorage.getItem(e))}};t.store=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleErrors=t.decodeApiResponse=t.api=void 0;var n=r(0);t.api=function(e){return""+n.uri+e},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}};t.handleErrors=function(e,t){switch(e){case 400:case 401:case 403:case 404:case 405:case 406:case 409:case 500:notify(t,"error",3e3)}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.rerunPipeline=t.deletePipeline=t.createNewPipeline=t.getAllPipelines=t.deleteIssue=t.updateIssue=t.createNewIssue=t.getAllIssuesList=t.deleteMR=t.mergeMR=t.getAllMergeRequest=t.createNewMR=t.deleteMergedBranches=t.removeBranch=t.createNewBranch=t.listAllBranches=t.updateProject=t.removeProject=t.createNewProject=t.removeGroup=t.createNewGroup=t.getAllGroups=t.getUserProjects=t.getAllProjectsByUri=t.getAllProjects=t.getUserInfo=void 0;var o=n(r(3));t.getUserInfo=function(){return o.default.get("/user")};t.getAllProjects=function(){return o.default.get("/projects?membership=true")};t.getAllProjectsByUri=function(e){return o.default.get(e)};t.getUserProjects=function(e){return o.default.get("/users/"+e+"/projects")};t.getAllGroups=function(){return o.default.get("/groups?membership=true")};t.createNewGroup=function(e){return o.default.post("/groups",e)};t.removeGroup=function(e){return o.default.delete("/groups/"+e)};t.createNewProject=function(e){return o.default.post("/projects",e)};t.removeProject=function(e){return o.default.delete("/projects/"+e)};t.updateProject=function(e,t){return o.default.put("/projects/"+e,t)};t.listAllBranches=function(e){return o.default.get("/projects/"+e+"/repository/branches")};t.createNewBranch=function(e,t){return o.default.post("/projects/"+e+"/repository/branches",t)};t.removeBranch=function(e,t){return o.default.delete("/projects/"+e+"/repository/branches/"+t)};t.deleteMergedBranches=function(e){return o.default.delete("/projects/"+e+"/repository/merged_branches")};t.createNewMR=function(e,t){return o.default.post("/projects/"+e+"/merge_requests",t)};t.getAllMergeRequest=function(e){return o.default.get("/projects/"+e+"/merge_requests?state=opened")};t.mergeMR=function(e,t){return o.default.put("/projects/"+e+"/merge_requests/"+t+"/merge")};t.deleteMR=function(e,t){return o.default.delete("/projects/"+e+"/merge_requests/"+t)};t.getAllIssuesList=function(e){return o.default.get("/projects/"+e+"/issues")};t.createNewIssue=function(e,t){return o.default.post("/projects/"+e+"/issues",t)};t.updateIssue=function(e,t,r){return o.default.put("/projects/"+e+"/issues/"+t,r)};t.deleteIssue=function(e,t){return o.default.delete("/projects/"+e+"/issues/"+t)};t.getAllPipelines=function(e){return o.default.get("/projects/"+e+"/pipelines")};t.createNewPipeline=function(e,t){return o.default.post("/projects/"+e+"/pipeline",t)};t.deletePipeline=function(e,t){return o.default.delete("/projects/"+e+"/pipelines/"+t)};t.rerunPipeline=function(e,t){return o.default.post("/projects/"+e+"/pipelines/"+t+"/retry")}},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),u=r(1),s={"Private-Token":""+o.token,"content-type":"application/json"};function i(){this.api=u.api}o=new(i.prototype.get=function(e,t){return void 0===t&&(t={}),httpGet(this.api(e),n(n({},s),t))},i.prototype.delete=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpDelete(this.api(e),JSON.stringify(t),n(n({},s),r))},i.prototype.put=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPut(this.api(e),JSON.stringify(t),n(n({},s),r))},i.prototype.post=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPost(this.api(e),JSON.stringify(t),n(n({},s),r))},i);t.default=o},,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(1);t.default=function(){if(null!==options&&void 0!==options&&options.projects){var e=options.projects.id,e=n.listAllBranches(e),e=o.decodeApiResponse(e);if(400<=e.status)return{};e=e.response.map(function(e){return{name:e.name,html_url:e.web_url}});return JSON.stringify({add:e})}return{}}}],o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});