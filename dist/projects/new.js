!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.token=t.uri=void 0,t.uri="https://gitlab.com/api/v4",t.token=VARS.GITLAB_PERSONAL_TOKEN;var n={setData:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getData:function(e){return JSON.parse(localStorage.getItem(e))}};t.store=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleErrors=t.decodeApiResponse=t.api=void 0;var n=r(0);t.api=function(e){return""+n.uri+e},t.decodeApiResponse=function(e){var t=e;return t.response?{response:JSON.parse(t.response),status:t.status}:{response:{},status:t.status}},t.handleErrors=function(e,t){switch(e){case 400:case 401:case 403:case 404:case 405:case 406:case 500:notify(t,"error",3e3)}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.rerunPipeline=t.deletePipeline=t.createNewPipeline=t.getAllPipelines=t.deleteIssue=t.updateIssue=t.createNewIssue=t.getAllIssuesList=t.deleteMR=t.mergeMR=t.getAllMergeRequest=t.createNewMR=t.deleteMergedBranches=t.removeBranch=t.createNewBranch=t.listAllBranches=t.updateProject=t.removeProject=t.createNewProject=t.getAllProjects=t.getUserInfo=void 0;var s=n(r(3));t.getUserInfo=function(){return s.default.get("/user")},t.getAllProjects=function(){return s.default.get("/projects?membership=true")},t.createNewProject=function(e){return s.default.post("/projects",e)},t.removeProject=function(e){return s.default.delete("/projects/"+e)},t.updateProject=function(e,t){return s.default.put("/projects/"+e,t)},t.listAllBranches=function(e){return s.default.get("/projects/"+e+"/repository/branches")},t.createNewBranch=function(e,t){return s.default.post("/projects/"+e+"/repository/branches",t)},t.removeBranch=function(e,t){return s.default.delete("/projects/"+e+"/repository/branches/"+t)},t.deleteMergedBranches=function(e){return s.default.delete("/projects/"+e+"/repository/merged_branches")},t.createNewMR=function(e,t){return s.default.post("/projects/"+e+"/merge_requests",t)},t.getAllMergeRequest=function(e){return s.default.get("/projects/"+e+"/merge_requests?state=opened")},t.mergeMR=function(e,t){return s.default.put("/projects/"+e+"/merge_requests/"+t+"/merge")},t.deleteMR=function(e,t){return s.default.delete("/projects/"+e+"/merge_requests/"+t)},t.getAllIssuesList=function(e){return s.default.get("/projects/"+e+"/issues")},t.createNewIssue=function(e,t){return s.default.post("/projects/"+e+"/issues",t)},t.updateIssue=function(e,t,r){return s.default.put("/projects/"+e+"/issues/"+t,r)},t.deleteIssue=function(e,t){return s.default.delete("/projects/"+e+"/issues/"+t)},t.getAllPipelines=function(e){return s.default.get("/projects/"+e+"/pipelines")},t.createNewPipeline=function(e,t){return s.default.post("/projects/"+e+"/pipeline",t)},t.deletePipeline=function(e,t){return s.default.delete("/projects/"+e+"/pipelines/"+t)},t.rerunPipeline=function(e,t){return s.default.post("/projects/"+e+"/pipelines/"+t+"/retry")}},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),o=r(1),i={"Private-Token":""+s.token,"content-type":"application/json"},u=new(function(){function e(){this.api=o.api}return e.prototype.get=function(e,t){return void 0===t&&(t={}),httpGet(this.api(e),n(n({},i),t))},e.prototype.delete=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpDelete(this.api(e),JSON.stringify(t),n(n({},i),r))},e.prototype.put=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPut(this.api(e),JSON.stringify(t),n(n({},i),r))},e.prototype.post=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPost(this.api(e),JSON.stringify(t),n(n({},i),r))},e}());t.default=u},,,function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),o=r(1),i=args.filter(Boolean),u="",c=!1;"private"===i[i.length-1]?(u=i.slice(0,i.length-1).join(" "),c=!0):u=i.join(" "),u||(u=prompt("Github project name"));var a=n({name:u,pages_access_level:c?"private":"public",visibility:c?"private":"public"},{issues_access_level:c?"private":"enabled",repository_access_level:"enabled",merge_requests_access_level:"enabled",forking_access_level:c?"private":"enabled",builds_access_level:"enabled",wiki_access_level:c?"private":"enabled",snippets_access_level:c?"private":"enabled"}),l=s.createNewProject(a),p=o.decodeApiResponse(l);p.status>=400?o.handleErrors(p.status,p.response.message?p.response.message:p.response.error):(notify("Project Created","success",3e3),open(p.response.http_url_to_repo),reIndex(["gitlab","projects"]))}])}));