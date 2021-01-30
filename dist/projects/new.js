!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return n={},s.m=r=[function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.token=t.uri=void 0,t.uri="https://gitlab.com/api/v4",t.token=VARS.GITLAB_PERSONAL_TOKEN;var n={setData:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getData:function(e){return JSON.parse(localStorage.getItem(e))}};t.store=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleErrors=t.decodeApiResponse=t.api=void 0;var n=r(0);t.api=function(e){return""+n.uri+e},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}};t.handleErrors=function(e,t){switch(e){case 400:case 401:case 403:case 404:case 405:case 406:case 500:notify(t,"error",3e3)}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.rerunPipeline=t.deletePipeline=t.createNewPipeline=t.getAllPipelines=t.deleteIssue=t.updateIssue=t.createNewIssue=t.getAllIssuesList=t.deleteMR=t.mergeMR=t.getAllMergeRequest=t.createNewMR=t.deleteMergedBranches=t.removeBranch=t.createNewBranch=t.listAllBranches=t.updateProject=t.removeProject=t.createNewProject=t.getAllGroups=t.getAllProjects=t.getUserInfo=void 0;var s=n(r(3));t.getUserInfo=function(){return s.default.get("/user")};t.getAllProjects=function(){return s.default.get("/projects?membership=true")};t.getAllGroups=function(){return s.default.get("/groups?membership=true")};t.createNewProject=function(e){return s.default.post("/projects",e)};t.removeProject=function(e){return s.default.delete("/projects/"+e)};t.updateProject=function(e,t){return s.default.put("/projects/"+e,t)};t.listAllBranches=function(e){return s.default.get("/projects/"+e+"/repository/branches")};t.createNewBranch=function(e,t){return s.default.post("/projects/"+e+"/repository/branches",t)};t.removeBranch=function(e,t){return s.default.delete("/projects/"+e+"/repository/branches/"+t)};t.deleteMergedBranches=function(e){return s.default.delete("/projects/"+e+"/repository/merged_branches")};t.createNewMR=function(e,t){return s.default.post("/projects/"+e+"/merge_requests",t)};t.getAllMergeRequest=function(e){return s.default.get("/projects/"+e+"/merge_requests?state=opened")};t.mergeMR=function(e,t){return s.default.put("/projects/"+e+"/merge_requests/"+t+"/merge")};t.deleteMR=function(e,t){return s.default.delete("/projects/"+e+"/merge_requests/"+t)};t.getAllIssuesList=function(e){return s.default.get("/projects/"+e+"/issues")};t.createNewIssue=function(e,t){return s.default.post("/projects/"+e+"/issues",t)};t.updateIssue=function(e,t,r){return s.default.put("/projects/"+e+"/issues/"+t,r)};t.deleteIssue=function(e,t){return s.default.delete("/projects/"+e+"/issues/"+t)};t.getAllPipelines=function(e){return s.default.get("/projects/"+e+"/pipelines")};t.createNewPipeline=function(e,t){return s.default.post("/projects/"+e+"/pipeline",t)};t.deletePipeline=function(e,t){return s.default.delete("/projects/"+e+"/pipelines/"+t)};t.rerunPipeline=function(e,t){return s.default.post("/projects/"+e+"/pipelines/"+t+"/retry")}},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),o=r(1),i={"Private-Token":""+s.token,"content-type":"application/json"};function u(){this.api=o.api}s=new(u.prototype.get=function(e,t){return void 0===t&&(t={}),httpGet(this.api(e),n(n({},i),t))},u.prototype.delete=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpDelete(this.api(e),JSON.stringify(t),n(n({},i),r))},u.prototype.put=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPut(this.api(e),JSON.stringify(t),n(n({},i),r))},u.prototype.post=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPost(this.api(e),JSON.stringify(t),n(n({},i),r))},u);t.default=s},,,function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});
// @description Create a new project
var s=r(2),o=r(1),i=args.filter(Boolean),t="",r=!1;"private"===i[i.length-1]?(t=i.slice(0,i.length-1).join(" "),r=!0):t=i.join(" "),t=t||prompt("Github project name");r=n({name:t,pages_access_level:r?"private":"public",visibility:r?"private":"public"},{issues_access_level:r?"private":"enabled",repository_access_level:"enabled",merge_requests_access_level:"enabled",forking_access_level:r?"private":"enabled",builds_access_level:"enabled",wiki_access_level:r?"private":"enabled",snippets_access_level:r?"private":"enabled"}),r=s.createNewProject(r),r=o.decodeApiResponse(r);400<=r.status?o.handleErrors(r.status,r.response.message||r.response.error):(notify("Project Created","success",3e3),open(r.response.http_url_to_repo),reIndex(["gitlab","projects"]))}],s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=6);function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}var r,n});