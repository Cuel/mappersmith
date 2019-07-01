/*!
 * Mappersmith 2.29.0
 * https://github.com/tulios/mappersmith
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mappersmith=e():t.mappersmith=e()}(window,function(){return function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var _process,getNanoSeconds,loadTime;__webpack_require__.d(__webpack_exports__,"g",function(){return toQueryString}),__webpack_require__.d(__webpack_exports__,"f",function(){return performanceNow}),__webpack_require__.d(__webpack_exports__,"e",function(){return parseResponseHeaders}),__webpack_require__.d(__webpack_exports__,"d",function(){return lowerCaseObjectKeys}),__webpack_require__.d(__webpack_exports__,"a",function(){return assign}),__webpack_require__.d(__webpack_exports__,"c",function(){return isPlainObject}),__webpack_require__.d(__webpack_exports__,"b",function(){return btoa});try{_process=eval('typeof __TEST_WEB__ === "undefined" && typeof process === "object" ? process : undefined')}catch(t){}var hasProcessHrtime=function(){return null!=_process&&_process.hrtime};hasProcessHrtime()&&(getNanoSeconds=function(){var t=_process.hrtime();return 1e9*t[0]+t[1]},loadTime=getNanoSeconds());var R20=/%20/g,validKeys=function(e){return Object.keys(e).filter(function(t){return void 0!==e[t]&&null!==e[t]})},buildRecursive=function e(r,n,o){o=o||"";var t=Array.isArray(n),i="object"===_typeof(n);return t||i?t?n.map(function(t){return e(r,t,o+"[]")}).join("&"):validKeys(n).map(function(t){return e(r,n[t],o+"["+t+"]")}).join("&"):"".concat(encodeURIComponent(r+o),"=").concat(encodeURIComponent(n))};function toQueryString(e){return isPlainObject(e)?validKeys(e).map(function(t){return buildRecursive(t,e[t])}).join("&").replace(R20,"+"):e}function performanceNow(){return hasProcessHrtime()?(getNanoSeconds()-loadTime)/1e6:Date.now()}function parseResponseHeaders(t){var e={};if(!t)return e;for(var r=t.split("\r\n"),n=0;n<r.length;n++){var o=r[n],i=o.indexOf(": ");if(0<i){var s=o.substring(0,i).toLowerCase().trim(),a=o.substring(i+2).trim();e[s]=a}}return e}function lowerCaseObjectKeys(r){return Object.keys(r).reduce(function(t,e){return t[e.toLowerCase()]=r[e],t},{})}var hasOwnProperty=Object.prototype.hasOwnProperty,assign=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},toString=Object.prototype.toString;function isPlainObject(t){return"[object Object]"===toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})}var CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",btoa=function(t){for(var e,r,n="",o=CHARS,i=String(t),s=0;i.charAt(0|s)||(o="=",s%1);n+=o.charAt(63&e>>8-s%1*8)){if(255<(r=i.charCodeAt(s+=.75)))throw new Error("[Mappersmith] 'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");e=e<<8|r}return n}},function(t,e,r){"use strict";function n(t){this.host=t.host,this.path=t.path,this.method=t.method||"get",this.headers=t.headers,this.params=t.params,this.queryParamAlias=t.queryParamAlias||{},this.binary=t.binary||!1,this.bodyAttr=t.bodyAttr||"body",this.headersAttr=t.headersAttr||"headers",this.authAttr=t.authAttr||"auth",this.timeoutAttr=t.timeoutAttr||"timeout";var e=t.middleware||t.middlewares||[];this.middleware=e}r.r(e);var u=r(0);function h(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){var r=e.gatewayConfigs,n=void 0===r?null:r,o=e.middleware,i=void 0===o?[]:o,s=e.context,a=void 0===s?{}:s;this.host=t.host,this.bodyAttr=t.bodyAttr,this.headersAttr=t.headersAttr,this.authAttr=t.authAttr,this.timeoutAttr=t.timeoutAttr,this.clientId=t.clientId||null,this.gatewayConfigs=Object(u.a)({},n,t.gatewayConfigs),this.resources=t.resources||{},this.context=a;var c=t.middleware||t.middlewares||[];t.ignoreGlobalMiddleware?this.middleware=c:this.middleware=h(c).concat(h(i))}o.prototype={eachResource:function(r){var n=this;Object.keys(this.resources).forEach(function(e){var t=n.eachMethod(e,function(t){return{name:t,descriptor:n.createMethodDescriptor(e,t)}});r(e,t)})},eachMethod:function(t,e){return Object.keys(this.resources[t]).map(e)},createMethodDescriptor:function(t,e){var r=this.resources[t][e];if(!r||!r.path)throw new Error('[Mappersmith] path is undefined for resource "'.concat(t,'" method "').concat(e,'"'));return new n(Object(u.a)({host:this.host,bodyAttr:this.bodyAttr,headersAttr:this.headersAttr,authAttr:this.authAttr,timeoutAttr:this.timeoutAttr},r))},createMiddleware:function(){var e=this,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=r.resourceName,n=r.resourceMethod;return h(this.createMethodDescriptor(t,n).middleware).concat(h(this.middleware)).map(function(t){return Object(u.a)({__name:t.name||t.toString(),response:function(t){return t()},prepareRequest:function(t){var e=this;return this.request?t().then(function(t){return e.request(t)}):t()}},t(Object(u.a)(r,{clientId:e.clientId,context:Object(u.a)({},e.context)})))})}};var i=o,a=/{([^}]+)}/,s=/\/$/;function c(t,e){this.methodDescriptor=t,this.requestParams=e||{}}c.prototype={params:function(){var n=this,o=Object(u.a)({},this.methodDescriptor.params,this.requestParams);return Object.keys(o).reduce(function(t,e){var r;return(r=e)!==n.methodDescriptor.headersAttr&&r!==n.methodDescriptor.bodyAttr&&r!==n.methodDescriptor.authAttr&&r!==n.methodDescriptor.timeoutAttr&&(t[e]=o[e]),t},{})},method:function(){return this.methodDescriptor.method.toLowerCase()},host:function(){return(this.methodDescriptor.host||"").replace(s,"")},path:function(){var r=this,n=this.methodDescriptor.path;"/"!==this.methodDescriptor.path[0]&&(n="/".concat(this.methodDescriptor.path));var o=this.params();Object.keys(o).forEach(function(t){var e=o[t],r="{".concat(t,"}");new RegExp(r).test(n)&&(n=n.replace("{".concat(t,"}"),e),delete o[t])});var t=n.match(a);if(t)throw new Error("[Mappersmith] required parameter missing (".concat(t[1],'), "').concat(n,'" cannot be resolved'));var e=Object.keys(o).reduce(function(t,e){return t[r.methodDescriptor.queryParamAlias[e]||e]=o[e],t},{}),i=Object(u.g)(e);if(0!==i.length){var s=n.includes("?");n+="".concat(s?"&":"?").concat(i)}return n},url:function(){return"".concat(this.host()).concat(this.path())},headers:function(){return Object(u.d)(Object(u.a)({},this.methodDescriptor.headers,this.requestParams[this.methodDescriptor.headersAttr]))},header:function(t){return this.headers()[t.toLowerCase()]},body:function(){return this.requestParams[this.methodDescriptor.bodyAttr]},auth:function(){return this.requestParams[this.methodDescriptor.authAttr]},timeout:function(){return this.requestParams[this.methodDescriptor.timeoutAttr]},enhance:function(t){var e=this.methodDescriptor.headersAttr,r=this.methodDescriptor.bodyAttr,n=this.methodDescriptor.authAttr,o=this.methodDescriptor.timeoutAttr,i=Object(u.a)({},this.requestParams,t.params);return i[e]=Object(u.a)({},this.requestParams[e],t.headers),t.body&&(i[r]=t.body),t.auth&&(i[n]=t.auth),t.timeout&&(i[o]=t.timeout),new c(this.methodDescriptor,i)},isBinary:function(){return this.methodDescriptor.binary}};var d=c;function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,r){if(!t)throw new Error("[Mappersmith] invalid manifest (".concat(t,")"));if(!e||!e())throw new Error("[Mappersmith] gateway class not configured (configs.gateway)");this.Promise=r.Promise,this.manifest=new i(t,r),this.GatewayClassFactory=e,this.maxMiddlewareStackExecutionAllowed=r.maxMiddlewareStackExecutionAllowed}p.prototype={build:function(){var r=this,n={_manifest:this.manifest};return this.manifest.eachResource(function(t,e){n[t]=r.buildResource(t,e)}),n},buildResource:function(i,t){var s=this;return t.reduce(function(t,r){return Object(u.a)(t,(e={},n=r.name,o=function(t){var e=new d(r.descriptor,t);return s.invokeMiddlewares(i,r.name,e)},n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e));var e,n,o},{})},invokeMiddlewares:function(t,e,r){var o=this,n=this.manifest.createMiddleware({resourceName:t,resourceMethod:e}),i=this.GatewayClassFactory(),s=this.manifest.gatewayConfigs,a={middleware:null,returnedInvalidRequest:!1,abortExecution:!1},c=n.reduce(function(e,n){return function(){var t=function(t){throw a.abortExecution=!0,t};return o.Promise.resolve().then(function(){return n.prepareRequest(e,t)}).then(function(t){if(t instanceof d)return t;a.returnedInvalidRequest=!0;var e=f(t),r=("object"===e||"function"===e)&&t.name||e;throw new Error('[Mappersmith] middleware "'.concat(n.__name,'" should return "Request" but returned "').concat(r,'"'))}).catch(function(t){throw a.middleware=n.__name,t})}},function(){return o.Promise.resolve(r)}),u=0;return new this.Promise(function(e,t){(function e(){return c().catch(function(t){var e=a.returnedInvalidRequest,r=a.abortExecution,n=a.middleware;if(e||r)throw t;var o=new Error('[Mappersmith] middleware "'.concat(n,'" failed in the request phase: ').concat(t.message));throw o.stack=t.stack,o}).then(function(t){if(++u>o.maxMiddlewareStackExecutionAllowed)throw new Error("[Mappersmith] infinite loop detected (middleware stack invoked ".concat(u,' times). Check the use of "renew" in one of the middleware.'));var r=e;return n.reduce(function(t,e){return function(){return e.response(t,r)}},function(){return new i(t,s).call()})()})})().then(function(t){return e(t)}).catch(t)})}};var l=p;r.d(e,"version",function(){return m}),r.d(e,"configs",function(){return b}),r.d(e,"setContext",function(){return y}),r.d(e,"default",function(){return w});var m="2.29.0",b={context:{},middleware:[],Promise:"function"==typeof Promise?Promise:null,fetch:"function"==typeof fetch?fetch:null,maxMiddlewareStackExecutionAllowed:2,gateway:null,gatewayConfigs:{emulateHTTP:!1,enableHTTP408OnTimeouts:!1,XHR:{withCredentials:!1,configure:null},HTTP:{configure:null},Fetch:{credentials:"omit"}}},y=function(t){b.context=Object(u.a)(b.context,t)};function w(t){return new l(t,function(){return b.gateway},b).build()}},function(module,exports,__webpack_require__){var lib=__webpack_require__(1),_process,defaultGateway;try{_process=eval('typeof process === "object" ? process : undefined')}catch(t){}"undefined"!=typeof XMLHttpRequest?defaultGateway=__webpack_require__(4).default:void 0!==_process&&(defaultGateway=__webpack_require__(3).default),lib.configs.gateway=defaultGateway,module.exports=lib},function(t,e){},function(t,e,r){"use strict";r.r(e);var s=r(0),i=r(1);function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=/^application\/json/;function a(t,e,r,n,o){if(t.requestParams&&t.requestParams.auth){var i=Object(s.a)({},t.requestParams.auth,{password:"***"});this.originalRequest=t.enhance({auth:i})}else this.originalRequest=t;this.responseStatus=e,this.responseData=void 0!==r?r:null,this.responseHeaders=n||{},this.errors=o||[],this.timeElapsed=null}a.prototype={request:function(){return this.originalRequest},status:function(){return 1223===this.responseStatus?204:this.responseStatus},success:function(){var t=this.status();return 200<=t&&t<400},headers:function(){return Object(s.d)(this.responseHeaders)},header:function(t){return this.headers()[t.toLowerCase()]},rawData:function(){return this.responseData},data:function(){var t=this.responseData;if(this.isContentTypeJSON())try{t=JSON.parse(this.responseData)}catch(t){}return t},isContentTypeJSON:function(){return o.test(this.headers()["content-type"])},error:function(){var t=this.errors[this.errors.length-1]||null;return"string"==typeof t?new Error(t):t},enhance:function(t){return new a(this.request(),t.status||this.status(),t.rawData||this.rawData(),Object(s.a)({},this.headers(),t.headers),n(this.errors).concat([t.error]))}};var c=a,u=function(t){var e=new Error(t);return e.name="TimeoutError",e},h=/^(delete|put|patch)/i;function d(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.request=t,this.configs=e,this.successCallback=function(){},this.failCallback=function(){}}d.extends=function(t){return Object(s.a)({},d.prototype,t)},d.prototype={options:function(){return this.configs},shouldEmulateHTTP:function(){return this.options().emulateHTTP&&h.test(this.request.method())},call:function(){var n=this,t=arguments,o=Object(s.f)();return new i.configs.Promise(function(e,r){n.successCallback=function(t){t.timeElapsed=Object(s.f)()-o,e(t)},n.failCallback=function(t){t.timeElapsed=Object(s.f)()-o,r(t)};try{n[n.request.method()].apply(n,t)}catch(t){n.dispatchClientError(t.message,t)}})},dispatchResponse:function(t){t.success()?this.successCallback(t):this.failCallback(t)},dispatchClientError:function(t,e){var r;(r=e)&&"TimeoutError"===r.name&&this.options().enableHTTP408OnTimeouts?this.failCallback(new c(this.request,408,t,{},[e])):this.failCallback(new c(this.request,400,t,{},[e]))},prepareBody:function(t,e){var r=this.request.body();this.shouldEmulateHTTP()&&(r=r||{},Object(s.c)(r)&&(r._method=t),e["x-http-method-override"]=t);var n=Object(s.g)(r);return n&&Object(s.c)(r)&&(e["content-type"]="application/x-www-form-urlencoded;charset=utf-8"),n}};var f=d,p=window.btoa||s.b;function l(t){f.apply(this,arguments)}l.prototype=f.extends({get:function(){var t=this.createXHR();t.open("GET",this.request.url(),!0),this.setHeaders(t,{}),this.configureTimeout(t),this.configureBinary(t),t.send()},head:function(){var t=this.createXHR();t.open("HEAD",this.request.url(),!0),this.setHeaders(t,{}),this.configureTimeout(t),this.configureBinary(t),t.send()},post:function(){this.performRequest("post")},put:function(){this.performRequest("put")},patch:function(){this.performRequest("patch")},delete:function(){this.performRequest("delete")},configureBinary:function(t){this.request.isBinary()&&(t.responseType="blob")},configureTimeout:function(t){var e=this;this.canceled=!1,this.timer=null;var r=this.request.timeout();r&&(t.timeout=r,t.addEventListener("timeout",function(){e.canceled=!0,clearTimeout(e.timer);var t=u("Timeout (".concat(r,"ms)"));e.dispatchClientError(t.message,t)}),this.timer=setTimeout(function(){e.canceled=!0;var t=u("Timeout (".concat(r,"ms)"));e.dispatchClientError(t.message,t)},r+1))},configureCallbacks:function(i){var s=this;i.addEventListener("load",function(){s.canceled||(clearTimeout(s.timer),s.dispatchResponse(s.createResponse(i)))}),i.addEventListener("error",function(t){if(!s.canceled){clearTimeout(s.timer);var e=t?t.message||t.name:i.responseText,r="Network error",n=e?": ".concat(e):"",o=new Error("".concat(r).concat(n));s.dispatchClientError(r,o)}});var t=this.options().XHR;t.withCredentials&&(i.withCredentials=!0),t.configure&&t.configure(i)},performRequest:function(t){var e=this.shouldEmulateHTTP()?"post":t,r=this.createXHR();r.open(e.toUpperCase(),this.request.url(),!0);var n={},o=this.prepareBody(t,n);this.setHeaders(r,n),this.configureTimeout(r),this.configureBinary(r);var i=[];o&&i.push(o),r.send.apply(r,i)},createResponse:function(t){var e=t.status,r=this.request.isBinary()?t.response:t.responseText,n=Object(s.e)(t.getAllResponseHeaders());return new c(this.request,e,r,n)},setHeaders:function(e,t){var r=this.request.auth();if(r){var n=r.username||"",o=r.password||"";t.authorization="Basic ".concat(p("".concat(n,":").concat(o)))}var i=Object(s.a)(t,this.request.headers());Object.keys(i).forEach(function(t){e.setRequestHeader(t,i[t])})},createXHR:function(){var t=new XMLHttpRequest;return this.configureCallbacks(t),t}});e.default=l}])});
//# sourceMappingURL=mappersmith.map