!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}({0:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.token=t.uri=void 0,t.uri="https://gitlab.com/api/v4",t.token=e.env.GITLAB_PERSONAL_TOKEN;var r={setData:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getData:function(e){return JSON.parse(localStorage.getItem(e))}};t.store=r}).call(this,r(4))},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleErrors=t.decodeApiResponse=t.api=void 0;var n=r(0);t.api=function(e){return""+n.uri+e},t.decodeApiResponse=function(e){var t=e;return t.response?{response:JSON.parse(t.response),status:t.status}:{response:{},status:t.status}},t.handleErrors=function(e,t){switch(e){case 401:case 500:case 403:case 404:case 400:notify(t,"error",3e3)}}},2:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.rerunPipeline=t.deletePipeline=t.createNewPipeline=t.getAllPipelines=t.deleteIssue=t.updateIssue=t.createNewIssue=t.getAllIssuesList=t.deleteMR=t.mergeMR=t.getAllMergeRequest=t.createNewMR=t.deleteMergedBranches=t.removeBranch=t.createNewBranch=t.listAllBranches=t.updateProject=t.removeProject=t.createNewProject=t.getAllProjects=t.getUserInfo=void 0;var o=n(r(3));t.getUserInfo=function(){return o.default.get("/user")},t.getAllProjects=function(){return o.default.get("/projects?owned=true")},t.createNewProject=function(e){return o.default.post("/projects",e)},t.removeProject=function(e){return o.default.delete("/projects/"+e)},t.updateProject=function(e,t){return o.default.put("/projects/"+e,t)},t.listAllBranches=function(e){return o.default.get("/projects/"+e+"/repository/branches")},t.createNewBranch=function(e,t){return o.default.post("/projects/"+e+"/repository/branches",t)},t.removeBranch=function(e,t){return o.default.delete("/projects/"+e+"/repository/branches/"+t)},t.deleteMergedBranches=function(e){return o.default.delete("/projects/"+e+"/repository/merged_branches")},t.createNewMR=function(e,t){return o.default.post("/projects/"+e+"/merge_requests",t)},t.getAllMergeRequest=function(e){return o.default.get("/projects/"+e+"/merge_requests")},t.mergeMR=function(e,t){return o.default.put("/projects/"+e+"/merge_requests/"+t+"/merge")},t.deleteMR=function(e,t){return o.default.delete("/projects/"+e+"/merge_requests/"+t)},t.getAllIssuesList=function(e){return o.default.get("/projects/"+e+"/issues")},t.createNewIssue=function(e,t){return o.default.post("/projects/"+e+"/issues",t)},t.updateIssue=function(e,t,r){return o.default.put("/projects/"+e+"/issues/"+t,r)},t.deleteIssue=function(e,t){return o.default.delete("/projects/"+e+"/issues/"+t)},t.getAllPipelines=function(e){return o.default.get("/projects/"+e+"/pipelines")},t.createNewPipeline=function(e,t){return o.default.post("/projects/"+e+"/pipeline",t)},t.deletePipeline=function(e,t){return o.default.delete("/projects/"+e+"/pipelines/"+t)},t.rerunPipeline=function(e,t){return o.default.post("/projects/"+e+"/pipelines/"+t+"/retry")}},20:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(1);if((null===options||void 0===options?void 0:options.projects)&&(null===options||void 0===options?void 0:options.merge_requests)){var u=options.projects,i=u.id,s=u.html_url,c=options.merge_requests.id,l=n.deleteMR(i,c),a=o.decodeApiResponse(l);a.status>=200&&a.status<=299?(notify("Merge Request Deleted","success",3e3),open(s)):o.handleErrors(a.status,a.response.message)}},3:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),u=r(1),i={"Private-Token":""+o.token,"content-type":"application/json"},s=new(function(){function e(){this.api=u.api}return e.prototype.get=function(e,t){return void 0===t&&(t={}),httpGet(this.api(e),n(n({},i),t))},e.prototype.delete=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpDelete(this.api(e),JSON.stringify(t),n(n({},i),r))},e.prototype.put=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPut(this.api(e),JSON.stringify(t),n(n({},i),r))},e.prototype.post=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),httpPost(this.api(e),JSON.stringify(t),n(n({},i),r))},e}());t.default=s},4:function(e,t){var r,n,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,l=[],a=!1,p=-1;function f(){a&&c&&(a=!1,c.length?l=c.concat(l):p=-1,l.length&&d())}function d(){if(!a){var e=s(f);a=!0;for(var t=l.length;t;){for(c=l,l=[];++p<t;)c&&c[p].run();p=-1,t=l.length}c=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||a||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}})}));