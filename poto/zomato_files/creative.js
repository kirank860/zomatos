/*
	Built by Magnite's Demand Manager
	2/6/2023, 11:36:38 AM
	https://github.com/prebid/prebid-universal-creative.git - '1.15.0'
*/
/* v1.15.0
Updated : 2023-02-06
DEPRECATED, please use creative based on hb_format targeting */
!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(t,e,n){"use strict";e.i=function(t,e){var n=new Image;e&&"function"==typeof e&&(n.addEventListener("load",e),n.addEventListener("error",e));n.src=t},e.a=function(t){if(!t)return"";var e=encodeURI(t);return'<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="'.concat(e,'"></div>')},e.j=function(t,e,n){var r=o.a(n,e);r.src=t,document.body.appendChild(r)},e.g=function(t,e){var n=new XMLHttpRequest;n.addEventListener("load",function(){e(n.responseText)}),n.open("GET",t),n.send()},e.d=function(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})},e.e=function(t,e,n,r){var o=t.document,i=o.createElement("script");i.type="text/javascript",n&&"function"==typeof n&&(i.readyState?i.onreadystatechange=function(){"loaded"!==i.readyState&&"complete"!==i.readyState||(i.onreadystatechange=null,n())}:i.onload=function(){n()});r&&"function"==typeof r&&(i.onerror=function(){r()});i.src=e;var a=o.getElementsByTagName("head");(a=a.length?a:o.getElementsByTagName("body")).length&&(a=a[0]).insertBefore(i,a.firstChild);return i},e.b=r,e.c=function(t){var e=r(t),n=document.createElement("div");return n.appendChild(e),n.innerHTML},e.h=function(e){var n={hb_adid:"adId",hb_cache_host:"cacheHost",hb_cache_path:"cachePath",hb_cache_id:"uuid",hb_format:"mediaType",hb_env:"env",hb_size:"size",hb_pb:"hbPb"};function t(t){return!(!e[t]||!(function(t){return i(t,"Object")}(e[t])&&0<Object.keys(e[t]).length||a(e[t])&&""!==e[t]))}var r={},o={};t("targetingMap")?o=function(e){var n={};return Object.keys(e).forEach(function(t){Array.isArray(e[t])&&0<e[t].length&&(n[t]=e[t][0])}),n}(e.targetingMap):t("targetingKeywords")&&(o=function(t){var o={},e=t.split(",");return 0<e.length&&e.forEach(function(t){var e=t.split(":");if(2===e.length){var n=e[0],r=e[1];o[n]=r}}),o}(e.targetingKeywords));return function(e){Object.keys(e).forEach(function(t){r[n[t]||t]=e[t]})}(o),Object.keys(e).forEach(function(t){"targetingMap"!==t&&"targetingKeywords"!==t&&a(e[t])&&""!==e[t]&&(r[t]=e[t])}),r},e.f=function(t){var e=document.createElement("a");return e.href=decodeURIComponent(t),{href:e.href,protocol:(e.protocol||"").replace(/:$/,""),hostname:e.hostname,port:+e.port,pathname:e.pathname.replace(/^(?!\/)/,"/"),hash:(e.hash||"").replace(/^#/,""),host:(e.host||window.location.host).replace(/:(443|80)$/,"")}};var o=n(1);function r(t){return document.createComment("Creative ".concat(t.crid," served by Prebid.js Header Bidding"))}function i(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"}function a(t){return i(t,"String")}},function(t,e,n){"use strict";e.a=function(t,e){var n=document.createElement("iframe");return n.setAttribute("frameborder",0),n.setAttribute("scrolling","no"),n.setAttribute("marginheight",0),n.setAttribute("marginwidth",0),n.setAttribute("TOPMARGIN",0),n.setAttribute("LEFTMARGIN",0),n.setAttribute("allowtransparency","true"),n.setAttribute("width",e),n.setAttribute("height",t),n},e.b=function(t,e,n){var r;e=e||document,r=n?e.getElementsByTagName(n):e.getElementsByTagName("head");try{(r=r.length?r:e.getElementsByTagName("body")).length&&(r=r[0]).insertBefore(t,r.firstChild)}catch(t){}}},function(t,e,n){"use strict";e.b=function(t,e){return"string"==typeof t&&""!==t&&function(t){return t.top!==t&&!function(t){try{return t.top.location.toString(),!0}catch(t){return!1}}(t)}(e)},e.d=function(t){return!(!t.$sf||!t.$sf.ext)},e.a=function(t){var e=!1,n=t;for(;!e;){try{if(n.pbjs){e=!0;break}}catch(t){}if(n===window.top)break;n=n.parent}return e},e.c=function(t){return t&&"mobile-app"===t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(4),i=n(6),a=n(2);window.ucTag=window.ucTag||{},window.ucTag.renderAd=function(t,e){var n=Object(r.h)(e);Object(a.c)(n.env)||Object(a.b)(n.uuid,window)?Object(i.a)(e):Object(o.a)(t,e)}},function(t,e,n){"use strict";e.a=function(t,e){var n=Object(r.h)(e);Object(o.a)(window)?function(t,e){for(var n=window,r=0;r<10;r++)if((n=n.parent).pbjs)try{n.pbjs.renderAd(t,e);break}catch(t){continue}}(t,n.adId):function(f,p){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",e=3<arguments.length?arguments[3]:void 0,n=f.location,r=t||f.location.hostname,o=n.protocol+"//"+r,d=Object(a.a)(e,f);function i(t){var e=t.message?"message":"data",n={};try{n=JSON.parse(t[e])}catch(t){return}if(n.message&&"Prebid Response"===n.message&&n.adId===p)try{var r=f.document.body,o=n.ad,i=n.adUrl,a=n.width,s=n.height;if("video"===n.mediaType)l(!1,{reason:"preventWritingOnMainDocument",message:"Cannot render video ad ".concat(p)}),console.log("Error trying to write ad.");else if(o){var c=Object(h.a)(n.height,n.width);r.appendChild(c),c.contentDocument.open(),c.contentDocument.write(o),c.contentDocument.close(),l(!0)}else if(i){var u=Object(h.a)(s,a);u.style.display="inline",u.style.overflow="hidden",u.src=i,Object(h.b)(u,document,"body"),l(!0)}else l(!1,{reason:"noAd",message:"No ad for ".concat(p)}),console.log("Error trying to write ad. No ad markup or adUrl for ".concat(p))}catch(t){l(!1,{reason:"exception",message:t.message}),console.log("Error in rendering ad",t)}function l(t,e){var n=1<arguments.length&&void 0!==e?e:{},r=n.reason,o=n.message,i={message:"Prebid Event",adId:p,event:t?"adRenderSucceeded":"adRenderFailed"};t||(i.info={reason:r,message:o}),d(i)}}d({message:"Prebid Request",adId:p,adServerDomain:o},i)}(window,n.adId,n.adServerDomain,n.pubUrl)};var r=n(0),o=n(2),h=n(1),a=n(5)},function(t,e,n){"use strict";e.a=function(e){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,a=function(){if(null==e)return null;var t=Object(r.f)(e);return t.protocol+"://"+t.host}();return function(t,e){if(null==a)throw new Error("Missing pubUrl");var n;if(t=JSON.stringify(t),null==e)i.parent.postMessage(t,a);else{var r=new MessageChannel;(n=r.port1).onmessage=e,i.addEventListener("message",o),i.parent.postMessage(t,a,[r.port2])}return function(){null!=n&&(i.removeEventListener("message",o),n.onmessage=null,n=null)};function o(t){(t.origin||t.originalEvent&&t.originalEvent.origin)===a&&e(t)}}};var r=n(0)},function(t,e,n){"use strict";e.a=function(t){var e=Object(f.h)(t),n=e.cacheHost,r=e.cachePath,o=e.uuid,i=e.size,a=e.hbPb,s="Prebid_";if((o=o||"").substr(0,s.length)===s)!function(t){var e=window.localStorage.getItem(t);m(!0)(e)}(o),g(i);else{var c="".concat(function(t,e){var n=void 0===e||""===e?h:e;return"https://".concat(void 0===t||""===t?l:t).concat(n)}(n,r),"?uuid=").concat(o);g(i),Object(f.g)(c,m(Object(u.c)(e.env),a))}};var f=n(0),u=n(2),p=n(1),d=n(7),l="prebid-server.rubiconproject.com",h="/cache";function g(t){if(t){var e=t.split("x").map(Number);!function(r,o){if(Object(u.d)(window)){var i=window.innerWidth,a=window.innerHeight;i===r&&a===o||(window.$sf.ext.register(r,o,function(t){var e=r-i,n=o-a;window.$sf.ext.expand({r:e,b:n,push:!0})}),window.parent.postMessage({sentinel:"amp",type:"embed-size",width:r,height:o},"*"))}}(e[0],e[1])}else console.log("Targeting key hb_size not found to resize creative")}function m(u,l){return function(t){var e=function(t){var e;try{e=JSON.parse(t)}catch(t){console.log("Error parsing response from cache host: ".concat(t))}return e}(t),n=e.price||l,r=Object(f.c)(e),o=e.width?e.width:e.w,i=e.height?e.height:e.h;if(e.wurl&&Object(f.i)(decodeURIComponent(e.wurl)),e.adm){if(e.adm=n?e.adm.replace("${AUCTION_PRICE}",n):e.adm.replace("${AUCTION_PRICE}",""),r+=u?y(e.adm,o,i):e.adm,e.nurl&&(r+=Object(f.a)(decodeURIComponent(e.nurl))),e.burl){var a=function(){Object(f.i)(e.burl)};if(u)Object(f.e)(window,"mraid.js",function(){!function(e){function n(t){0<t&&(mraid.removeEventListener("exposureChange",n),e())}function r(t){t&&(mraid.removeEventListener("viewableChange",r),e())}function o(){window.MRAID_ENV&&3<=parseFloat(window.MRAID_ENV.version)?mraid.addEventListener("exposureChange",n):window.MRAID_ENV&&parseFloat(window.MRAID_ENV.version)<3&&(mraid.isViewable()?e():mraid.addEventListener("viewableChange",r))}return!(!window.mraid||!window.MRAID_ENV)&&("loading"==mraid.getState()?mraid.addEventListener("ready",function t(){mraid.removeEventListener("ready",t),o()}):o(),!0)}(a)&&a()},a);else a()}Object(d.a)(r)}else if(e.nurl)if(u){r+=y(Object(f.e)(window,e.nurl).outerHTML,o,i),Object(d.a)(r)}else{var s=e.nurl,c=Object(f.b)(e);Object(p.b)(c,document,"body"),Object(f.j)(s,o,i)}}}function y(t,e,n){var r=Object(f.d)();return'<div id="'.concat(r,'" style="border-style: none; position: absolute; width:100%; height:100%;">\n      <div id="').concat(r,'_inner" style="margin: 0 auto; width:').concat(e,"px; height:").concat(n,'px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">').concat(t,"</div>\n      </div>")}},function(t,e,n){"use strict";e.a=function(t){o()(document.body,t,{error:console.error})};var r=n(8),o=n.n(r)},function(t,e,n){var r;r=function(){return o={},n.m=r=[function(t,e,n){"use strict";var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.exports=i.default},function(t,e,n){"use strict";e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=h;var r,o=n(2),c=(r=o)&&r.__esModule?r:{default:r},i=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(4));function u(){}var a={afterAsync:u,afterDequeue:u,afterStreamStart:u,afterWrite:u,autoFix:!0,beforeEnqueue:u,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:u,error:function(t){throw new Error(t.msg)},releaseAsync:!1},l=0,f=[],p=null;function d(){var t=f.shift();if(t){var e=i.last(t);e.afterDequeue(),t.stream=function(t,e,r){(p=new c.default(t,r)).id=l++,p.name=r.name||p.id,h.streams[p.name]=p;var n=t.ownerDocument,o={close:n.close,open:n.open,write:n.write,writeln:n.writeln};function i(t){t=r.beforeWrite(t),p.write(t),r.afterWrite(t)}s(n,{close:u,open:u,write:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(e.join("")+"\n")}});var a=p.win.onerror||u;return p.win.onerror=function(t,e,n){r.error({msg:t+" - "+e+": "+n}),a.apply(p.win,[t,e,n])},p.write(e,function(){s(n,o),p.win.onerror=a,r.done(),p=null,d()}),p}.apply(void 0,t),e.afterStreamStart()}}function h(t,e,n){if(i.isFunction(n))n={done:n};else if("clear"===n)return f=[],p=null,void(l=0);n=i.defaults(n,a);var r=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,n];return t.postscribe={cancel:function(){r.stream?r.stream.abort():r[1]=u}},n.beforeEnqueue(r),f.push(r),p||d(),t.postscribe}s(h,{streams:{},queue:f,WriteStream:c.default})},function(t,e,n){"use strict";e.__esModule=!0;var r,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(3),i=(r=o)&&r.__esModule?r:{default:r},a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(4));var l="data-ps-",f="ps-style",p="ps-script";function c(t,e){var n=l+e,r=t.getAttribute(n);return a.existy(r)?String(r):r}function u(t,e,n){var r=2<arguments.length&&void 0!==n?n:null,o=l+e;a.existy(r)&&""!==r?t.setAttribute(o,r):t.removeAttribute(o)}var d=(h.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();a.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},h.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},h.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,n=void 0,r=void 0,o=[];(e=this.parser.readToken())&&!(n=a.isScript(e))&&!(r=a.isStyle(e));)(e=this.options.beforeWriteToken(e))&&o.push(e);0<o.length&&this._writeStaticTokens(o),n&&this._handleScriptToken(e),r&&this._handleStyleToken(e)},h.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},h.prototype._buildChunk=function(t){for(var e=this.actuals.length,n=[],r=[],o=[],i=t.length,a=0;a<i;a++){var s=t[a],c=s.toString();if(n.push(c),s.attrs){if(!/^noscript$/i.test(s.tagName)){var u=e++;r.push(c.replace(/(\/?>)/," "+l+"id="+u+" $1")),s.attrs.id!==p&&s.attrs.id!==f&&o.push("atomicTag"===s.type?"":"<"+s.tagName+" "+l+"proxyof="+u+(s.unary?" />":">"))}}else r.push(c),o.push("endTag"===s.type?c:"")}return{tokens:t,raw:n.join(""),actual:r.join(""),proxy:o.join("")}},h.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];a.existy(t=e.shift());){var n=1===t.nodeType;if(!n||!c(t,"proxyof")){n&&u(this.actuals[c(t,"id")]=t,"id");var r=t.parentNode&&c(t.parentNode,"proxyof");r&&this.actuals[r].appendChild(t)}e.unshift.apply(e,a.toArray(t.childNodes))}},h.prototype._handleScriptToken=function(t){var e=this,n=this.parser.clear();n&&this.writeQueue.unshift(n),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},h.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},h.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,f),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},h.prototype._buildStyle=function(t){var n=this.doc.createElement(t.tagName);return n.setAttribute("type",t.type),a.eachKey(t.attrs,function(t,e){n.setAttribute(t,e)}),n},h.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var n=this.doc.getElementById(e);n&&n.parentNode.replaceChild(t,n)},h.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},h.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},h.prototype._writeScriptToken=function(t,e){var n=this._buildScript(t),r=this._shouldRelease(n),o=this.options.afterAsync;t.src&&(n.src=t.src,this._scriptLoadHandler(n,r?o:function(){e(),o()}));try{this._insertCursor(n,p),n.src&&!r||e()}catch(t){this.options.error(t),e()}},h.prototype._buildScript=function(t){var n=this.doc.createElement(t.tagName);return a.eachKey(t.attrs,function(t,e){n.setAttribute(t,e)}),t.content&&(n.text=t.content),n},h.prototype._scriptLoadHandler=function(e,n){function r(){e=e.onload=e.onreadystatechange=e.onerror=null}var o=this.options.error;function t(){r(),null!=n&&n(),n=null}function i(t){r(),o(t),null!=n&&n(),n=null}function a(t,e){var n=t["on"+e];null!=n&&(t["_on"+e]=n)}a(e,"load"),a(e,"error"),s(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){i({msg:"onload handler failed "+t+" @ "+e.src})}t()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void i({msg:"onerror handler failed "+t+" @ "+e.src})}i({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&t()}})},h.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},h);function h(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),this.root=t,this.options=e,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new i.default("",{autoFix:e.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],u(this.proxyRoot,"proxyof",0)}e.default=d},function(t,e,n){var r;r=function(){return o={},n.m=r=[function(t,e,n){"use strict";var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.exports=i.default},function(t,e,n){"use strict";e.__esModule=!0;var r,a=u(n(2)),o=u(n(3)),i=n(6),s=(r=i)&&r.__esModule?r:{default:r},c=n(5);function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var l={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},f=(p.prototype.append=function(t){this.stream+=t},p.prototype.prepend=function(t){this.stream=t+this.stream},p.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},p.prototype._peekTokenImpl=function(){for(var t in l)if(l.hasOwnProperty(t)&&l[t].test(this.stream)){var e=o[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},p.prototype.peekToken=function(){return this._peekToken()},p.prototype.readToken=function(){return this._readToken()},p.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},p.prototype.clear=function(){var t=this.stream;return this.stream="",t},p.prototype.rest=function(){return this.stream},p);function p(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),this.stream=e;var r=!1,o={};for(var i in a)a.hasOwnProperty(i)&&(n.autoFix&&(o[i+"Fix"]=!0),r=r||o[i+"Fix"]);r?(this._readToken=(0,s.default)(this,o,function(){return t._readTokenImpl()}),this._peekToken=(0,s.default)(this,o,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(var d in(e.default=f).tokenToString=function(t){return t.toString()},f.escapeAttributes=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=(0,c.escapeQuotes)(t[n],null));return e},f.supports=a)a.hasOwnProperty(d)&&(f.browserHasFlaw=f.browserHasFlaw||!a[d]&&d)},function(t,e){"use strict";var n=!(e.__esModule=!0),r=!1,o=window.document.createElement("div");try{var i="<P><I></P></I>";o.innerHTML=i,e.tagSoup=n=o.innerHTML!==i}catch(t){e.tagSoup=n=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=r=2===o.childNodes.length}catch(t){e.selfClose=r=!1}o=null,e.tagSoup=n,e.selfClose=r},function(t,e,n){"use strict";e.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(0<=e)return new s.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new s.CharsToken(0<=e?e:t.length)},e.startTag=o,e.atomicTag=function(t){var e=o(t);if(e){var n=t.slice(e.length);if(n.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var r=n.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(r)return new s.AtomicTagToken(e.tagName,r[0].length+e.length,e.attrs,e.booleanAttrs,r[1])}}},e.endTag=function(t){var e=t.match(c.endTag);if(e)return new s.EndTagToken(e[1],e[0].length)};var s=n(4),c={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function o(t){var n,r,o;if(-1!==t.indexOf(">")){var e=t.match(c.startTag);if(e){var i=(n={},r={},o=e[2],e[2].replace(c.attr,function(t,e){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(n[arguments[5]]="",r[arguments[5]]=!0):n[e]=arguments[2]||arguments[3]||arguments[4]||c.fillAttr.test(e)&&e||"":n[e]="",o=o.replace(t,"")}),{v:new s.StartTagToken(e[1],e[0].length,n,r,!!e[3],o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===i?"undefined":a(i)))return i.v}}}},function(t,e,n){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var a=n(5);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,n){s(this,t),this.type=e,this.length=n,this.text=""},e.CommentToken=(r.prototype.toString=function(){return"\x3c!--"+this.content},r);function r(t,e){s(this,r),this.type="comment",this.length=e||(t?t.length:0),this.text="",this.content=t}e.CharsToken=(o.prototype.toString=function(){return this.text},o);function o(t){s(this,o),this.type="chars",this.length=t,this.text=""}var i=e.TagToken=(c.formatTag=function(t,e){var n=1<arguments.length&&void 0!==e?e:null,r="<"+t.tagName;for(var o in t.attrs)if(t.attrs.hasOwnProperty(o)){r+=" "+o;var i=t.attrs[o];void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[o]||(r+='="'+(0,a.escapeQuotes)(i)+'"')}return t.rest&&(r+=" "+t.rest),t.unary&&!t.html5Unary?r+="/>":r+=">",null!=n&&(r+=n+"</"+t.tagName+">"),r},c);function c(t,e,n,r,o){s(this,c),this.type=t,this.length=n,this.text="",this.tagName=e,this.attrs=r,this.booleanAttrs=o,this.unary=!1,this.html5Unary=!1}e.StartTagToken=(u.prototype.toString=function(){return i.formatTag(this)},u);function u(t,e,n,r,o,i){s(this,u),this.type="startTag",this.length=e,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=r,this.html5Unary=!1,this.unary=o,this.rest=i}e.AtomicTagToken=(l.prototype.toString=function(){return i.formatTag(this,this.content)},l);function l(t,e,n,r,o){s(this,l),this.type="atomicTag",this.length=e,this.text="",this.tagName=t,this.attrs=n,this.booleanAttrs=r,this.unary=!1,this.html5Unary=!1,this.content=o}e.EndTagToken=(f.prototype.toString=function(){return"</"+this.tagName+">"},f);function f(t,e){s(this,f),this.type="endTag",this.length=e,this.text="",this.tagName=t}},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(n,r,e){var o=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,n=0;e=this[n];n++)if(e.tagName===t)return!0;return!1},t}(),i={startTag:function(t){var e=t.tagName;"TR"===e.toUpperCase()&&o.lastTagNameEq("TABLE")?(n.prepend("<TBODY>"),a()):r.selfCloseFix&&s.test(e)&&o.containsTagName(e)?o.lastTagNameEq(e)?u(n,o):(n.prepend("</"+t.tagName+">"),a()):t.unary||o.push(t)},endTag:function(t){o.last()?r.tagSoupFix&&!o.lastTagNameEq(t.tagName)?u(n,o):o.pop():r.tagSoupFix&&(e(),a())}};function a(){var t=function(t,e){var n=t.stream,r=c(e());return t.stream=n,r}(n,e);t&&i[t.type]&&i[t.type](t)}return function(){return a(),c(e())}};var n=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,s=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function c(t){return t&&"startTag"===t.type&&(t.unary=n.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function u(t,e){var n=e.pop();t.prepend("</"+n.tagName+">")}}],n.c=o,n.p="",n(0);function n(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return r[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r,o},t.exports=r()},function(t,e){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!=t}function i(t,e,n){var r=void 0,o=t&&t.length||0;for(r=0;r<o;r++)e.call(n,t[r],r)}function a(t,e,n){for(var r in t)t.hasOwnProperty(r)&&e.call(n,r,t[r])}function n(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=o,e.isFunction=function(t){return"function"==typeof t},e.each=i,e.eachKey=a,e.defaults=function(n,t){return n=n||{},a(t,function(t,e){o(n[t])||(n[t]=e)}),n},e.toArray=function(n){try{return Array.prototype.slice.call(n)}catch(t){var e=function(){var e=[];return i(n,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":r(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=n,e.isScript=function(t){return n(t,"script")},e.isStyle=function(t){return n(t,"style")}}],n.c=o,n.p="",n(0);function n(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return r[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r,o},t.exports=r()}]);